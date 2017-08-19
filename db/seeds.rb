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


real_estate = Artist.create(name: "Real Estate", genre: "alternative", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/photos/realestate+album.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/photos/realestatebanner.jpg")
days = Album.create(name: "Days", artist_id: real_estate.id, genre: real_estate.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/photos/realestate+album.jpg")
Song.create(title: "Beach Comber", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/01+Beach+Comber.mp3")
Song.create(title: "Pool swimmers", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/02+Pool+Swimmers.mp3")
Song.create(title: "Suburban dogs", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/03+Suburban+Dogs.mp3")
Song.create(title: "Black Lake", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/04+Black+Lake.mp3")
Song.create(title: "Atlantic city", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/05+Atlantic+City.mp3")
Song.create(title: "Fake blues", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/06+Fake+Blues.mp3")
Song.create(title: "Green river", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/07+Green+River.mp3")
Song.create(title: "Suburban beverage", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/08+Suburban+Beverage.mp3")
Song.create(title: "Lets rock the beach", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/09+Let's+Rock+The+Beach.mp3")
Song.create(title: "Snow days", album_id: days.id, artist_id: real_estate.id, genre: real_estate.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Real+Estate/album+1/10+Snow+Days.mp3")





modest_mouse = Artist.create(name: "Modest Mouse", genre: "alternative", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/photos/modestmousealbum.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/photos/modestmousebanner.jpg")
good_news = Album.create(name: "Good news for people who love bad news", artist_id: modest_mouse.id, genre: modest_mouse.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/photos/modestmousealbum.jpg")
Song.create(title: "The world at large", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/02+The+World+At+Large.mp3")
float_on = Song.create(title: "Float On", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/03+Float+On.mp3")
Song.create(title: "Ocean breathes salty", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/04+Ocean+Breathes+Salty.mp3")
Song.create(title: "Dig your grave", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/05+Dig+Your+Grave.mp3")
Song.create(title: "Bury me with it", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/06+Bury+Me+With+It.mp3")
Song.create(title: "Dance Hall", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/07+Dance+Hall.mp3")
Song.create(title: "Bukowski", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/08+Bukowski.mp3")
Song.create(title: "This devils workday", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/09+This+Devil's+Workday.mp3")
Song.create(title: "The View", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/10+The+View.mp3")
Song.create(title: "Black Cadillac", album_id: good_news.id, artist_id: modest_mouse.id, genre: modest_mouse.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Modest+Mouse/14+Black+Cadillacs.mp3")






outkast = Artist.create(name: "Outkast", genre: "Hip Hop", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/photos/outkastpic.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/photos/outkast+banner.jpg")
speakerboxxx = Album.create(name: "Speakerboxxx", artist_id: outkast.id, genre: outkast.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/photos/outkast+album.jpg")
hey_ya = Song.create(title: "Hey Ya", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-09+Hey+Ya!.mp3")
Song.create(title: "Roses", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-10+Roses.mp3")
Song.create(title: "Good day good sir", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-11+Good+Day%2C+Good+Sir.mp3")
Song.create(title: "Behold a lady", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-12+Behold+A+Lady.mp3")
Song.create(title: "Pink blue", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-13+Pink+%26+Blue.mp3")
Song.create(title: "Love in war", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-14+Love+In+War.mp3")
Song.create(title: "Shes alive", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-15+She_s+Alive.mp3")
Song.create(title: "Dracula", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-16+Dracula_s+Wedding+(Feat.+Kelis).mp3")
Song.create(title: "My favorite things", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-17+My+Favorite+Things.mp3")
Song.create(title: "Take off your cool", album_id: speakerboxxx.id, artist_id: outkast.id, genre: outkast.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Outkast/2-18+Take+Off+Your+Cool+(Feat.+Norah+Jones).mp3")







kings = Artist.create(name: "Kings of Convenience", genre: "Acoustic", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/photos/kingsphoto+(1).jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/photos/kings+banner.jpg")
riot = Album.create(name: "Riot On An Empty Street", artist_id: kings.id, genre: kings.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/photos/kings+album.jpeg")
homesick = Song.create(title: "Homesick", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/01+Homesick.mp3")
Song.create(title: "Misread", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/02+Misread.mp3")
Song.create(title: "Cayman Islands", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/03+Cayman+Islands.mp3")
Song.create(title: "Stay Out of Trouble", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/04+Stay+Out+Of+Trouble.mp3")
Song.create(title: "Know How", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/05+Know-How.mp3")
Song.create(title: "Sorry or please", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/06+Sorry+Or+Please.mp3")
Song.create(title: "Love is no big truth", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/07+Love+Is+No+Big+Truth.mp3")
Song.create(title: "Id rather dance with you", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/08+I'd+Rather+Dance+With+You.mp3")
Song.create(title: "Live long", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/09+Live+Long.mp3")
Song.create(title: "Suprise Ice", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/10+Suprise+Ice.mp3")
Song.create(title: "Gold in the air", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/11+Gold+In+The+Air+Of+Summer.mp3")
Song.create(title: "The Build Up", album_id: riot.id, artist_id: kings.id , genre: kings.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Kings+of+Convenience/Riot+On+An+Empty+Street/12+The+Build-Up.mp3")



toro_y_moi = Artist.create(name: "Toro Y Moi", genre: "Indie", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/photos/toro+y+moi+(1).jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/photos/toro+y+moi.jpg")
causers_of_this = Album.create(name:"Causers of this", artist_id: toro_y_moi.id, genre: toro_y_moi.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/photos/toroymoi+album.jpg")
Song.create(title: "Blessa", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/01+Blessa.mp3")
Song.create(title: "Minors" , album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/02+Minors.mp3")
imprint = Song.create(title: "Imprint After", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/03+Imprint+After.mp3")
Song.create(title: "Lissoms", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/04+Lissoms.mp3")
Song.create(title: "Fax Shadow", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/05+Fax+Shadow.mp3")
Song.create(title: "Thanks Vision", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/06+Thanks+Vision.mp3")
Song.create(title: "Freak Love", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/07+Freak+Love.mp3")
talamak = Song.create(title: "Talamak", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/08+Talamak.mp3")
Song.create(title: "You Hid What?", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/09+You+Hid.mp3")
Song.create(title: "Low Shoulder", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/10+Low+Shoulder.mp3")
Song.create(title: "Causers of this", album_id: causers_of_this.id, artist_id: toro_y_moi.id, genre: toro_y_moi.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Toro+y+Moi/11+Causers+Of+This.mp3")


vampire_weekend = Artist.create(name: "Vampire Weekend", genre: "alternative", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/photos/vampire+weekend+album.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/photos/vampire+weekend+banner.jpg")
vampire_weekend_album = Album.create(name: "Vampire Weekend", artist_id: vampire_weekend.id, genre: vampire_weekend.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/photos/vampire+weekend+album.jpg")
Song.create(title: "Mansard Roof", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/01+Mansard+Roof.mp3")
Song.create(title: "Oxford Comma", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/02+Oxford+Comma.mp3")
a_punk =Song.create(title: "A Punk", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/03+A-Punk.mp3")
Song.create(title: "Cape Cod", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/04+Cape+Cod+Kwassa+Kwassa.mp3")
Song.create(title: "M79", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/05+M79.mp3")
Song.create(title: "Campus", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/06+Campus.mp3")
Song.create(title: "Bryn", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/07+Bryn.mp3")
Song.create(title: "Blakes got a new face", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/08+One+(Blake's+Got+A+New+Face).mp3")
Song.create(title: "I Stand Corrected", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/09+I+Stand+Corrected.mp3")
Song.create(title: "Walcott", album_id: vampire_weekend_album.id , artist_id: vampire_weekend.id, genre: vampire_weekend.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Vampire+Weekend/10+Walcott.mp3")

mac_demarco = Artist.create(name: "Mac Demarco", genre: "Indie", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Mac+Demarco/photos/mac+demarco+show+page.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Mac+Demarco/photos/maxresdefaultshowpage.jpg")
salad_days = Album.create(name: "Salad Days", artist_id: mac_demarco.id, genre: mac_demarco.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Mac+Demarco/photos/mac+demarco+salad+days.jpg")
blue_boy = Song.create(title: "Blue Boy", album_id: salad_days.id , artist_id: mac_demarco.id, genre: mac_demarco.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Mac+Demarco/Mac+DeMarco+-+Blue+Boy.mp3")






frank_ocean = Artist.create(name: "Frank Ocean", genre: "R & B", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/photos/frank-ocean-icon.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/photos/Frank-Ocean-showpage.jpg")
nostalgia = Album.create(name:"Nostalgia Ultra", artist_id: frank_ocean.id, genre: frank_ocean.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/photos/frank+ocean+album.jpg")
Song.create(title: "American Wedding", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/12+american+wedding.mp3")
novacane = Song.create(title: "Novacane", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/03+novacane.mp3")
Song.create(title: "Swim Good", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/10+swim+good.mp3")
Song.create(title: "We all try", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/04+we+all+try.mp3")
Song.create(title: "Nature feels", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/14+nature+feels.mp3")
Song.create(title: "Soul Calibur", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/13+soul+calibur.mp3")
Song.create(title: "Dust", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/11+dust.mp3")
Song.create(title: "There will be tears", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/09+there+will+be+tears.mp3")
Song.create(title: "Goldeneye", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/08+goldeneye.mp3")
Song.create(title: "Love crimes", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/07+lovecrimes.mp3")
Song.create(title: "Songs for women", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/06+songs+for+women.mp3")
Song.create(title: "Strawberry swing", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/02+strawberry+swing.mp3")
Song.create(title: "Street Fighter", album_id: nostalgia.id, artist_id: frank_ocean.id, genre: frank_ocean.genre, song_url:"https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Frank+Ocean/Nostalgia+Ultra/01+street+fighter.mp3")





travis_scott = Artist.create(name: "Travis Scott", genre: "Hip-Hop", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/photos/naturel-travis-scott-rodeo-artwork.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/photos/Travis-Scott-show.jpg")
rodeo = Album.create(name: "Rodeo", artist_id: travis_scott.id, genre: travis_scott.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/photos/naturel-travis-scott-rodeo-artwork.jpg")
Song.create(title: "RaRa" , album_id: rodeo.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/Travis+Scott+-+RaRa+(ft.+Lil+Uzi+Vert).mp3")

birds_in_the_trap = Album.create(name: "Birds in the Trap", artist_id: travis_scott.id, genre: travis_scott.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/photos/travisbeibsinthetrap.jpg")
Song.create(title: "Lose" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/12.+Lose.mp3")
Song.create(title: "Pick up the phone" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/11.+Pick+Up+The+Phone+\(Ft.+Young+Thug+%26+Quavo).mp3")
Song.create(title: "Wonderful" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/14.+Wonderful+(Ft.+The+Weeknd).mp3")
goosebumps = Song.create(title: "Goosebumps" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/09.+Goosebumps+(Ft.+Kendrick+Lamar).mp3")
Song.create(title: "Guidance" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/13.+Guidance.mp3")
Song.create(title: "Sweet Sweet" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/07.+Sweet+Sweet.mp3")
Song.create(title: "Through the Late Night" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/04.+Through+The+Late+Night+(Ft.+Kid+Cudi).mp3")
Song.create(title: "Coordinate" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/03.+Coordinate+(Ft.+Blac+Youngsta).mp3")
Song.create(title: "Way Back" , album_id: birds_in_the_trap.id, artist_id: travis_scott.id, genre: travis_scott.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Travis+Scott/02.+Way+Back+(Ft.+Kid+Cudi).mp3d")








whitest_boy_alive = Artist.create(name: "whitest Boy Alive", genre: "indie", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Whitest+Boy+Alive/photos/whitest+boy+icon.jpeg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Whitest+Boy+Alive/photos/whitestboyshowpage.jpg")

burning = Album.create(name: "Burning", artist_id: whitest_boy_alive.id, genre: whitest_boy_alive.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Whitest+Boy+Alive/photos/whitest+boy+album.jpg")

burning_song = Song.create(title: "Burning", album_id: burning.id, artist_id: whitest_boy_alive.id, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Whitest+Boy+Alive/The+Whitest+Boy+Alive+-+Burning.mp3", genre: burning.genre )

the_dodos = Artist.create(name: "The DoDos", genre: "indie", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/The+dodos/photos/the+dodos+photo.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/The+dodos/photos/Dodos-showpage.jpg")

visitor = Album.create(name: "Visitor", artist_id: the_dodos.id, genre: the_dodos.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/The+dodos/photos/dodos+album.jpg")

walking = Song.create(title: "Walking", album_id: visitor.id, artist_id: the_dodos.id, genre: the_dodos.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/The+dodos/The+Dodos+-+Walking.mp3")


lacroix_artist = Artist.create(name: "La Croix", genre: "R & B", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/La+Croix/photos/lacroixlime.png", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/La+Croix/photos/lacroixshow.png")

lacroix_album = Album.create(name: "La Croix", artist_id: lacroix_artist.id, genre: lacroix_artist.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/La+Croix/photos/lacroixlime.png")

lacroix_song = Song.create(title: "La Croix Lover", album_id: lacroix_album.id, artist_id: lacroix_artist.id, genre: lacroix_artist.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/La+Croix/la+chwah.mp3")


nujabes = Artist.create(name: "Nujabes", genre: "Hip-Hop", image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/photos/nujabes-small-photo.jpg", show_image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/photos/nujabes-banner.jpg")
nujabes_album = Album.create(name: "Various Tracks", artist_id: nujabes.id, genre: nujabes.genre, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/photos/nujabes-small-photo.jpg")
Song.create(title: "FILO", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/43+-+FILO+ft+Shing02.mp3")
Song.create(title: "Voice of Autumn", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/41+-+Voice+of+Autumn.mp3")
Song.create(title: "Shades of Nostalgia", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/42+-+Shades+of+Nostalgia+ft+Cise+Star+from+Cyne.mp3")
Song.create(title: "Counting Stars" , album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/33+-+Counting+Stars.mp3")
Song.create(title: "Luvsic", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/47+-+Luvsic+LIVE+ft+Shing02.mp3")
Song.create(title: "Aruarian Dance", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/51+-+Aruarian+Dance.mp3")
battlecry = Song.create(title: "Battlecry", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/48+-+Battlecry+ft+Shing02.mp3")
Song.create(title: "The Final View", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/45+-+The+Final+View.mp3")
Song.create(title: "Don't Even Try It", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/49+-+Dont+Even+Try+it+ft+Funky+DL.mp3")
Song.create(title: "Atoll Moao", album_id: nujabes_album.id, artist_id: nujabes.id, genre: nujabes_album.genre, song_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/artists/Nujabes/album+1/50+-+Atoll+Moao+by+Goldlix.mp3")





guest = User.create(username: 'Guest', password: 'hotdogs')
phil = User.create(username: "Phil Collins", password: "hotdogs")
sebastian = User.create(username: "Sebastian Butcher", password: "hotdogs")
victoria = User.create(username: "Victoria Vermuth", password: "hotdogs")
christina = User.create(username: "christina bellagini", password: "hotdogs")





phils_playlist = Playlist.create(name: "Phils Favorites", creator_id: phil.id, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/playlist+photos/water2_gwbgjc.jpg")

PlaylistSong.create(playlist_id: phils_playlist.id, song_id: lacroix_song.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: walking.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: burning_song.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: novacane.id)
PlaylistSong.create(playlist_id: phils_playlist.id, song_id: blue_boy.id)

Following.create(playlist_id: phils_playlist.id, user_id: sebastian.id)
Following.create(playlist_id: phils_playlist.id, user_id: victoria.id)
Following.create(playlist_id: phils_playlist.id, user_id: christina.id)


phils_summer_playlist = Playlist.create(name: "Summer In San Fran", creator_id: phil.id, image_url: "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/playlist+photos/surfboardstock_ivpwqw.jpg")

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
