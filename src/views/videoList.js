var VideoListView = Backbone.View.extend({
  el: '.list',
  initialize: function () {
    // console.log(this, "video list view");
    //this.render();
    // this.videoListEntry1 = new VideoListEntryView();  
    // this.videoListEntry2 = new VideoListEntryView();
    // this.videoListEntry3 = new VideoListEntryView();
    // this.videoListEntry4 = new VideoListEntryView();
    // this.videoListEntry5 = new VideoListEntryView();
    this.collection.on('sync', this.render, this); //This line works but breaks app.js, should invoke render
    //this.render();//This passed 2nd VLV test but reasoning is not sound
  },
  render: function() {
    this.$el.children().detach();
    this.collection.models.forEach(this.renderVideo, this);
    this.$el.html(this.template());
    return this;
  },
  
  renderVideo: function (video) {
    var vidWindow = new VideoListEntryView({model: video});
    this.$el.append(vidWindow.render());

  },
  template: templateURL('src/templates/videoList.html')

});
