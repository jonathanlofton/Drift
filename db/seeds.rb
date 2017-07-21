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
User.destroy_all

User.create(username: "Phil Collins", password: "hotdogs")

asap_rocky = Artist.create(name: "ASAP ROCKY", genre: "Hip-Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500605978/asap-rocky-banner_f7iat2.png")


live_love_asap = Album.create(name: "Live. Love. ASAP", artist_id: asap_rocky.id, genre: asap_rocky.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/c_scale,w_500/v1500511968/asap-rocky-photo_alswqd.jpg")

kissin_pink = Song.create(title: "Kissin' Pink", album_id: live_love_asap.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500502810/10_-_ASAP_Rocky-Kissin_Pink_Feat_ASAP_Ferg_Prod_By_Beautiful_Lou_ntsgpp.mp3", genre: live_love_asap.genre, artist_id: asap_rocky.id)


whitest_boy_alive = Artist.create(name: "Whitest Boy Alive", genre: "indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500609336/whitest_boy_photo_dptpaa.jpg")

burning = Album.create(name: "Burning", artist_id: whitest_boy_alive.id, genre: whitest_boy_alive.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608956/whitest_boy_album_qfzmjn.jpg")

burning_song = Song.create(title: "Burning", album_id: burning.id, artist_id: whitest_boy_alive.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607522/The_Whitest_Boy_Alive_-_Burning_eucjy4.mp3", genre: burning.genre )

the_dodos = Artist.create(name: "The DoDos", genre: "indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500609203/the_dodos_photo_jdb2cb.jpg")

visitor = Album.create(name: "Visitor", artist_id: the_dodos.id, genre: the_dodos.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608954/dodos_album_s8bbef.jpg")

walking = Song.create(title: "Walking", album_id: visitor.id, artist_id: the_dodos.id, genre: the_dodos.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607526/The_Dodos_-_Walking_tvptwk.mp3")
