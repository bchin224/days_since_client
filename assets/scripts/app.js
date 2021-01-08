'use strict'

const authEvents = require('./auth/events.js')
const eventEvents = require('./events/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // authentication listeners
  // $('.authenticated').hide()
  $('#menu-button').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // event (date) listeners
  $('#dashboard').on('click', eventEvents.onEventGetAll)
  $('#add-event').on('submit', eventEvents.onEventCreate)
  $('#show-event').on('submit', eventEvents.onEventShow)
  $('#edit-event').on('submit', eventEvents.onEventUpdate)
  $('#delete-event').on('submit', eventEvents.onEventDelete)
  // $('#menu-button').on('click', gameEvents.onMenuClick
})
