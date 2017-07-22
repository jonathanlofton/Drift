# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Images
# The dodos
# (http://res.cloudinary.com/jlofton/image/upload/v1500702511/the_dodos_photo_gwzwzo.jpg)
# - album
# (http://res.cloudinary.com/jlofton/image/upload/v1500608954/dodos_album_s8bbef.jpg)
# Mac Demarco
# (http://res.cloudinary.com/jlofton/image/upload/v1500702509/mac_demarco_show_page_mk9jgh.jpg)
# - album
# http://res.cloudinary.com/jlofton/image/upload/v1500608955/mac_demarco_salad_days_r23ahk.jpg
# songs
# http://res.cloudinary.com/jlofton/video/upload/v1500607523/Mac_DeMarco_-_Blue_Boy_x4aori.mp3
# ASAP ROCKY
# http://res.cloudinary.com/jlofton/image/upload/v1500702822/asap-rocky-banner_mgvyhf.png
# - album
# http://res.cloudinary.com/jlofton/image/upload/v1500511968/asap-rocky-photo_alswqd.jpg
# Interpol
# http://res.cloudinary.com/jlofton/image/upload/v1500702510/Interpol-photo_vvccgl.jpg
# - album
# http://res.cloudinary.com/jlofton/image/upload/v1500702510/Interpol-photo_vvccgl.jpg
# songs
# http://res.cloudinary.com/jlofton/video/upload/v1500607527/Interpol_-_Cmere_oo2mq7.mp3
# Gang of Four
# http://res.cloudinary.com/jlofton/image/upload/v1500702510/gang_of_four_photo_afwkva.jpg
# -ablum
# songs
# http://res.cloudinary.com/jlofton/video/upload/v1500607528/Gang_of_Four_-_Damaged_Goods_EMI_Version_vhpy9r.mp3
# http://res.cloudinary.com/jlofton/image/upload/v1500608954/gang_of_four_album_qi9zmt.jpg
# Frank Ocean
# http://res.cloudinary.com/jlofton/image/upload/v1500702509/frank-ocean-icon_gkmlsr.jpg
# songs
# http://res.cloudinary.com/jlofton/video/upload/v1500607627/12_american_wedding_bxmqf6.mp3
# http://res.cloudinary.com/jlofton/video/upload/v1500607626/03_novacane_a5x3ue.mp3
# http://res.cloudinary.com/jlofton/video/upload/v1500607625/10_swim_good_atxtsi.mp3
# http://res.cloudinary.com/jlofton/video/upload/v1500607625/04_we_all_try_yfmrz8.mp3
# http://res.cloudinary.com/jlofton/video/upload/v1500607620/14_nature_feels_rkay3c.mp3
# - album
# http://res.cloudinary.com/jlofton/image/upload/v1500608955/frank_ocean_album_wsmy93.jpg
# Travis Scott
# http://res.cloudinary.com/jlofton/image/upload/v1500702509/naturel-travis-scott-rodeo-artwork_sva9x0.jpg
# - album
# http://res.cloudinary.com/jlofton/image/upload/v1500608956/travis_scott_album_svjcg0.jpg
# songs
# http://res.cloudinary.com/jlofton/video/upload/v1500607528/Travis_Scott_-_RaRa_ft._Lil_Uzi_Vert_w1a7sw.mp3



Artist.destroy_all
Album.destroy_all
Song.destroy_all
User.destroy_all

# User.create(username:, password:)
# Artist.create(name:, genre:, image_url:)
# Album.create(name:, artist_id:, genre:, image_url)
# Song.create(title: , album_id:, artist_id:, genre:, song_url:)

mac_demarco = Artist.create(name: "Mac Demarco", genre: "Indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702509/mac_demarco_show_page_mk9jgh.jpg")
salad_days = Album.create(name: "Salad Days", artist_id: mac_demarco.id, genre: mac_demarco.id, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608955/mac_demarco_salad_days_r23ahk.jpg")
Song.create(title: "Blue Boy", album_id: salad_days.id , artist_id: mac_demarco.id, genre: mac_demarco.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607523/Mac_DeMarco_-_Blue_Boy_x4aori.mp3")


gang_of_four = Artist.create(name: "Gang of Four", genre: "Punk", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702510/gang_of_four_photo_afwkva.jpg")
gang_of_four_album = Album.create(name: "Gang of Four", artist_id:gang_of_four.id, genre: gang_of_four.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608954/gang_of_four_album_qi9zmt.jpg")
Song.create(title: "Damaged Goods", album_id: gang_of_four_album.id, artist_id: gang_of_four.id, genre: gang_of_four.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607528/Gang_of_Four_-_Damaged_Goods_EMI_Version_vhpy9r.mp3")




frank_ocean = Artist.create(name: "Frank Ocean", genre: "R & B", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702509/frank-ocean-icon_gkmlsr.jpg")
nostalgia = Album.create(name:"Nostalgia Ultra", artist_id: frank_ocean.id, genre: frank_ocean.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608955/frank_ocean_album_wsmy93.jpg")
Song.create(title: "American Wedding", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607627/12_american_wedding_bxmqf6.mp3")
Song.create(title: "Novacane", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607626/03_novacane_a5x3ue.mp3")
Song.create(title: "Swim Good", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607625/10_swim_good_atxtsi.mp3")
Song.create(title: "We all try", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607625/04_we_all_try_yfmrz8.mp3")
Song.create(title: "Nature feels", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1500607620/14_nature_feels_rkay3c.mp3")


travis_scott = Artist.create(name: "Travis Scott", genre: "Hip-Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702509/naturel-travis-scott-rodeo-artwork_sva9x0.jpg")
rodeo = Album.create(name: "Rodeo", artist_id: travis_scott.id, genre: travis_scott.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608956/travis_scott_album_svjcg0.jpg")
Song.create(title: "RaRa" , album_id: rodeo.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607528/Travis_Scott_-_RaRa_ft._Lil_Uzi_Vert_w1a7sw.mp3")


User.create(username: "Phil Collins", password: "hotdogs")

asap_rocky = Artist.create(name: "ASAP ROCKY", genre: "Hip-Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702822/asap-rocky-banner_mgvyhf.png")

live_love_asap = Album.create(name: "Live. Love. ASAP", artist_id: asap_rocky.id, genre: asap_rocky.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/c_scale,w_500/v1500511968/asap-rocky-photo_alswqd.jpg")

kissin_pink = Song.create(title: "Kissin' Pink", album_id: live_love_asap.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500502810/10_-_ASAP_Rocky-Kissin_Pink_Feat_ASAP_Ferg_Prod_By_Beautiful_Lou_ntsgpp.mp3", genre: live_love_asap.genre, artist_id: asap_rocky.id)


whitest_boy_alive = Artist.create(name: "Whitest Boy Alive", genre: "indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500609336/whitest_boy_photo_dptpaa.jpg")

burning = Album.create(name: "Burning", artist_id: whitest_boy_alive.id, genre: whitest_boy_alive.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608956/whitest_boy_album_qfzmjn.jpg")

burning_song = Song.create(title: "Burning", album_id: burning.id, artist_id: whitest_boy_alive.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607522/The_Whitest_Boy_Alive_-_Burning_eucjy4.mp3", genre: burning.genre )

the_dodos = Artist.create(name: "The DoDos", genre: "indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702511/the_dodos_photo_gwzwzo.jpg")

visitor = Album.create(name: "Visitor", artist_id: the_dodos.id, genre: the_dodos.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608954/dodos_album_s8bbef.jpg")

walking = Song.create(title: "Walking", album_id: visitor.id, artist_id: the_dodos.id, genre: the_dodos.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607526/The_Dodos_-_Walking_tvptwk.mp3")
