json.array! @songs.each do |song|
  json.title song.title
  json.genre song.genre
  json.album_id song.album_id
  json.artist_id song.artist_id
  json.song_url song.song_url
end
