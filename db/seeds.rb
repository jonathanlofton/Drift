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
Playlist.destroy_all
PlaylistSong.destroy_all

# User.create(username:, password:)
# Artist.create(name:, genre:, image_url:, show_image_url:)
# Album.create(name:, artist_id:, genre:, image_url)
# Song.create(title: , album_id:, artist_id:, genre:, song_url:)


real_estate = Artist.create(name: "Real Estate", genre: "alternative", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501215714/realestate_album_comsns.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501215714/realestatebanner_llojvw.jpg")
days = Album.create(name: "Days", artist_id: real_estate.id, genre: real_estate.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501215714/realestate_album_comsns.jpg")
Song.create(title: "Beach Comber", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215196/01_Beach_Comber_mqhpqh.mp3")
Song.create(title: "Pool swimmers", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215193/02_Pool_Swimmers_jbqtpn.mp3")
Song.create(title: "Suburban dogs", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215195/03_Suburban_Dogs_qvra78.mp3")
Song.create(title: "Black Lake", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215195/04_Black_Lake_xsa8vg.mp3")
Song.create(title: "Atlantic city", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215192/05_Atlantic_City_fev2ty.mp3")
Song.create(title: "Fake blues", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215195/06_Fake_Blues_dt933g.mp3")
Song.create(title: "Green river", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215196/07_Green_River_brqld3.mp3")
Song.create(title: "Suburban beverage", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215199/08_Suburban_Beverage_sodrbg.mp3")
Song.create(title: "Lets rock the beach", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215198/09_Let_s_Rock_The_Beach_ptpmgt.mp3")
Song.create(title: "Snow days", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501215199/10_Snow_Days_hr14zz.mp3")





modest_mouse = Artist.create(name: "Modest Mouse", genre: "alternative", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501215131/modestmousealbum_xcxg1i.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501215132/modestmousebanner_g0t10f.jpg")
good_news = Album.create(name: "Good news for people who love bad news", artist_id: modest_mouse.id, genre: modest_mouse.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501215131/modestmousealbum_xcxg1i.jpg")
Song.create(title: "The world at large", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214445/02_The_World_At_Large_xs7uwy.mp3")
float_on = Song.create(title: "Float On", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214452/03_Float_On_hlnyt1.mp3")
Song.create(title: "Ocean breathes salty", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214455/04_Ocean_Breathes_Salty_idoysj.mp3")
Song.create(title: "Dig your grave", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214443/05_Dig_Your_Grave_b3lr2q.mp3")
Song.create(title: "Bury me with it", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214445/06_Bury_Me_With_It_mqkmb3.mp3")
Song.create(title: "Dance Hall", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214452/07_Dance_Hall_xpdtz5.mp3")
Song.create(title: "Bukowski", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214453/08_Bukowski_mzhkk6.mp3")
Song.create(title: "This devils workday", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214448/09_This_Devil_s_Workday_fhtz6u.mp3")
Song.create(title: "The View", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214456/10_The_View_xhbcob.mp3")
Song.create(title: "Black Cadillac", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501214455/14_Black_Cadillacs_khqibw.mp3")






outkast = Artist.create(name: "Outkast", genre: "Hip Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501213997/outkastpic_tlu5vq.jpg", show_image_url: "https://res.cloudinary.com/jlofton/image/upload/v1501228044/outkast_banner_qv9swz.jpg")
speakerboxxx = Album.create(name: "Speakerboxxx", artist_id: outkast.id, genre: outkast.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501213997/outkast_album_yef0qy.jpg")
hey_ya = Song.create(title: "Hey Ya", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213843/2-09_Hey_Ya_y4yb39.mp3")
Song.create(title: "Roses", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213846/2-10_Roses_e9zsno.mp3")
Song.create(title: "Good day good sir", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213839/2-11_Good_Day_Good_Sir_x0cijd.mp3")
Song.create(title: "Behold a lady", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213846/2-12_Behold_A_Lady_lyeoki.mp3")
Song.create(title: "Pink blue", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213846/2-13_Pink_Blue_c4pqog.mp3")
Song.create(title: "Love in war", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213844/2-14_Love_In_War_uqonto.mp3")
Song.create(title: "Shes alive", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213845/2-15_She_s_Alive_zjqooj.mp3")
Song.create(title: "Dracula", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213848/2-16_Dracula_s_Wedding_Feat._Kelis_waqjbp.mp3")
Song.create(title: "My favorite things", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213851/2-17_My_Favorite_Things_zfc8sx.mp3")
Song.create(title: "Take off your cool", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213850/2-18_Take_Off_Your_Cool_Feat._Norah_Jones_dlsrsy.mp3")







kings = Artist.create(name: "Kings of Convenience", genre: "Acoustic", image_url: "https://res.cloudinary.com/jlofton/image/upload/v1501213347/kingsphoto_ujdmfn.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501213325/kings_banner_nnrrlu.jpg")
riot = Album.create(name: "Riot On An Empty Street", artist_id: kings.id, genre: kings.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501213324/kings_album_yrh9k0.jpg")
homesick = Song.create(title: "Homesick", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213115/01_Homesick_hesku3.mp3")
Song.create(title: "Misread", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213115/02_Misread_yhucxo.mp3")
Song.create(title: "Cayman Islands", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213122/03_Cayman_Islands_wpejod.mp3")
Song.create(title: "Stay Out of Trouble", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213125/04_Stay_Out_Of_Trouble_jwc66b.mp3")
Song.create(title: "Know How", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213126/05_Know-How_kdiguh.mp3")
Song.create(title: "Sorry or please", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213116/06_Sorry_Or_Please_z8pdhb.mp3")
Song.create(title: "Love is no big truth", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213118/07_Love_Is_No_Big_Truth_kozge7.mp3")
Song.create(title: "Id rather dance with you", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213118/08_I_d_Rather_Dance_With_You_i6o4aa.mp3")
Song.create(title: "Live long", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213120/09_Live_Long_ecsov3.mp3")
Song.create(title: "Suprise Ice", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213123/10_Suprise_Ice_vzbbcz.mp3")
Song.create(title: "Gold in the air", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213123/11_Gold_In_The_Air_Of_Summer_iz5lxd.mp3")
Song.create(title: "The Build Up", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501213123/12_The_Build-Up_dm1jhu.mp3")



toro_y_moi = Artist.create(name: "Toro Y Moi", genre: "Indie", image_url: "https://res.cloudinary.com/jlofton/image/upload/v1501213048/toro_y_moi_u6d6jg.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501221802/toro_y_moi_new_banner_wuvqmx.jpg")
causers_of_this = Album.create(name:"Causers of this", artist_id: toro_y_moi.id, genre: toro_y_moi.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501213016/toroymoi_album_wruwom.jpg")
Song.create(title: "Blessa", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212571/01_Blessa_y4lyfb.mp3")
Song.create(title: "Minors" , album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212571/02_Minors_lndmq2.mp3")
imprint = Song.create(title: "Imprint After", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501212571/03_Imprint_After_sbtfnq.mp3")
Song.create(title: "Lissoms", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212569/04_Lissoms_qzoa57.mp3")
Song.create(title: "Fax Shadow", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212571/05_Fax_Shadow_ckviie.mp3")
Song.create(title: "Thanks Vision", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212573/06_Thanks_Vision_uomocb.mp3")
Song.create(title: "Freak Love", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212574/07_Freak_Love_gwu7zz.mp3")
talamak = Song.create(title: "Talamak", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212577/08_Talamak_mdxjxp.mp3")
Song.create(title: "You Hid What?", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501212576/09_You_Hid_wh0lot.mp3")
Song.create(title: "Low Shoulder", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212577/10_Low_Shoulder_e0wtjm.mp3")
Song.create(title: "Causers of this", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501212576/11_Causers_Of_This_ap9fon.mp3")


vampire_weekend = Artist.create(name: "Vampire Weekend", genre: "alternative", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501212190/vampire_weekend_album_riyuog.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501212190/vampire_weekend_banner_pbiwg6.jpg")
vampire_weekend_album = Album.create(name: "Vampire Weekend", artist_id: vampire_weekend.id, genre: vampire_weekend.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501212190/vampire_weekend_album_riyuog.jpg")
Song.create(title: "Mansard Roof", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211644/01_Mansard_Roof_crshgv.mp3")
Song.create(title: "Oxford Comma", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211649/02_Oxford_Comma_kuj8zd.mp3")
a_punk =Song.create(title: "A Punk", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211647/03_A-Punk_xe6ibf.mp3")
Song.create(title: "Cape Cod", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211650/04_Cape_Cod_Kwassa_Kwassa_muke3z.mp3")
Song.create(title: "M79", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211654/05_M79_ll3grb.mp3")
Song.create(title: "Campus", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211647/06_Campus_uh2l13.mp3")
Song.create(title: "Bryn", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211650/07_Bryn_klml9w.mp3")
Song.create(title: "Blakes got a new face", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211651/08_One_Blake_s_Got_A_New_Face_lc9pm2.mp3")
Song.create(title: "I Stand Corrected", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211653/09_I_Stand_Corrected_udni60.mp3")
Song.create(title: "Walcott", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501211655/10_Walcott_qfguse.mp3")

mac_demarco = Artist.create(name: "Mac Demarco", genre: "Indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702509/mac_demarco_show_page_mk9jgh.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500871852/maxresdefaultshowpage_rvfukn.jpg")
salad_days = Album.create(name: "Salad Days", artist_id: mac_demarco.id, genre: mac_demarco.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608955/mac_demarco_salad_days_r23ahk.jpg")
blue_boy = Song.create(title: "Blue Boy", album_id: salad_days.id , artist_id: mac_demarco.id, genre: mac_demarco.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607523/Mac_DeMarco_-_Blue_Boy_x4aori.mp3")






frank_ocean = Artist.create(name: "Frank Ocean", genre: "R & B", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702509/frank-ocean-icon_gkmlsr.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500765510/Frank-Ocean-showpage_ajguje.jpg")
nostalgia = Album.create(name:"Nostalgia Ultra", artist_id: frank_ocean.id, genre: frank_ocean.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608955/frank_ocean_album_wsmy93.jpg")
Song.create(title: "American Wedding", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607627/12_american_wedding_bxmqf6.mp3")
novacane = Song.create(title: "Novacane", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607626/03_novacane_a5x3ue.mp3")
Song.create(title: "Swim Good", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607625/10_swim_good_atxtsi.mp3")
Song.create(title: "We all try", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607625/04_we_all_try_yfmrz8.mp3")
Song.create(title: "Nature feels", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1500607620/14_nature_feels_rkay3c.mp3")
Song.create(title: "Soul Calibur", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205879/13_soul_calibur_lqiqpq.mp3")
Song.create(title: "Dust", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205877/11_dust_yoibgc.mp3")
Song.create(title: "There will be tears", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205883/09_there_will_be_tears_revwny.mp3")
Song.create(title: "Goldeneye", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205877/08_goldeneye_rdjgd4.mp3")
Song.create(title: "Love crimes", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205885/07_lovecrimes_iebwfa.mp3")
Song.create(title: "Songs for women", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205885/06_songs_for_women_ztd3vv.mp3")
Song.create(title: "Strawberry swing", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205880/02_strawberry_swing_e4kcqg.mp3")
Song.create(title: "Street Fighter", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"http://res.cloudinary.com/jlofton/video/upload/v1501205876/01_street_fighter_bmrosc.mp3")





travis_scott = Artist.create(name: "Travis Scott", genre: "Hip-Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702509/naturel-travis-scott-rodeo-artwork_sva9x0.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500870997/Travis-Scott-show_snrryk.jpg")
rodeo = Album.create(name: "Rodeo", artist_id: travis_scott.id, genre: travis_scott.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608956/travis_scott_album_svjcg0.jpg")
Song.create(title: "RaRa" , album_id: rodeo.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607528/Travis_Scott_-_RaRa_ft._Lil_Uzi_Vert_w1a7sw.mp3")

birds_in_the_trap = Album.create(name: "Birds in the Trap", artist_id: travis_scott.id, genre: travis_scott.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501209079/travisbeibsinthetrap_zkfcd3.jpg")
Song.create(title: "Lose" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208982/12._Lose_hdtp9o.mp3")
Song.create(title: "Pick up the phone" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208982/11._Pick_Up_The_Phone_Ft._Young_Thug_Quavo_ivj92i.mp3")
Song.create(title: "Wonderful" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208982/14._Wonderful_Ft._The_Weeknd_btptqf.mp3")
goosebumps = Song.create(title: "Goosebumps" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208981/09._Goosebumps_Ft._Kendrick_Lamar_cbof6a.mp3")
Song.create(title: "Guidance" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208978/13._Guidance_jdpwik.mp3")
Song.create(title: "Sweet Sweet" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208975/07._Sweet_Sweet_spje81.mp3")
Song.create(title: "Through the Late Night" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208974/04._Through_The_Late_Night_Ft._Kid_Cudi_dangrp.mp3")
Song.create(title: "Coordinate" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208970/03._Coordinate_Ft._Blac_Youngsta_kzwsgr.mp3")
Song.create(title: "Way Back" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208964/02._Way_Back_Ft._Kid_Cudi_detnm8.mp3")








whitest_boy_alive = Artist.create(name: "whitest Boy Alive", genre: "indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500767490/whitest_boy_photo_mer48c.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500764175/whitestboy_ojeuta.jpg")

burning = Album.create(name: "Burning", artist_id: whitest_boy_alive.id, genre: whitest_boy_alive.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608956/whitest_boy_album_qfzmjn.jpg")

burning_song = Song.create(title: "Burning", album_id: burning.id, artist_id: whitest_boy_alive.id, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607522/The_whitest_Boy_Alive_-_Burning_eucjy4.mp3", genre: burning.genre )

the_dodos = Artist.create(name: "The DoDos", genre: "indie", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500702511/the_dodos_photo_gwzwzo.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500872153/Dodos-showpage_yibdjw.jpg")

visitor = Album.create(name: "Visitor", artist_id: the_dodos.id, genre: the_dodos.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1500608954/dodos_album_s8bbef.jpg")

walking = Song.create(title: "Walking", album_id: visitor.id, artist_id: the_dodos.id, genre: the_dodos.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1500607526/The_Dodos_-_Walking_tvptwk.mp3")


lacroix_artist = Artist.create(name: "La Croix", genre: "R & B", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501100819/lacroixlime_kk39hy.png", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501101079/lacroixshow_u2wasb.png")

lacroix_album = Album.create(name: "La Croix", artist_id: lacroix_artist.id, genre: lacroix_artist.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501100819/lacroixlime_kk39hy.png")

lacroix_song = Song.create(title: "La Croix Lover", album_id: lacroix_album.id, artist_id: lacroix_artist.id, genre: lacroix_artist.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501100821/la_chwah_qnd6xa.mp3")


nujabes = Artist.create(name: "Nujabes", genre: "Hip-Hop", image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501208432/nujabes-small-photo_jbqgl5.jpg", show_image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501208434/nujabes-banner_hhnozi.jpg")
nujabes_album = Album.create(name: "Various Tracks", artist_id: nujabes.id, genre: nujabes.genre, image_url: "http://res.cloudinary.com/jlofton/image/upload/v1501208432/nujabes-small-photo_jbqgl5.jpg")
Song.create(title: "FILO", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208198/43_-_FILO_ft_Shing02_kt4zai.mp3")
Song.create(title: "Voice of Autumn", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208198/41_-_Voice_of_Autumn_oxkhl2.mp3")
Song.create(title: "Shades of Nostalgia", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208199/42_-_Shades_of_Nostalgia_ft_Cise_Star_from_Cyne_x8b05s.mp3")
Song.create(title: "Alleged Last" , album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208199/44_-_Nujabes_Alleged_Last_Unfinished_Track_hk5dq0.mp3")
Song.create(title: "Luvsic", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208199/46_-_Luvsic_Part_3_ft_Shing02_qnwqa0.mp3")
Song.create(title: "Aruarian Dance", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208201/51_-_Aruarian_Dance_ziupuu.mp3")
battlecry = Song.create(title: "Battlecry", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208200/48_-_Battlecry_ft_Shing02_c6lsdc.mp3")
Song.create(title: "The Final View", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208203/45_-_The_Final_View_pq3cmd.mp3")
Song.create(title: "Don't Even Try It", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208204/49_-_Dont_Even_Try_it_ft_Funky_DL_l63d4b.mp3")
Song.create(title: "Atoll Moao", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "http://res.cloudinary.com/jlofton/video/upload/v1501208205/50_-_Atoll_Moao_by_Goldlix_hppypi.mp3")





phil = User.create(username: "Phil Collins", password: "hotdogs")
sebastian = User.create(username: "Sebastian Butcher", password: "hotdogs")
victoria = User.create(username: "Victoria Vermuth", password: "hotdogs")
christina = User.create(username: "christina bellagini", password: "hotdogs")





phils_playlist = Playlist.create(name: "Phils Favorites", creator_id: phil.id, image_url: "https://res.cloudinary.com/jlofton/image/upload/v1501094244/water2_gwbgjc.jpg")

PlaylistSong.create(playlist_id: phils_playlist.id, song_id: lacroix_song.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: walking.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: burning_song.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: novacane.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: blue_boy.id)

Following.create(playlist_id: phils_playlist.id, user_id: sebastian.id)
Following.create(playlist_id: phils_playlist.id, user_id: victoria.id)
Following.create(playlist_id: phils_playlist.id, user_id: christina.id)


phils_summer_playlist = Playlist.create(name: "Summer In San Fran", creator_id: phil.id, image_url: "https://res.cloudinary.com/jlofton/image/upload/v1501205736/fern_xjanxg.jpg")

PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: battlecry.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: lacroix_song.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: homesick.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: novacane.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: goosebumps.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: a_punk.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: float_on.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: hey_ya.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: hey_ya.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: imprint.id)
PlaylistSong.create(playlist_id: phils_summer_playlist.id, song_id: talamak.id)
