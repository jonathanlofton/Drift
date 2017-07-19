class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    # need to check if there is a user because if you
    # do user.save on a nil object it will just throw an
    # error and not return a falsy value.
    if @user && @user.save
      login(@user)
      render '/api/users/show'
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show'
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

end
