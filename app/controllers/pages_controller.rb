class PagesController < ApplicationController
  def home
    @quotes = Quote.all
  end
end
