import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  filteredList: null,
  actions: {
    autoComplete: function() {
      this.get('autoComplete')(this.get('filter'));
    },

    choose: function(city) {
      this.set('filter', city);
    },

    search: function() {
      this.get('search')(this.get('filter'));
    }
  }
});
