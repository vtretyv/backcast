var VideoListEntryView = Backbone.View.extend({

  initialize: function () {

    console.log(this.model, "VLEV.model");
    this.model.on('click', this.model.select(), this);  
    //this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
