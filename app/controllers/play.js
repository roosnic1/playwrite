import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		addPlay: function() {
			this.transitionTo('play.new');
		},
		createPlay: function() {
			console.log('asdas');
		}
	}
});
