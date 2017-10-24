var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  initialize: function () {
    // console.log(this, "VideoPlayerView this");
    // console.log(this.collection.models, "VideoPlayerView.collecion.models this");
    // console.log(this.model, "this.model");
    this.on('select', this.render());
    
    //this.collection.on('select', this.render(), this);
  },
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    //this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
