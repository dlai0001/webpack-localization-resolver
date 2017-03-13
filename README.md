# Webpack Localization Resolver

Makes localization easier by swapping out files if localized versions exist.

# Usage

Install

    npm install --save-dev webpack-localiation-resolver

`webpack.config.js`

    var LocalizationResolver = require('webpack-localization-resolver');

    module.exports = {
        ...
        resolve: {
            plugins: [new LocalizationResolver()]
        },
        ...
    };

For each file you want to localize, add the `.l10n.(lang).(region).` to the suffix.

`view/content.html`
`view/content.en.US.html`
`view/content.es.SP.html`

Then when you webpack, set the environment variable `LOCALE` to specify which localized version to use.

    LOCALE=en-US webpack

