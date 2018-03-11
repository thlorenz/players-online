'use strict'

const { playersOnline, rooms } = require('../')

;(async () => {
  try {
    const res = await playersOnline(rooms.pokerstars)
    console.log(res)
    // => { players: 41280, tables: 7617, activeTournaments: 3525 }
  } catch (err) {
    console.error(err)
  }
})()
