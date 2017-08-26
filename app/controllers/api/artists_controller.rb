class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def search
    @tracks = Artist.search(search_params[:term])
    render 'api/artists'
  end

  private

  def search_params
    params.require(:search).permit(:term)
  end

end
