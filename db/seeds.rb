# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Album.destroy_all
Song.destroy_all


asap_rocky = Artist.create(name: "ASAP ROCKY", genre: "Hip-Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500513375/asap-rocky-banner_f7iat2.png")


live_love_asap = Album.create(name: "Live. Love. ASAP", artist_id: asap_rocky.id, genre: asap_rocky.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/c_scale,w_500/v1500511968/asap-rocky-photo_alswqd.jpg")

kissin_pink = Song.create(title: "Kissin' Pink", album_id: live_love_asap.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500502810/10_-_ASAP_Rocky-Kissin_Pink_Feat_ASAP_Ferg_Prod_By_Beautiful_Lou_ntsgpp.mp3", genre: live_love_asap.genre, artist_id: asap_rocky.id)
