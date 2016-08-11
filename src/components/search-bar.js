import React, { Component } from 'react'; // React.createElement()
// we need this because when the jsx renders to js, it needs a reference to react.


// functional component vs a functionalbased component. : to read.
// when to use one?
// added functionality will require a class.
// classes only have state.

// everyone react component must have a render method.

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // whenever the user updates the search input, ths is the property they want to record the change on.
    this.state = { term: '' };
  }

  render() { // this is still a function.
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={ event => this.onInputChange(event.target.value) }/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
