json.extract! playlist, :id, :name, :creator_id, :image_url

json.followers @playlist.followers do |follower|
  json.(follower, :id, :username)
end
