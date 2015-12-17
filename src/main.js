'use strict';

var app = require('app');

var handleStartupEvent = function() {
  if (process.platform !== 'win32')
    return false;

  var squirrelCommand = process.argv[1];
  switch (squirrelCommand) {
    case '--squirrel-install':
      app.quit();

      return true;    
    case '--squirrel-updated':
      app.quit();

      return true;
    case '--squirrel-uninstall':
      app.quit();

      return true;
    case '--squirrel-obsolete':
      app.quit();

      return true;
  }
};

if (handleStartupEvent())
  return;
