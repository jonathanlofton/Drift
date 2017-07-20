json.array! @songs.each do |song|
  json.title song.title
  json.genre song.genre
end
