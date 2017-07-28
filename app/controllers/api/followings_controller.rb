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
        json: ["Playlist not followed"],
        status: 500
      )
    end
  end

  def destroy
    @following = Following.find_by(id: params[:id])
    if @following
      @following.delete
      render '/api/followings/show'
    else
      render(
        json: ["Playlist was not unfollowed"],
        status: 500
      )
    end
  end

  def following_params
    params.require(:following).permit(:playlist_id, :user_id)
  end
end
