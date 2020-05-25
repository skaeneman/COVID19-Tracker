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

        puts "data.row(i)[1]: #{col1}"
        puts "data.row(i)[2]: #{col2}"
        puts "data.row(i)[5]: #{col5}"
        puts "data.row(i)[6]: #{col6}"

        StatePolicy.create!(state_name: data.row(i)[0], state_of_emergency: col1, k_12_schools_closed: col2, shelter_in_place_start: col5, shelter_in_place_end: col6)
      end
    end

    # FaceMask.create(mandate_use_for_everyone: @xls.row(i)[1],mandate_use_for_employees_of_public_facing_businesses: @xls.row(i)[2], state_policy_id:)



  end
end
