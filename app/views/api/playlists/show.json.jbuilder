json.partial! '/api/playlists/playlist', playlist: @playlist
  json.songs @playlist.songs do |song|
    json.(song, :id, :title)
    json.artist song.artist, :id, :name, :created_at
  end

  json.followed @playlist.followers.include?(current_user)

  json.creator @playlist.creator.username

  json.followings @playlist.followings, :id, :user_id

  json.followers @playlist.followers do |follower|
    json.(follower, :id, :username)
  end

json.all_songs @playlist.songs.pluck(:id)
