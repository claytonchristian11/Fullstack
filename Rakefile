# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

require 'aws-sdk-core'

Aws.config[:ssl_ca_bundle] = '/app/assets/ca-bundle/ca-bundle.crt'

Rails.application.load_tasks
