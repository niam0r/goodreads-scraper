require 'open-uri'
require 'nokogiri'

url = "https://www.goodreads.com/quotes/list/61714489-romain-niam0r?utf8=%E2%9C%93&sort=date_added"
doc = Nokogiri::HTML(open(url))

elementList = doc.search('.elementList')
puts elementList.length

elementList.each do |element|
  authorOrTitle = element.search('.authorOrTitle').text.strip
  quoteText = element.search('.quoteText').text.strip

  if element.search('a > img').attribute('src').defined?
    img_src =  element.search('a > img')&.attribute('src').value
  end

  p img_src
end

