# run by doing:  bundle exec rails import_covid_spreadsheet:data in the console

namespace :import_covid_spreadsheet do
  desc "Import data from BU COVID spreadsheet"
  task data: :environment do
    puts 'Importing COVID spreadsheet data...'

    # load spreadsheet
    data = Roo::Spreadsheet.open('lib/COVID-19 US state policy database (CUSP).xlsx') # opens spreadsheet

    # get the header row
    headers = data.row(1) 

    # for i in 2..data.last_row     
    for i in 2..52     
      # map the StatePolicy table
      # puts "State Policy database table being mapped..."
      # puts "mapping col A(0) State to StatePolicy state_name col: #{data.row(i)[0]}"
      # puts "mapping col A(1) State of emergency to StatePolicy state_of_emergency col: #{data.row(i)[1]}"
      # puts "mapping col A(2) Date closed K-12 schools to StatePolicy state_of_emergency col: #{data.row(i)[2]}"
      # puts "mapping col F(6) End/relax stay at home/shelter in place to StatePolicy shelter_in_place_start col: #{data.row(i)[5]}"
      # puts "mapping col G(7) Stay at home/shelter in place to StatePolicy shelter_in_place_end col: #{data.row(i)[6]}"   

      if StatePolicy.exists?(state_name: data.row(i)[0])
        puts "State with name #{data.row(i)[0]} already exists"
        next
      else
        ###############################################################################
        # State Policy table
        ###############################################################################            
        puts "State Policy table inserting row... #{data.row(i)}"

        # puts "Creating state entry for: #{data.row(i)[0]}"
        col1 = data.row(i)[1]
        col2 = data.row(i)[2]
        col5 = data.row(i)[5]
        col6 = data.row(i)[6]

        # there are values listed as '0' for dates in the spreadsheet that must be changed to nil
        col1 == 0.0 ? col1 = nil : col1 = data.row(i)[1]
        col2 == 0.0 ? col2 = nil : col2 = data.row(i)[2]
        col5 == 0.0 ? col5 = nil : col5 = data.row(i)[5]
        col6 == 0.0 ? col6 = nil : col6 = data.row(i)[6]

        # puts "data.row(i)[1]: #{col1}"
        # puts "data.row(i)[2]: #{col2}"
        # puts "data.row(i)[5]: #{col5}"
        # puts "data.row(i)[6]: #{col6}"

        StatePolicy.create!(state_name: data.row(i)[0], state_of_emergency: col1, k_12_schools_closed: col2, shelter_in_place_start: col5, shelter_in_place_end: col6)
        
        # get the state policy that was just created so you can use the id in other tables
        state = StatePolicy.find_by(state_name: data.row(i)[0])

        ###############################################################################
        # Face Masks table
        ###############################################################################    
        puts "Face Mask table inserting row... #{data.row(i)}"    
        col10 = data.row(i)[10]
        col11 = data.row(i)[11]

        # there are values listed as '0' for dates in the spreadsheet that must be changed to nil
        col10 == 0.0 ? col10 = nil : col10 = data.row(i)[10]
        col11 == 0.0 ? col11 = nil : col11 = data.row(i)[11]

        FaceMask.create(state_policy_id: state.id, mandate_use_for_everyone: col10, mandate_use_for_employees_of_public_facing_businesses: col11)

        ###############################################################################
        # Business table
        ###############################################################################   
        puts "Business table inserting row... #{data.row(i)}"

        col3 = data.row(i)[3] # Closed day cares
        col4 = data.row(i)[4] # Date banned visitors to nursing homes
        col7 = data.row(i)[7] # Closed non-essential businesses
        col8 = data.row(i)[8] # Began to reopen businesses statewide
        col9 = data.row(i)[9] # Religious Gatherings Exempt Without Clear Social Distance Mandate 
        col13 = data.row(i)[13] # Keep Firearms Sellers Open
        col12 = data.row(i)[12] # Alcohol/Liquor Stores Open
        col14 = data.row(i)[14] # Closed restaurants except take out
        col15 = data.row(i)[15] # Reopen restaurants
        col17 = data.row(i)[17] # Closed gyms
        col18 = data.row(i)[18] # Reopened gyms
        col19 = data.row(i)[19] # Closed movie theaters
        col20 = data.row(i)[20] # Reopened movie theaters
        
        # handle the 0 entries in the spreadsheet
        col3 == 0.0 ? col3 = nil : col3 = data.row(i)[3]
        col4 == 0.0 ? col4 = nil : col4 = data.row(i)[4]
        col7 == 0.0 ? col7 = nil : col7 = data.row(i)[7]
        col8 == 0.0 ? col8 = nil : col8 = data.row(i)[8]
        col9 == 0.0 ? col9 = nil : col9 = data.row(i)[9]
        col13 == 0.0 ? col13 = nil : col13 = data.row(i)[13]
        col12 == 0.0 ? col12 = nil : col12 = data.row(i)[12]
        col14 == 0.0 ? col14 = nil : col14 = data.row(i)[14]
        col15 == 0.0 ? col15 = nil : col15 = data.row(i)[15]
        col17 == 0.0 ? col17 = nil : col17 = data.row(i)[17]
        col18 == 0.0 ? col18 = nil : col18 = data.row(i)[18]
        col19 == 0.0 ? col19 = nil : col19 = data.row(i)[19]
        col20 == 0.0 ? col20 = nil : col20 = data.row(i)[20]

        Business.create(state_policy_id: state.id, day_cares_closed: col3, nursing_home_visitors_banned: col4, non_essential_businesses_closed: col7, 
        reopen_businesses: col8, religious_gatherings_exempt: col9, firearm_retailers_open: col13, liquor_stores_open: col12, closed_restaurants_except_take_out: col14, 
        reopen_restaurants: col15, closed_gyms: col17, reopened_gyms: col18, closed_movie_theaters: col19, reopened_movie_theaters: col20)

       ###############################################################################
        #  Property table
        ###############################################################################   
        puts "Property table inserting row... #{data.row(i)}"

        col21 = data.row(i)[21] # Stop Initiation of Evictions overall or due to COVID related issues
        col22 = data.row(i)[22] # Stop enforcement of evictions overall or due to COVID related issues
        col23 = data.row(i)[23] # Renter grace period or use of security deposit to pay rent
        col24 = data.row(i)[24] # Order freezing utility shut offs
        col25 = data.row(i)[25] # Froze mortgage payments

        col21 == 0.0 ? col21 = nil : col21 = data.row(i)[21]
        col22 == 0.0 ? col22 = nil : col22 = data.row(i)[22]
        col23 == 0.0 ? col23 = nil : col23 = data.row(i)[23]
        col24 == 0.0 ? col24 = nil : col24 = data.row(i)[24]
        col25 == 0.0 ? col25 = nil : col25 = data.row(i)[25]

        Property.create(state_policy_id: state.id, stop_initiating_evictions: col21, stop_enforcing_evictions: col22, 
          grace_period_or_security_deposit_towards_rent: col23, froze_utility_shut_offs: col24, froze_mortgage_payments: col25)


        ###############################################################################
        #  Health Care table
        ###############################################################################   
        puts "Health Care table inserting row... #{data.row(i)}"

        col26 = data.row(i)[26] # Modify Medicaid requirements with 1135 waivers (date of CMS approval)
        col27 = data.row(i)[27] # Reopened ACA enrollment using a special enrollment period
        col28 = data.row(i)[28] # Allow audio-only telehealth
        col29 = data.row(i)[29] # Allow/expand Medicaid telehealth coverage
        col30 = data.row(i)[30] # Suspended elective medical/dental procedures
        col31 = data.row(i)[31] # Resumed elective medical procedures
        col38 = data.row(i)[38] # Made Effort to Limit Abortion Access (boolean)
        col39 = data.row(i)[39] # Efforts to limit abortion access details
        col47 = data.row(i)[47] # Medicaid Expansion (boolean)

        col26 == 0.0 ? col26 = nil : col26 = data.row(i)[26]
        col27 == 0.0 ? col27 = nil : col27 = data.row(i)[27]
        col28.to_s.start_with?("0", "*") ? col28 = nil : col28 = data.row(i)[28] # has an asterisk in the column
        col29 == 0.0 ? col29 = nil : col29 = data.row(i)[29]
        col30 == 0.0 ? col30 = nil : col30 = data.row(i)[30]
        col31 == 0.0 ? col31 = nil : col31 = data.row(i)[31]
        # col38 == 0.0 ? col38 = nil : col38 = data.row(i)[38] boolean value so don't check for 0
        col39.to_s.start_with?("0", "*") ? col39 = nil : col39 = data.row(i)[39]   
        # col47 == 0.0 ? col47 = nil : col47 = data.row(i)[47] # boolean

        HealthCare.create(state_policy_id: state.id, modify_medicaid_with_1135_waivers: col26, aca_special_enrollment_period: col27, audio_only_telehealth: col28, 
          allow_or_expand_medicaid_telehealth: col29, suspended_elective_medical: col30, resumed_elective_medical: col31, made_efforts_to_limit_abortions: col38, 
          limit_abortion_details: col39, medicaid_expansion: col47)

       ###############################################################################
        #  table
        ###############################################################################   

        # LOOK FOR BOOLEAN VALUES AND MAKE SURE YOU'RE NOT SETTIGN THEM TO NIL BECAUSE OF 0.0 IN THE SPREADSHEET

        # col = data.row(i)[]
        # col = data.row(i)[]
        # col = data.row(i)[]
        # col = data.row(i)[]
        # col = data.row(i)[]
        # col = data.row(i)[]

        # col == 0.0 ? col = nil : col = data.row(i)[]
        # col == 0.0 ? col = nil : col = data.row(i)[]
        # col == 0.0 ? col = nil : col = data.row(i)[]
        # col == 0.0 ? col = nil : col = data.row(i)[]

      end
    end


  end
end
