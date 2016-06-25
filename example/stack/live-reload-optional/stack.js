'use strict'
const LocalWebServer = require('../../../')
const liveReload = require('koa-livereload')
const DefaultStack = require('local-web-server-default-stack')

class LiveReloadStack extends DefaultStack {
  addAll () {
    return this.addLogging('dev')
      .add({
        optionDefinitions: {
          name: 'live-reload', type: Boolean,
          description: 'Add live reload.'
        },
        middleware: function (options) {
          if (options['live-reload']) {
            return liveReload()
          }
        }
      })
      .addStatic()
  }
}

module.exports = LiveReloadStack
