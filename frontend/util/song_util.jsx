export const receiveSong = song => (
  $.ajax({
    url: '/api/songs',
    method: 'POST',
    data: song,
    contentType: false,
    processData: false
  })
);

export const fetchAllSongs = () => (
  $.ajax({
    url: '/api/songs',
    method: 'GET'
  })
);

export const fetchSong = id => (
  $.ajax({
    url: `/api/songs/${id}`,
    method: 'GET'
  })
);

export const deleteSong = song => (
  $.ajax({
    url: `/api/songs/${song.id}`,
    method: 'DELETE'
  })
);
