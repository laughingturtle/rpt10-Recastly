class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currVideo: null,
      loaded: false,
      //input: 'zebra',
      value: 'horse'
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.props.searchYouTube({ key: this.props.API_KEY, query: this.state.value, max: 10 }, this.updateVideos);
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

  handleChange(event) {
    this.setState({value: event.target.value});
    //this.search();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Button Pressed');
    console.log('e = ', + this.state.value);
    //alert('Our Search String: ', this.state.value);
    //this.setState({value: event.target.value});
    this.search();
  }

  search() {
    setTimeout(this.props.searchYouTube({ key: this.props.API_KEY, query: this.state.value, max: 10 }, this.updateVideos), 500);
  }


  render() {
    if (this.state.loaded) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search formHandler={this.handleSubmit} textFormState={this.state.formState} handleTextChange={this.handleChange}/>
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
