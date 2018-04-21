/* eslint no-extend-native: 0 */

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

console.log('Load your polyfills')

// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes'
import repeat from 'core-js/library/fn/string/virtual/repeat'
require('core-js/library/fn/object/assign')
// import 'core-js/library/es6/object'
import 'core-js/library/es6/map'
import 'core-js/library/es6/set'

String.prototype.includes = includes
String.prototype.repeat = repeat
