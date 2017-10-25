var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) {
    Backbone.ajax({
      url:'https://www.googleapis.com/youtube/v3/search',
      type:"GET",
      data: 'json',
      data: {
        maxResults: 5,
        q: query,
        part: 'snippet',
        key: 'AIzaSyDvESigdn0uRdk6ZAh37bTRXAN63szT4Yo',
        chart: 'mostPopular'
      },
      success: function(data) {
        data = data.items;
        var movies = new Videos(data);
        new AppView({collection: movies}).render();
      },
      error: function(data) {
        console.log('failed');
      }
    });
  },
  parse: function(data) {
    return data.items;
  }
});



// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});