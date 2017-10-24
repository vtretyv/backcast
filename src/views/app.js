var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //this.render(); Create before rendering other views?

    //this.render();
  },

  
  render: function() {
    this.$el.html(this.template());
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
