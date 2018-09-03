// @flow
import React, {Component} from 'react';
import AlbumCard from './AlbumCard';
class Search extends Component {
  constructor () {
    super ();
    this.state = {
      searchTerm: 'lil wayne',
      albums: [],
    };
  }
  componentDidMount () {
    this.handleSearch ();
  }
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & {target: HTMLInputElement}
  ) => {
    this.setState ({searchTerm: event.target.value});
  };
  removeDuplicates = (originalArray, prop) => {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push (lookupObject[i]);
    }
    return newArray;
  };
  handleSearch = () => {
    const artist_name = this.state.searchTerm;
    fetch (`https://itunes.apple.com/search?term=${artist_name}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8081',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
        'Access-Control-Max-Age': 86400,
      },
    })
      .then (resp => resp.json ())
      .then (data => {
        console.log (data);
        if (data) {
          const albums = data.results;
          var filteredAlbums = this.removeDuplicates (albums, 'collectionName');
          this.setState ({
            albums: filteredAlbums,
          });
        }
      })
      .catch (err => {
        console.warn ('err here is: ' + err);
      });
  };

  render () {
    return (
      <div className="search">
        <header>
          <h1>Itunes Albums</h1>
          <div>
            <input
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search"
            />
            <button onClick={this.handleSearch}>Search</button>
          </div>
        </header>
        <div>
          {this.state.albums.map (data => (
            <AlbumCard key={data.trackId} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
