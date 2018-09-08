class Api::V1::QuotesController < Api::V1::BaseController
  before_action :set_quote, only: [ :show ]
  # def pundit_user
  #   User.find_by_other_means
  # end
  def index
    @quotes = policy_scope(Quote)
  end

  def show
    # @quote = policy_scope(Quote)
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
    authorize @quote
  end
end
