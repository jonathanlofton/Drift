json.partial! 'api/albums/album', album: @album


 json.artist @album.artist.name

 json.songs @album.songs

 json.all_songs @album.songs.pluck(:id)
