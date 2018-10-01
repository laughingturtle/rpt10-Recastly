// class VideoPlayer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="video-player">
//         <div className="embed-responsive embed-responsive-16by9">
//           <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/{dQw4w9WgXcQ?autoplay=1}" allowFullScreen></iframe>
//         </div>
//         <div className="video-player-details">
//           <h3>{this.props.video.snippet.title}</h3>
//           <div>{this.props.video.snippet.description}</div>
//         </div>
//       </div>
//     );
//   }
// }


// var VideoPlayer = (props) => (
//   const link = "https://www.youtube.com/embed/" + props.video.id.videoId + "?autoplay=1"

//     <div className="video-player">
//       <div className="embed-responsive embed-responsive-16by9">
//       {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/{props.video.id.videoId}?autoplay=1" allowFullScreen></iframe> */}
//         <iframe className="embed-responsive-item" src={link.toString()} allowFullScreen></iframe>
//       </div>
//       <div className="video-player-details">
//         <h3>{props.video.snippet.title}</h3>
//         <div>{props.video.snippet.description}</div>
//       </div>
//     </div>
// );

var VideoPlayer = (props) => {
  const link = "https://www.youtube.com/embed/" + props.video.id.videoId;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/{props.video.id.videoId}?autoplay=1" allowFullScreen></iframe> */}
        <iframe className="embed-responsive-item" src={link} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
