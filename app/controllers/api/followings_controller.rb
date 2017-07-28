class Api::FollowingsController < ApplicationController
  def index
    @followings = Following.all
  end

  def show
    @following = Following.find(params[:id])
  end

  def create
    @following = Following.new(following_params)

    if @following.save
      render '/api/followings/show'
    else
      render(
        json: ["Following song not saved"],
        status: 500
      )
    end
  end

  def destroy
    @following = Following.find(params[:id])
    if @following
      @following.destroy
      render '/api/playlists/show'
    else
      render(
        json: ["Following song not deleted"],
        status: 500
      )
    end
  end

  def following_params
    params.require(:following).permit(:playlist_id, :user_id)
  end
end
