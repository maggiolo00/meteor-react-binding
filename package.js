Package.describe({
  name: 'wolf4ood:react-binding',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Just a wrapper for react-binding.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maggiolo00/meteor-react-binding',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'react-binding': '0.6.4',
  'externalify': '0.1.0'
});
Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('react-runtime', 'client');

  api.use('cosmos:browserify@0.9.2', 'client');

  api.addFiles([
    'react-binding.browserify.js',
    'react-binding.browserify.options.json'
  ], 'client');

  api.export('BindToMixin', 'client');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('wolf4ood:react-binding');
  api.addFiles('react-binding-tests.js','client');
});
