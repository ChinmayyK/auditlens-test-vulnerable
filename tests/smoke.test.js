const assert = require('assert')
const config = require('../src/config')

assert.ok(config.apiKey)
assert.ok(config.jwtSecret)
console.log('Smoke test passed')
