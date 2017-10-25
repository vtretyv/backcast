var VideoListEntryView = Backbone.View.extend({
  // el: '.video-list div',
  events: {
    'click': 'clickHandle'
  },
  
  initialize: function () {
    this.render();
    //this.on('click');
  },
  
  clickHandle: function(e) {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
//Access model, access methods of model, acess events of model
