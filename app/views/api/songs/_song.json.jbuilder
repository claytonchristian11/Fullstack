json.extract! song, :id, :song_name, :album_id
json.audioUrl url_for(song.audio)
json.artworkUrl url_for(song.artwork)
