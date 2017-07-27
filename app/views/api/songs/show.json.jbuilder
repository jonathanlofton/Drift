json.partial! 'api/songs/song', song: @song
  json.playlists @song.playlists do |playlist|
    json.(playlist, :id, :name, :image_url)
  end

  json.album @song.album.image_url

  json.artist @song.artist.name
