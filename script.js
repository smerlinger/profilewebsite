// Replace YOUR_CLIENT_ID and YOUR_REDIRECT_URI with your own values
const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'YOUR_REDIRECT_URI';

// Set up the Spotify Web API wrapper
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  redirectUri: redirectUri,
});

// Get the access token from the URL hash
const hash = window.location.hash.substr(1);
const params = new URLSearchParams(hash);
const accessToken = params.get('access_token');

// Set the access token for the Spotify Web API wrapper
spotifyApi.setAccessToken(accessToken);

// Replace PLAYLIST_ID with the ID of the playlist you want to display
const playlistId = 'PLAYLIST_ID';

// Get the playlist data from the Spotify Web API
spotifyApi.getPlaylist(playlistId).then((data) => {
  // Display the playlist name
  const playlistName = document.createElement('h1');
  playlistName.textContent = data.name;
  document.body.appendChild(playlistName);

  // Display the playlist cover art
  const playlistCoverArt = document.createElement('img');
  playlistCoverArt.src = data.images[0].url;
  document.body.appendChild(playlistCoverArt);

  // Display the playlist tracks
  const playlistTracks = document.createElement('ol');
  data.tracks.items.forEach((item) => {
    const trackName = document.createElement('li');
    trackName.textContent = item.track.name;
    playlistTracks.appendChild(trackName);
  });
  document.body.appendChild(playlistTracks);
});
