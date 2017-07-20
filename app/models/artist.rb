class Artist < ApplicationRecord
  validates :name, :genre, :image_url, presence: true

  has_many :albums
  has_many :songs
end
