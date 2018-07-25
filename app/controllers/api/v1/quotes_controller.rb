class Api::V1::QuotesController < Api::V1::BaseController
  # def pundit_user
  #   User.find_by_other_means
  # end
  def index
    @quotes = policy_scope(Quote)
  end
end
