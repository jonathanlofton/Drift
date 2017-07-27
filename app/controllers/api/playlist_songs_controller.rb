class Api::PlaylistSongsController < ApplicationController
  def index
    @playlist_songs = PlaylistSong.all
  end

  def show
    @playlist_song = PlaylistSong.find(params[:id])
  end

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)

    if @playlist_song.save
      render '/api/playlist_songs/show'
    else
      render(
        json: ["Playlist song not saved"],
        status: 500
      )
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    if @playlist_song
      @playlist_song.destroy
      render '/api/playlists/show'
    else
      render(
        json: ["Playlist song not deleted"],
        status: 500
      )
    end
  end

  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end

end
