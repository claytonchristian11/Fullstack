json.extract! song, :song_name, :album_id
json.audioUrl url_for(song.audio)
