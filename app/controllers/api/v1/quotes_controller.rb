class Api::V1::RestaurantsController < Api::V1::BaseController
  def index
    @quotes = policy_scope(Quote)
  end
end
