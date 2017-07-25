json.array! @playlist_songs do |playlist_song|
  json.partial! '/api/playlist_songs/playlist_song', playlist_song: playlist_song
end
