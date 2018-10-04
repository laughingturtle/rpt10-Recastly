var storage;
var searchYouTube = (options, callback) => {
  console.log('options = ', options.max);
  console.log('callback = ', callback);

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key || window.YOUTUBE_API_KEY,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    }
  })
    .done(function(data) {
      storage = data.items;
      callback(data.items);
      console.log('our data in SearchYouTube', data.items);
      console.log('yay we have tubes!');
    })
    .fail(function(data) {
      console.log('boo, no tubes', data);
    });
};

window.searchYouTube = searchYouTube;
window.storage = storage;
//{ key: 'API_KEY', query: 'cats', max: 10 }