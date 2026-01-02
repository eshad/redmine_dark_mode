# Redmine Dark Mode Plugin
# View hooks for injecting dark mode assets

class DarkModeHooks < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context = {})
    stylesheet_link_tag('dark_mode', plugin: 'redmine_dark_mode') +
    javascript_include_tag('dark_mode', plugin: 'redmine_dark_mode')
  end
end
