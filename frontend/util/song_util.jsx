export const receivePic = user => {
  let coolId = user.get('user[user_id]');
  return (
  $.ajax({
    url: `/api/users/${coolId}`,
    method: 'PATCH',
    data: user,
    contentType: false,
    processData: false
  })
);
};

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

export const editSong = song => {
  return (
  $.ajax({
    url: `/api/songs/${song.get('song[id]')}`,
    method: 'PATCH',
    data: song,
    contentType: false,
    processData: false
  })
);
};
