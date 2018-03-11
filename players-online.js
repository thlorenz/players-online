'use strict'

const request = require('request-promise-native')

class PokerStars {
  static get URL() {
    return 'https://www.psimg.com/datafeed/dyn_banners/summary.json.js'
  }

  static extractInfo(s) {
    const info = JSON.parse(s)
    if (info == null
      || info.tournaments == null
      || info.tournaments.summary == null) return {}
    const { players, tables, active_tournaments } = info.tournaments.summary
    return { players, tables, activeTournaments: active_tournaments }
  }
}

const rooms = {
  pokerstars: PokerStars
}

/**
 * Returns data for the given room related to how many players are
 * online, tables and tournaments are active
 *
 * @param {Object} room the one of @see rooms
 * @returns {Object} result including `{ players, tables, activeTournaments }`
 */
async function playersOnline(room) {
  const s = await request(room.URL)
  return room.extractInfo(s)
}

module.exports = {
  rooms, playersOnline
}
