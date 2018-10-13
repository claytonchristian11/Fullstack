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
