json.partial! 'api/artists/artist', artist: @artist
  json.albums @artist.albums do |album|
    json.(album, :id, :name, :image_url)
    json.songs album.songs do |song|
      json.partial! 'api/songs/song', song: song
    end
  end

json.all_songs @artist.songs.pluck(:id)
