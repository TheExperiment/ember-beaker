import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
 this.store.push('faq',{id:1,question:'this is question one?',answer:'answer one'});
 this.store.push('faq',{id:2,question:'this is question two?',answer:'answer two'});
 return this.store.all('faq');
 } 

});
