## CloudSounds

 Welcome to [CloudSounds](https://cloudsounds.herokuapp.com/#/), a functional clone of the popular music sharing site - SoundCloud


### Overview

 * Music files and album artwork can be uploaded, edited, and even deleted from the stream

 * The ability to listen to music, with all of your favorite songs hosted on the cloud with help from [AWS](https://aws.amazon.com/)


 * Users can create accounts knowing their credentials are stored safely, encrypted using bcrypt


### The Stack
CloudSounds was built using Ruby on Rails for the backend, using Postgres as a database management system. Rails was helpful in getting a working product relatively quickly, due to its convention over configuration ideology.

The front-end was built on Javascript, utilizing React and Redux libraries. These libraries helped create a responsive user experience that keeps track of the application state in an organized manner.

### Key Features

One neat feature to implement was a continuous play bar that persisted even when pages changed. This was done by wrapping the music player react component in a route that checks if there is a song in the slice of state for playing, and rendering the component if so.


```javascript
// Creates play route to wrap player component in
const Play = ({ component: Component, path, songPlaying, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
      !songPlaying ? (<Component {...props} />) : (null)
    )} />
);

// Checks slice of state responsible for current song
// songPlaying returns true if it is an empty object
const mapStateToProps = state => {
  let currentSong = state.entities.currentSong
  return {
    songPlaying: Object.keys(currentSong).length === 0 && currentSong.constructor === Object
  }
};
```


### For Development

Before working on the project, the following commands should be run

`bundle install`
`npm install`

`rails db:create`
`rails db:migrate`

### Whats next?
 This project was developed initially in only 2 weeks, so there are definitely a few features I would like to add:
 * Individual waveforms for songs based on frequency peaks
 * Ability to create and add songs to playlists
 * Description and genre interests for users
