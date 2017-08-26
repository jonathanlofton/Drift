class Artist < ApplicationRecord
  validates :name, :genre, :image_url, presence: true

  has_many :albums
  has_many :songs

  def self.search(term="")
    self.where("artists.name ILIKE '%#{term}%'")
  end
end
