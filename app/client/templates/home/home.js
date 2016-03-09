let state = new ReactiveDict('');
let parseUrl = function (url) {
  parser = url.split('/');
  let tagId;
  _.each(parser, function (urlItem) {
    if (urlItem.length == 36) {
      tagId = urlItem;
    }
  });
  return tagId;
}
let getTagId = function (result) {
  if (result.text.includes('actiontag.io')) {
    let tagId = parseUrl(result.text);
    if (tagId) {
      state.set('message', 'Success');
    } else {
      state.set('message', 'Action Tag not found');
    }
    return tagId;
  }
}
let callActionTag = function (tagId) {

}
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
          let tagId = getTagId(result);

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

