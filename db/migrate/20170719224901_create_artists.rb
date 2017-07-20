class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.text :description
      t.string :genre, null: false
      t.string :image_url, null: false 

      t.timestamps
    end
  end
end
