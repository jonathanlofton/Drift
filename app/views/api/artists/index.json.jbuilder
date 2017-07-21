json.array! @artists.each do |artist|
  json.name artist.name
  json.genre artist.genre
  json.description artist.description
  json.image_url artist.image_url
end
