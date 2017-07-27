@songs.each do |song|
  json.set! song.id do
    json.partial! 'api/songs/song', song: song
  end
end

json.all_songs @songs.pluck(:id)
