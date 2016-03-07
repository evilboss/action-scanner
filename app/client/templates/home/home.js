Template.home.helpers({
  //add you helpers here
});

Template.home.events({
  //add your events here
});

Template.home.onCreated(function () {
  //add your statement here
});

Template.home.onRendered(function () {
  if(Meteor.isCordova){
    Meteor.startup(function () {

      cordova.plugins.barcodeScanner.scan(
        function (result) {

          alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
        },
        function (error) {
          alert("Scanning failed: " + error);
        }
      );
    });
  }
});

Template.home.onDestroyed(function () {
  //add your statement here
});

