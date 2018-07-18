require 'open-uri'
require 'nokogiri'

url = "https://www.goodreads.com/quotes/list/61714489-romain-niam0r?utf8=%E2%9C%93&sort=date_added"
doc = Nokogiri::HTML(open(url))
doc.search('.elementList').each do |element|
  authorOrTitle = element.search('.authorOrTitle').text.strip
  quoteText = element.search('.quoteText').text.strip
  # img_src =  element.attribute.('src').value
  puts img_src
end

