import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberBeakerENV.locationType
});

Router.map(function() {
  this.route('about');
  this.route('faq');
});

export default Router;
