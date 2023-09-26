import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIS/youtube.js';
import VideoList from "./VidoeList.js";
import VideoDetails from './VideoDetails';
import './App.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.TermHand('ben ten');
  }

  TermHand = async term => {
    const result = await youtube.get('/search', {
      params: {
        q: term,
      }
    });

    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar FormSubmit={this.TermHand} />
        <div className="ui stackable grid">
          <div className="eleven wide column">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
