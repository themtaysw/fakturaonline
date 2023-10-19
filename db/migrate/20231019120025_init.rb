class Init < ActiveRecord::Migration[7.0]
  def change
    create_table "prismic_posts", id: :string, force: :cascade do |t|
      t.string "uid"
      t.string "author"
      t.string "slug"
      t.date "date"
      t.string "title"
      t.string "perex"
      t.string "image"
      t.string "body"
      t.string "category_slug"
      t.string "sub_category_slug"
      t.string "locale"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
