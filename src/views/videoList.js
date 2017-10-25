var VideoListView = Backbone.View.extend({
  el: '.list',
  initialize: function () {
    this.render();
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.models.forEach(this.renderVideo, this);
  },

  renderVideo: function (video, i) {
    var nodes = this.$el.children().children();
    var vidWindow = new VideoListEntryView({el:nodes[i], model: video});
    this.$el.children().append(vidWindow);
  },
  template: templateURL('src/templates/videoList.html')

});
