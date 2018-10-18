import React from 'react';
import Autosuggest from 'react-autosuggest';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.songs = this.props.songs;

    this.state = {
      value: '',
      suggestions: []
    };
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.songs.filter(song =>
    song.song_name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue (suggestion) {
    return suggestion.song_name;
  }

  renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion.song_name}
      </div>
    );
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  handleSearch(e) {
    e.preventDefault();

    const resultSong = this.songs.filter(song => song.song_name === this.state.value);
    this.props.history.push(`/songs/${resultSong[0].id}`);
  }


  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange.bind(this)
    };

    return (
      <div className="auto-complete-div">
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
            getSuggestionValue={this.getSuggestionValue.bind(this)}
            renderSuggestion={this.renderSuggestion.bind(this)}
            inputProps={inputProps}
          />
        <img className="search-icon"
          onClick={this.handleSearch.bind(this)}
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"
          />
      </div>
    );
  }
}

export default Autocomplete;
