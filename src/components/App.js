import React from 'react';
import SearchBar from './SearchBar';
import theGuardian from '../apis/theGuardian';
import { API_KEY } from '../config';
import ArticleList from './ArticleList';

class App extends React.Component {

  state = {articles: []}

  onTermChange = async (term) => {

    let response = await theGuardian.get('/search', {
      params: {
        q : term,
        'api-key': API_KEY
      }
    });

    this.setState({articles: response.data.response.results})
  }

  render(){
    return(
      <div className="ui container">
        <SearchBar onTermChange={this.onTermChange}/>
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
};

export default App;