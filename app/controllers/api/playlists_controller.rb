class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id
    p @playlist

    if @playlist.save
      render '/api/playlists/show'
    else
      render(
        json: ["Must be logged in to create playlist"],
        status: 500
      )
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist
      @playlist.destroy
      render '/api/playlists/show'
    else
      render(
        json: ["No Playlist to delete"],
        status: 500
      )
    end

  end

  def playlist_params
    params.require(:playlist).permit(:name, :creator_id, :image_url)
  end

end
