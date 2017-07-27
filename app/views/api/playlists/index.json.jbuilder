json.array! @playlists do |playlist|
  json.partial! '/api/playlists/playlist', playlist: playlist
  json.creator playlist.creator.username
  json.created playlist.creator_id == current_user.id
end
