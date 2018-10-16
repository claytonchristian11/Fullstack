import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import Splash from './splash';
import { fetchAllSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
  fetchAllSongs: () => dispatch(fetchAllSongs()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
