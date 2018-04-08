class ApplicationController < ActionController::API

  protected

  def api_token
    request.headers['X-API-TOKEN']  # TODO rename private token and public token?
  end

  def api_id
    request.headers['X-API-ID']
  end

  def origin
    request.headers['origin']
  end

  def authenticate_admin_api_token
    return head(:unauthorized) if api_token.nil?
    return head(:forbidden) if api_token != Rails.application.secrets.admin_api_token
  end

  def authenticate_api_token
    return head(:unauthorized) if api_token.nil?
    return head(:forbidden) if !apps.does_api_token_exist?(api_token)
  end

  def authenticate_api_id_and_domain
    return head(:unauthorized) if api_id.nil?
    return head(:forbidden) if !apps.does_api_id_domain_combo_exist?(api_id, origin)
  end

  def apps
    Thread.current[:apps] ||= CachedApps.new
  end

end
