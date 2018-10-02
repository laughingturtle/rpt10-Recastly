class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currVideo: window.exampleVideoData[0]
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(i) {
    this.setState({
      thisClick: !this.state.thisClick,
      currVideo: i
    });
  }

  render() {
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
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
