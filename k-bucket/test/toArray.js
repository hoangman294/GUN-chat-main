'use strict'
var test = require('tape')
var KBucket = require('../')

test('toArray should return empty array if no contacts', function (t) {
  var kBucket = new KBucket()
  t.same(kBucket.toArray().length, 0)
  t.end()
})

test('toArray should return all contacts in an array arranged from low to high buckets', function (t) {
  t.plan(22)
  var kBucket = new KBucket({ localNodeId: new Buffer([ 0x00, 0x00 ]) })
  var expectedIds = []
  for (var i = 0; i < kBucket.numberOfNodesPerKBucket; ++i) {
    kBucket.add({ id: new Buffer([ 0x80, i ]) }) // make sure all go into "far away" bucket
    expectedIds.push(0x80 * 256 + i)
  }
  // cause a split to happen
  kBucket.add({ id: new Buffer([ 0x00, 0x80, i - 1 ]) })
  // console.log(require('util').inspect(kBucket, {depth: null}))
  var contacts = kBucket.toArray()
  // console.log(require('util').inspect(contacts, {depth: null}))
  t.same(contacts.length, kBucket.numberOfNodesPerKBucket + 1)
  t.same(parseInt(contacts[0].id.toString('hex'), 16), 0x80 * 256 + i - 1)
  contacts.shift() // get rid of low bucket contact
  for (i = 0; i < kBucket.numberOfNodesPerKBucket; ++i) {
    t.same(parseInt(contacts[i].id.toString('hex'), 16), expectedIds[i])
  }
  t.end()
})
