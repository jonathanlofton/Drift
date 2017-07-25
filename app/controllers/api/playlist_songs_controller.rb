class Api::PlaylistSongsController < ApplicationController
  def index
    @playlist_songs = PlaylistSong.all
  end

  def show
    @playlist_song = PlaylistSong.find(params[:id])
  end

end
