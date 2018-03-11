'use strict'

const test = require('tape')
// eslint-disable-next-line no-unused-vars
const ocat = require('ocat').applyRes5Opts()
const spok = require('spok')

const { playersOnline, rooms } = require('../')

test('\npokerstars', async t => {
  try {
    const res = await playersOnline(rooms.pokerstars)
    spok(t, res,
      { players: spok.gtz, tables: spok.gtz, activeTournaments: spok.gtz })
  } catch (err) {
    t.iferror(err)
  }

  t.end()
})
