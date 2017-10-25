var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos();
  },

  
  render: function() {
    this.$el.html(this.template()); 
    this.searchView = new SearchView({collection: this.collection});
    this.videoPlayerView = new VideoPlayerView({el:".player", model: this.collection.models[0], collection:this.collection});
    this.videoListView = new VideoListView({el: ".list", collection: this.collection});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
