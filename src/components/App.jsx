class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currVideo: null,
      loaded: false
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
  }

  componentDidMount () {
    this.props.searchYouTube({ key: this.props.API_KEY, query: 'zebra', max: 10 }, this.updateVideos);
  }

  updateVideos (data) {
    console.log('our data in app = ', data);
    this.setState({
      loaded: true,
      videos: data,
      currVideo: data[0]
    }, function() {
      console.log('data in update videos = ', this.state);
    });
  }

  onItemClick(i) {
    this.setState({
      thisClick: !this.state.thisClick,
      currVideo: i
    });
  }

  render() {
    if (this.state.loaded) {
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
    } else {
      return (
        <div> Loading...</div>
      );
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
