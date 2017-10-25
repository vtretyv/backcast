var SearchView = Backbone.View.extend({
  el: '.search',
  events: {
    'keyup ': 'inputHandle1' //not done
  },
  initialize: function() {
    this.render();
    
    $('.search .btn').on('click', this.inputHandle.bind(this));
  },
  
  inputHandle: function() {
    this.collection.search($('.form-control').val()); 
  },
    
  inputHandle1: function(e) {
    if (e.keyCode === 13) {
      this.collection.search($('.form-control').val());
    }
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')
  
});
