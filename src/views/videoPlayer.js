var VideoPlayerView = Backbone.View.extend({
  initialize: function () {
    this.render();
    // this.model.on('select', (function() {this.render;}).bind(this));
    this.listenTo(this.collection, 'select', this.myClick);
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  myClick: function(video) {
    var newView = new VideoPlayerView({el:'.player', model:video});
  },
  
  template: templateURL('src/templates/videoPlayer.html')
});
