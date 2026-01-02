# Redmine Dark Mode Plugin
# Adds dark mode UI support to Redmine

require 'redmine'

Redmine::Plugin.register :redmine_dark_mode do
  name 'Redmine Dark Mode'
  author 'Hasan'
  description 'Adds dark mode UI support with a toggle button'
  version '1.0.0'
  url 'https://github.com/redmine/redmine_dark_mode'
  requires_redmine version_or_higher: '5.0.0'
end

# Load the view hooks
require_dependency File.expand_path('../lib/dark_mode_hooks', __FILE__)
