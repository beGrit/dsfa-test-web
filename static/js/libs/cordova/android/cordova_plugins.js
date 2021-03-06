cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-battery-status.battery",
        "file": "plugins/cordova-plugin-battery-status/www/battery.js",
        "pluginId": "cordova-plugin-battery-status",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-plugin-contacts.contacts",
        "file": "plugins/cordova-plugin-contacts/www/contacts.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "id": "cordova-plugin-contacts.Contact",
        "file": "plugins/cordova-plugin-contacts/www/Contact.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "id": "cordova-plugin-contacts.convertUtils",
        "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
        "pluginId": "cordova-plugin-contacts"
    },
    {
        "id": "cordova-plugin-contacts.ContactAddress",
        "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactError",
        "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactField",
        "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactFindOptions",
        "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactName",
        "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactOrganization",
        "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactFieldType",
        "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
        "pluginId": "cordova-plugin-contacts",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.Acceleration",
        "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.accelerometer",
        "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassError",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.compass",
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification",
            "$Dialogs",
            "dsm"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification",
            "$Dialogs",
            "dsm"
        ]
    },
    {
        "id": "cordova-plugin-file.DirectoryEntry",
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "id": "cordova-plugin-file.DirectoryReader",
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "id": "cordova-plugin-file.Entry",
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "id": "cordova-plugin-file.File",
        "file": "plugins/cordova-plugin-file/www/File.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "id": "cordova-plugin-file.FileEntry",
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "id": "cordova-plugin-file.FileError",
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "id": "cordova-plugin-file.FileReader",
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "id": "cordova-plugin-file.FileSystem",
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "id": "cordova-plugin-file.FileUploadOptions",
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "id": "cordova-plugin-file.FileUploadResult",
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "id": "cordova-plugin-file.FileWriter",
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "id": "cordova-plugin-file.Flags",
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "id": "cordova-plugin-file.LocalFileSystem",
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-file.Metadata",
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "id": "cordova-plugin-file.ProgressEvent",
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "id": "cordova-plugin-file.fileSystems",
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "pluginId": "cordova-plugin-file"
    },
    {
        "id": "cordova-plugin-file.requestFileSystem",
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-file.isChrome",
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "id": "cordova-plugin-file.androidFileSystem",
        "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "id": "cordova-plugin-file.fileSystems-roots",
        "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "id": "cordova-plugin-file.fileSystemPaths",
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-globalization.GlobalizationError",
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "id": "cordova-plugin-globalization.globalization",
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-media.MediaError",
        "file": "plugins/cordova-plugin-media/www/MediaError.js",
        "pluginId": "cordova-plugin-media",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "id": "cordova-plugin-media.Media",
        "file": "plugins/cordova-plugin-media/www/Media.js",
        "pluginId": "cordova-plugin-media",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureAudioOptions",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureImageOptions",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureVideoOptions",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureError",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.MediaFileData",
        "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.MediaFile",
        "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.helpers",
        "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "id": "cordova-plugin-media-capture.capture",
        "file": "plugins/cordova-plugin-media-capture/www/capture.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.init",
        "file": "plugins/cordova-plugin-media-capture/www/android/init.js",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
     {
         "id": "com.ionic.keyboard.keyboard",
         "file": "plugins/com.ionic.keyboard/www/keyboard.js",
         "pluginId": "com.ionic.keyboard.keyboard",
         "clobbers": [
             "$Keyboard"
         ]
     },
     {
           "id": "com.triarc.sqliteplugin.SQLitePlugin",
           "file": "plugins/com.triarc.sqliteplugin/www/SQLitePlugin.js",
           "pluginId": "com.triarc.sqliteplugin.SQLitePlugin",
           "clobbers": [
               "$SQLite",
               "SQLitePlugin"
           ]
     },
     {
           "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
           "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
           "pluginId": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
           "clobbers": [
               "$Barcode",
               "$Scanner"
           ]
     },
    {
          "id": "org.apache.cordova.toast.ToastPlugin",
          "file": "plugins/org.apache.cordova.toast.ToastPlugin/toast.js",
          "pluginId": "org.apache.cordova.toast.ToastPlugin",
          "clobbers": [
              "$CordovaToast"
          ]
    },
    {
          "id": "dreambox-gps",
          "file": "plugins/dreambox-gps/www/gps.js",
          "pluginId": "dreambox-gps",
          "clobbers": [
              "$GPS"
          ]
    },
     {
         "id": "dreambox-version",
         "file": "plugins/dreambox-version/version.js",
         "pluginId": "dreambox-version",
         "clobbers": [
             "$Version"
         ]
     },
       {
           "id": "dreambox-photo",
           "file": "plugins/dreambox-photo/photo.js",
           "pluginId": "dreambox-photo",
           "clobbers": [
               "$Photo"
           ]
       },
       {
           "id": "dreambox-umshare",
           "file": "plugins/dreambox-umshare/umshare.js",
           "pluginId": "dreambox-umshare",
           "clobbers": [
               "$Umshare"
           ]
       },
       {
           "id": "dreambox-netChange",
           "file": "plugins/dreambox-netChange/netChange.js",
           "pluginId": "dreambox-netChange",
           "clobbers": [
               "$Net"
           ]
       },
       {
           "id": "dreambox-speech",
           "file": "plugins/dreambox-speech/speech.js",
           "pluginId": "dreambox-speech",
           "clobbers": [
               "$Speech"
           ]
       },
       {
           "id": "dreambox-mfile",
           "file": "plugins/dreambox-file/mfile.js",
           "pluginId": "dreambox-mfile",
           "clobbers": [
               "$MFile"
           ]
       },
       {
           "id": "dreambox-dsui",
           "file": "plugins/dreambox-dsui/dsui.js",
           "pluginId": "dreambox-dsui",
           "clobbers":[
               "$DSUI"
           ],
           "merges":[
               "dsm"
           ]
       },
       {
          "id": "dreambox-ESurvey",
          "file": "plugins/cordova-plugin-servey/www/android/writename.js",
          "pluginId": "dreambox-ESurvey",
          "clobbers": [
              "$ESurvey"
          ]
      },
       {
          "id": "dreambox-BaiduLocation",
          "file": "plugins/cordova-plugin-servey/www/android/location.js",
          "pluginId": "dreambox-BaiduLocation",
           "clobbers": [
              "$BaiduLocation"
           ]
       },
//       {
//          "id": "dreambox-offline",
//          "file": "plugins/dreambox-offline/offline.js",
//          "pluginId": "dreambox-offline",
//           "clobbers": [
//              "_DsfOffLine"
//           ]
//       },
       {
          "id": "dreambox-record",
          "file": "plugins/dreambox-record/record.js",
          "pluginId": "dreambox-record",
           "clobbers": [
              "_DsfRecord"
           ]
       },
       {
           "id": "dreambox-upload",
           "file": "plugins/dreambox-upload/upload.js",
           "pluginId": "dreambox-upload",
            "clobbers": [
               "_DsfUpload"
            ]
        },
         {
             "id": "dreambox-net",
             "file": "plugins/dreambox-net/net.js",
             "pluginId": "dreambox-net",
              "clobbers": [
                 "_DsfNet"
              ]
          },
         {
             "id": "dreambox-imagePicker",
             "file": "plugins/dreambox-imagePicker/imagePicker.js",
             "pluginId": "dreambox-imagePicker",
             "clobbers": [
                 "$ImagePicker"
             ]
         } ,
           {
               "id": "dreambox-iaction",
               "file": "plugins/dreambox-iaction/iaction.js",
               "pluginId": "dreambox-iaction",
               "clobbers": [
                   "$iaction"
               ]
           }
         ,
         {
             "id": "dreambox-sharedPreferences",
             "file": "plugins/dreambox-sharedPreferences/sharedPreferences.js",
             "pluginId": "dreambox-sharedPreferences",
             "clobbers": [
                 "$sharedPreferences"
             ]
         },
         {
             "id": "cordova-plugin-rongim.deviceid",
             "file": "plugins/cordova-plugin-rongim/www/deviceid.js",
             "pluginId": "cordova-plugin-rongim.deviceid",
             "clobbers": [
                 "$DeviceIdPlugin"
             ]
         },
         {
             "id": "cordova-plugin-rongim.imoption",
             "file": "plugins/cordova-plugin-rongim/www/imoption.js",
              "pluginId": "cordova-plugin-rongim.imoption",
             "clobbers": [
                 "$RIMOptionPlugin"
             ]
         },
         {
             "id": "dreambox-arcsoftface",
             "file": "plugins/dreambox-arcsoftface/arcsoftface.js",
             "pluginId": "dreambox-arcsoftface",
             "clobbers": [
                "$arcsoftface"
                ]
         },
         {
             "id": "dreambox-rtasr",
             "file": "plugins/dreambox-rtasr/rtasr.js",
             "pluginId": "dreambox-rtasr",
                 "clobbers": [
                   "$rtasr"
                 ]
         },
         {
              "id": "dreambox-IFlytek",
              "file": "plugins/dreambox-IFlytek/IFlytek.js",
              "pluginId": "dreambox-IFlytek",
                 "clobbers": [
                   "$IFlytek"
                 ]
         },
      {
          "id": "dreambox-wps",
          "file": "plugins/dreambox-wps/wpsPlugin.js",
          "pluginId": "dreambox-wps",
          "clobbers": [
                    "$WPS"
              ]
          },
           {
               "id": "dreambox-openwebpage",
               "file": "plugins/dreambox-openwebpage/openwebpage.js",
               "pluginId": "dreambox-openwebpage",
               "clobbers": [
                   "$OpenWebActivityPlugin"
               ]
           }

];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-battery-status": "1.2.2",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-camera": "2.3.1",
    "cordova-plugin-contacts": "2.2.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-device-motion": "1.2.3",
    "cordova-plugin-device-orientation": "1.0.5",
    "cordova-plugin-dialogs": "1.3.1",
    "cordova-plugin-file": "4.3.1",
    "cordova-plugin-file-transfer": "1.6.1",
    "cordova-plugin-geolocation": "2.4.1",
    "cordova-plugin-globalization": "1.0.5",
    "cordova-plugin-inappbrowser": "1.6.1",
    "cordova-plugin-media": "2.4.1",
    "cordova-plugin-media-capture": "1.4.1",
    "cordova-plugin-network-information": "1.3.1",
    "cordova-plugin-splashscreen": "4.0.1",
    "cordova-plugin-vibration": "2.1.3",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});