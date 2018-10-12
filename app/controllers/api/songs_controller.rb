class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:song_name, :album_id, :audio)
  end


end
