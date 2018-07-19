require 'open-uri'
require 'nokogiri'

url = "https://www.goodreads.com/quotes/list/61714489-romain-niam0r?utf8=%E2%9C%93&sort=date_added"
doc = Nokogiri::HTML(open(url))

elementList = doc.search('.elementList')
puts elementList.length

elementList.each do |element|
  authorOrTitle = element.search('.authorOrTitle').text.strip

  quoteText = element.search('.quoteText').text.strip

  # is_attribute_defined = element.search('a > img').attribute('src').nil?
  # p is_attribute_defined
  # img_src =  element.search('a > img')&.attribute('src').value

  # p img_src
  p element.search('a > img').attribute('src').class
  # if element.search('a > img').attribute('src')
  #   img_src = element.search('a > img').attribute('src').value
  # else
  #   img_src = 'nil'
  # end
  # p img_src
end
