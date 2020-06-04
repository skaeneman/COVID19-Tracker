# config valid for current version and patch releases of Capistrano
lock "~> 3.14.0"

require 'capistrano-db-tasks'

set :application, "covid19-tracker"
set :repo_url, "git@github.com:skaeneman/COVID19-Tracker.git"

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/deploy/covid19-tracker"
set :branch, ENV['BRANCH'] if ENV['BRANCH'] 

set :linked_files, %w{config/database.yml, config/master.key}
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

set :keep_releases, 3
set :keep_assets, 3

# remove if not using capistrano-db-tasks gem
set :db_local_clean, true
set :db_remote_clean, true

# restart the application when code is deployed
namespace :deploy do
  desc 'Restart Application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt') 
    end
  end
  after :publishing, 'deploy:restart'
  after :finishing, 'deploy:cleanup'
end



# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
