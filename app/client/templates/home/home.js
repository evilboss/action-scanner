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
let callAction = function (url) {
  console.log('Reading posts');


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

  let url = 'http://www.actiontag.io/api/82d59db7-61b1-4d4d-88fe-05f8a832bd3a.json';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
    }
  }
  xhr.send();
  if (Meteor.isCordova) {



    Meteor.startup(function () {
      console.log('cordova started!');
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

