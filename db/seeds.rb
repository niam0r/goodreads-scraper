require 'open-uri'

Quote.destroy_all
puts "Destroyed all quotes"

url = "https://www.goodreads.com/quotes/list/61714489-romain-niam0r?utf8=%E2%9C%93&sort=date_added"
# url = "./app/my_quotes.html"
doc = Nokogiri::HTML(open(url), nil, Encoding::UTF_8.to_s)

elementList = doc.search('.elementList')
puts "There's #{elementList.length} quotes"

elementList.each do |element|
  quoteText = element.search('.quoteText').text.strip.split('//<![CDATA[')[0]

  content = quoteText.split("\n")[0][1...-1]

  # author = quoteText.split("\n")[2].tr(',', '').strip // old selector
  author = element.search('span.authorOrTitle').text.strip.gsub(',', '')

  author_img = element.search('a > img').empty? ? '' : element.search('a > img').attribute('src').value

  # book = quoteText.split("\n")[4].nil? ? '' : quoteText.split("\n")[4].strip // old selector
  book = element.search('a.authorOrTitle').text

  quote = Quote.create({
    content: content,
    author: author,
    author_img: author_img,
    book: book
  })
end

