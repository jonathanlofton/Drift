import React from 'react';


class Search extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="search">
        <input
          placeholder='Start typing...'
        />
      </div>
    )
  }
}

export default Search;
