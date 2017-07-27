json.array! @playlists do |playlist|
  json.partial! '/api/playlists/playlist', playlist: playlist

  json.created playlist.creator_id == current_user.id
end
