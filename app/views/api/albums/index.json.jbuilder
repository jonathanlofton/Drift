json.array! @albums do |album|
  json.partial! 'api/albums/album', album: album
  json.songs album.songs do |song|
    json.(song, :title, :song_url)
  end
end
