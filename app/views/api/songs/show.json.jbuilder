json.partial! 'api/songs/song', song: @song
  json.playlists @song.playlists do |playlist|
    json.(playlist, :id, :name, :image_url)
  end
