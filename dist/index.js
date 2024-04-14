
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./kyz-toast.cjs.production.min.js')
} else {
  module.exports = require('./kyz-toast.cjs.development.js')
}
