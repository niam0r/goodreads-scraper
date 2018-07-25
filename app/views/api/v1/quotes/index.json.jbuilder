json.array! @quotes do |quote|
  json.extract! quote, :id, :content, :author, :author_img, :book
end
