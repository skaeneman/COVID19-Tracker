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
        puts "populating the State Policy table"

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
        puts "populating the Face Mask table"    
        col10 = data.row(i)[10]
        col11 = data.row(i)[11]

        # there are values listed as '0' for dates in the spreadsheet that must be changed to nil
        col10 == 0.0 ? col10 = nil : col10 = data.row(i)[10]
        col11 == 0.0 ? col11 = nil : col11 = data.row(i)[11]

        FaceMask.create(state_policy_id: state.id, mandate_use_for_everyone: col10, mandate_use_for_employees_of_public_facing_businesses: col11)

        ###############################################################################
        # Business table
        ###############################################################################   
        puts "populating the Business table"

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

        Business.create!(state_policy_id: state.id, day_cares_closed: col3, nursing_home_visitors_banned: col4, non_essential_businesses_closed: col7, 
        reopen_businesses: col8, religious_gatherings_exempt: col9, firearm_retailers_open: col13, liquor_stores_open: col12, closed_restaurants_except_take_out: col14, 
        reopen_restaurants: col15, closed_gyms: col17, reopened_gyms: col18, closed_movie_theaters: col19, reopened_movie_theaters: col20)

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
