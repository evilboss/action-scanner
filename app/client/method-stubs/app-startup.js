/**
 * Created by gilbertor on 3/8/16.
 */
Meteor.startup(function(){
  DocHead.setTitle('Action-Scan');
  let metaInfo = [{name: "viewport", content: "width=device-width, initial-scale=1.0"}];
  _.each(metaInfo,function(metaItem){
    DocHead.addMeta(metaItem);

  });
});