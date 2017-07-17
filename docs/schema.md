# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null
email           | string    | not null
password_digest | string    | not null
session_token   | string    | not null
image_url       | string    |

has_many :playlists


## artists
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
description   | string    |
genre         | string    | not null
image_url     | string    | not null

has_many :albums
has_many :songs,
  through: :albums

## albums
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
artist_id     | integer   | not null
genre         | string    | not null
image_url     | string    | not null

has_many :songs
belongs_to :artist

## songs
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
description   | string    |
album_id      | integer   | not null
song_url      | string    | not null
genre         | string    | not null

belongs_to :album
belongs_to :artist, :through => :album


**BONUS**

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null
liker_id    | integer   | not null

belongs_to :user

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
creator_id  | integer   | not null
follower_id | integer   |
img_name    | string    |

belongs_to :user
has_many :followers

## playlists songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null
song_id     | integer   |
