let state = new ReactiveDict('');

Template.home.helpers({
  message: function () {
    return state.get('message');
  }
});

Template.home.events({});

Template.home.onCreated(function () {

});
Template.home.created = function () {

};

Template.home.onRendered(function () {
  if (Meteor.isCordova) {
    Meteor.startup(function () {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          console.log(result.text);
          if(result.text.includes('actiontag.io')){
            state.set('message', 'Succss');
          }
        },
        function (error) {
          console.log("Scanning failed: " + error);
          state.set('message', 'Failed');
        },
        {
          "preferFrontCamera": false,
          "showFlipCameraButton": true,
          "prompt": "Place an action-tag inside the scan area"
        }
      );
    });
  }
});

Template.home.onDestroyed(function () {
  //add your statement here
});

