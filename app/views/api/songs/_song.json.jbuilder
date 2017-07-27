json.extract! song, :id, :title, :album_id, :artist_id, :song_url, :genre, :created_at

json.artist song.artist, :name
