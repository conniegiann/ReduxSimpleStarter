import _ from 'lodash';
import React, { Component } from 'react'; // go find the library called react, and asign it to the var react.
import ReactDOM from 'react-dom'; // Needs reactDOM to render to the DOM.
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import API_KEY from '../apikey';

// Create a new component.
// This component should produce some HTML
// this is the final value of the variable, it will never change. never reasign app to another var.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('lego');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and
// put on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // hello react, pls render the above in the browser.
// When you render app, then insert app into this element that exists in the html document.
// the container class lives within the index.html
