var fs = require('fs');

var L10N = "l10n";



class Localize {
  constructor(options = ) {
    this.options = options;
  }


  //noinspection JSUnusedGlobalSymbols - called by webpack
  apply(resolver) {
    resolver.plugin('before-existing-file', function (request, callback) {
      var locale = process.env.LOCALE;

      // No locale specified.
      if(!locale || !/\w*-\w*/.exec(locale)) {
        return callback();
      }

      // Ignore node modules.
      if (/\/node_modules\//.exec(request.path))
        return callback();

      console.log("checking for localized version", request.path);

      var parts = /(.*\.)([^./\\]*)/.exec(request.path);
      console.log("checking parts", parts);
      var filePathAndName = parts[1];
      var fileExt = parts[2];

      var [lang,region] = locale.split('-');
      console.log("checking for localized version", locale, lang, region);

      var fullLocalizedPath = filePathAndName + L10N + "." + lang + "." + region + "." + fileExt;
      var langLocalizedOnly = filePathAndName + L10N + "." + lang + "." + fileExt;

      console.log("looking for ", fullLocalizedPath, "or", langLocalizedOnly);
      if(fs.existsSync(fullLocalizedPath)) {
        console.log("localized version exists");
        request.path = fullLocalizedPath;
      }

      callback();
    });
  }
}

module.exports = Localize;