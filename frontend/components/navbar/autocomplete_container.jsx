import React from 'react';
import { connect } from 'react-redux';
import autocomplete from './autocomplete';

const mapStateToProps = state => ({
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(autocomplete);
