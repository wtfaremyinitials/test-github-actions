let test = require('ava')
let add = require('./index.js')

test(`add(1, 2)`, t => {
  t.is(add(1, 2), 1 + 2)
})

test(`commutative property`, t => {
  t.is(add(1, 2), 2 + 1)
})
