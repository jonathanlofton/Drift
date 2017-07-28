json.extract! user, :id, :username

json.followings user.followings do |following|
  json.(following, :id, :playlist_id)

end

json.followed_playlists user.followed_playlists, :id, :name, :image_url
