json.partial! 'api/artists/artist', artist: @artist
  json.albums @artist.albums do |album|
    json.(album, :name, :image_url)
    json.songs album.songs do |song|
      json.(song, :title, :song_url)
    end
  end
