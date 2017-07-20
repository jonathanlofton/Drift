class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, :song_url, :genre, presence: true

  belongs_to :album

  belongs_to :artist
end
