json.array! @albums do |album|
  json.partial! 'api/albums/album', album: album
end
