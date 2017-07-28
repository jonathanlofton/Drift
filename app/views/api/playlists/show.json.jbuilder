json.partial! '/api/playlists/playlist', playlist: @playlist
  json.songs @playlist.songs do |song|
    json.(song, :id, :title)
    json.artist song.artist, :id, :name, :created_at
  end

  json.creator @playlist.creator.username

  json.followings @playlist.followings, :id, :user_id



json.all_songs @playlist.songs.pluck(:id)
