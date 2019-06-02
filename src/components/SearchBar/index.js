import React from 'react';

class SearchBar extends React.Component {
  
  state = {term:''};

  onInputChange = (event) => {
    this.setState({term: event.target.value});

    this.props.onTermChange(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>The Guardian Search App</h1>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
};

export default SearchBar;