# players-online [![build status](https://secure.travis-ci.org/thlorenz/players-online.svg?branch=master)](http://travis-ci.org/thlorenz/players-online)

Queries how many players are online at various Poker sites.

```js
'use strict'

const { playersOnline, rooms } = require('players-online')

;(async () => {
  try {
    const res = await playersOnline(rooms.pokerstars)
    console.log(res)
    // => { players: 41280, tables: 7617, activeTournaments: 3525 }
  } catch (err) {
    console.error(err)
  }
})()
```

## Status

Only PokerStars supported ATM, pull requests adding more sites are welcome.

## Installation

    npm install players-online

## License

MIT
