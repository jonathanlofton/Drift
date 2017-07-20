class Album < ApplicationRecord
  validates :name, :artist_id, :genre, :image_url, presence: true

  belongs_to :artist
  has_many :songs
end
