'use strict'

const authEvents = require('./auth/events.js')
const eventEvents = require('./events/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hide all non-button id's and classes
  $('#message').text('')
  $('.authenticated').hide()
  $('#change-password').hide()
  $('#add-event').hide()
  $('#show-event').hide()
  $('#edit-event').hide()
  $('#menu-button').hide()
  $('#delete-event').hide()
  $('.dashboard').hide()
  // authentication listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changePassButton').on('click', authEvents.onChangePassButton)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // event (date) listeners
  $('#dashboardButton').on('click', eventEvents.onEventGetAll)
  $('#addDateButton').on('click', eventEvents.onAddDateButton)
  $('#add-event').on('submit', eventEvents.onEventCreate)
  $('#showDateButton').on('click', eventEvents.onShowDateButton)
  $('#show-event').on('submit', eventEvents.onEventShow)
  $('#editDateButton').on('click', eventEvents.onEditDateButton)
  $('#edit-event').on('submit', eventEvents.onEventUpdate)
  $('#deleteDateButton').on('click', eventEvents.onDeleteDateButton)
  $('#delete-event').on('submit', eventEvents.onEventDelete)
  $('#menu-button').on('click', eventEvents.onMenuClick)
})
