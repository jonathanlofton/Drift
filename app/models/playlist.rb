class Playlist < ApplicationRecord
  validates :name, :creator_id, presence: true

  has_many :playlist_songs

  has_many :followings

  has_many :followers,
    through: :followings,
    source: :user

  belongs_to :creator,
    class_name: :User

  has_many :songs,
  through: :playlist_songs
end
