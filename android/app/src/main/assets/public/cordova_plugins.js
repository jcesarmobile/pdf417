
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
        "id": "pdf417-cordova.Pdf417Scanner",
        "file": "plugins/pdf417-cordova/www/pdf417scanner.js",
        "pluginId": "pdf417-cordova",
        "clobbers": [
          "cordova.plugins.pdf417Scanner"
        ]
      }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-whitelist": "1.3.3",
      "pdf417-cordova": "7.0.1-0"
    };
    // BOTTOM OF METADATA
    });
    