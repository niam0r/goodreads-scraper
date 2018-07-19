class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :author
      t.string :author_img
      t.string :book
      t.text :content
      t.string :link

      t.timestamps
    end
  end
end
