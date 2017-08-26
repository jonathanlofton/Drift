import React from 'react';


class Search extends React.Component {
  constructor (props){
    super(props);
    this.state={
      searchQuery: "",
      artists: this.props.artists
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.fireSearch = this.fireSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ artists: nextProps.artists })
  }

  componentDidMount() {
    this.props.clearSearch();
  }

  handleSearch(e) {
    this.setState({
      searchQuery: e.currentTarget.value,
    });
    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(this.fireSearch, 500);
  }

  fireSearch() {
    const data = { search: { term: this.state.searchQuery } };
    if (this.state.searchQuery === '') {
      this.props.clearSearch();
    } else {
      this.props.requestSearchResults(data);
    }
  }

  artistview() {
    if (this.props.fetching === true) {
      return <p>Loading</p>;
    }
    return (
      <ul className="track-list">
        {this.state.artists.map(artist =>
          (<li key={artist.id}>{artist.name}</li>
          ))}
      </ul>
    );
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="search">
        <input
          ref={(input) => { this.searchInput = input; }}
          onChange={this.handleSearch}
          value={this.state.searchQuery}
          placeholder="Start typing..."
        />
        <div className="search-tracks">
          {this.artistview()}
        </div>
      </div>
    )
  }
}

export default Search;
