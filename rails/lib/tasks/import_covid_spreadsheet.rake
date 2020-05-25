# run by doing:  bundle exec rails import_covid_spreadsheet:data

namespace :import_covid_spreadsheet do
  desc "Import data from BU COVID spreadsheet"
  task data: :environment do
    puts 'Importing COVID spreadsheet data...'

    # load spreadsheet
    data = Roo::Spreadsheet.open('lib/COVID-19 US state policy database (CUSP).xlsx') # opens spreadsheet

    # get the header row
    headers = data.row(1) 

    # iterate over spreadsheet rows
    for i in 2..data.last_row
      puts "col 1 : #{data.row(i)[1]}"
      puts "col 2 : #{data.row(i)[2]}"

      # Table.create(first_name: @xls.row(i)[1],last_name: @xls.row(i)[2],..)
    end

    # data.each_with_index do |row, idx|
    #   next if idx == 0 # skip the header row
     
    #   # create a hash from the headers and cells
    #   user_data = Hash[[headers, row].transpose]

    #   puts "data: #{user_data}"

    #   # next if data already exists
    #   # if User.exists?(email: user_data['email'])
    #   #   puts "User with email #{user_data['email']} already exists"
    #   #   next
    #   # end
      
    #   # user = User.new(user_data)
    #   # puts "Saving User with email '#{user.email}'"
    #   # user.save!
    # end


  end
end
