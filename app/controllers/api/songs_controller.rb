class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    debugger;
    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    @songs = Song.all

  end

  def show
    @song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    if @song.destroy
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:song_name, :artist_name, :album_id, :audio, :artwork)
  end


end
