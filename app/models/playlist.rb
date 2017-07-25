class Playlist < ApplicationRecord
  validates :name, :creator_id, presence: true

  has_many :songs
end
