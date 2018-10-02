var searchYouTube = (options, callback) => {
  console.log('options = ', options.max);
  console.log('callback = ', callback);

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    }
  })
    .done(function(data) {
      callback(data.items);
      console.log('our data', data.items);
      console.log('yay we have tubes!');
      // new VideoListView(data);
    })
    .fail(function(data) {
      console.log('boo, no tubes', data);
    });
};

window.searchYouTube = searchYouTube;
//{ key: 'API_KEY', query: 'cats', max: 10 }