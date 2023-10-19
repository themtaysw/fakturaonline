module ApplicationHelper
  def link_to_menu_item(tag, text, url = nil, options = {})
    wrapper_options = options.delete(:wrapper_options) || {}
    wrapper_options[:class] ||= ['navbar-navigation__item']

    current_path = request.path

    wrapper_options[:class] << ' active' if current_path.include?(url)

    content_tag tag, link_to(content_tag(:span, text), url, options).html_safe, wrapper_options
  end
end
