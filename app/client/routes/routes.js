// ******************* GLOBAL SETTINGS *****************************

// SUBSCRIPTIONS

FlowRouter.subscriptions = function() {
  // this.register('mySub', Meteor.subscribe('mySubName'));
};
// ************************* ROUTES ********************************
FlowRouter.route('/', {
  name: 'home',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  },
  triggersExit: []
});

