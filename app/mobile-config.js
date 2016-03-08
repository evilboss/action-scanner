/**
 * Created by gilbertor on 3/7/16.
 */
App.info({
  name: 'Action Scan',
  description: 'Custom QR code reader for Cloudstaff action Tag',
  version: '0.0.3',
  author: 'Jr Reyes',
  email: 'jr.evilboss@gmail.com',
  website: 'http://actiontag.io/'
});
App.accessRule('*');
App.accessRule('http://*');
App.accessRule('https:/*');

App.icons({
  // Android
  'android_hdpi': 'resources/icons/android/drawable-hdpi/ic_launcher.png',
  'android_ldpi': 'resources/icons/android/drawable-ldpi/ic_launcher.png',
  'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
  'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png'
});

App.launchScreens({
  'android_ldpi_portrait': 'resources/splash/splash.png',
  'android_ldpi_landscape': 'resources/splash/splash.png',
  'android_mdpi_portrait': 'resources/splash/splash.png',
  'android_mdpi_landscape': 'resources/splash/splash.png',
  'android_hdpi_portrait': 'resources/splash/splash.png',
  'android_hdpi_landscape': 'resources/splash/splash.png',
  'android_xhdpi_portrait': 'resources/splash/splash.png',
  'android_xhdpi_landscape': 'resources/splash/splash.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('Orientation', 'portrait');
