json.array! @artists.each do |artist|
  json.name artist.name
  json.genre artist.genre
  json.description artists.description
  json.image_url artists.image_url
end
