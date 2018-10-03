// nothing comment
class App extends React.Component {
  // console.log(window.searchYouTube);
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currVideo: {},
      loaded: false
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
  }

  componentDidMount () {
    this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 }, this.updateVideos);
  }

  updateVideos (data) {
    console.log('our data in app = ', data);
    this.setState({
      videos: data,
      currVideo: data[0],
      loaded: true
    });
  }

  onItemClick(i) {
    this.setState({
      thisClick: !this.state.thisClick,
      currVideo: i
    });
  }

  render() {
    //if (this.loaded) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.onItemClick}/>
          </div>
        </div>
      </div>
    );
    // console.log('new this = ', this);
    // console.log('our data in App = ', data);
  }

  //}
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
