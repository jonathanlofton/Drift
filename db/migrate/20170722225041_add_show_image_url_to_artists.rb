class AddShowImageUrlToArtists < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :show_image_url, :string
  end
end
