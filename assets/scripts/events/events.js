'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onAddDateButton = function (event) {
  event.preventDefault()
  $('#welcomeMSG').text('')
  $('#dashboardButton').hide()
  $('.dashboard').hide()
  $('#change-password').hide()
  $('#changePassButton').hide()
  $('#add-event').show()
  $('#addDateButton').hide()
  $('#show-event').hide()
  $('#showDateButton').hide()
  $('#edit-event').hide()
  $('#editDateButton').hide()
  $('#deleteDateButton').hide()
  $('#delete-event').hide()
  $('#sign-out').hide()
  $('#menu-button').show()
}

const onEventCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onEventGetAll = function (event) {
  event.preventDefault()
  // $('#welcomeMsg').text('')
  // $('#change-password').hide()
  // $('#changePassButton').hide()
  // $('#add-event').hide()
  // $('#addDateButton').hide()
  // $('#show-event').hide()
  // $('#showDateButton').hide()
  // $('#edit-event').hide()
  // $('#editDateButton').hide()
  // $('#delete-event').hide()
  // $('#deleteDateButton').hide()
  // $('#sign-out').hide()
  // $('#dashboardButton').hide()
  // $('.dashboard').show()
  // $('#menu-button').show()
  api.getAllEvents()
    .then(ui.getAllEventSuccess)
    .catch(ui.getAllEventFailure)
}

const onShowDateButton = function (event) {
  event.preventDefault()
  $('#welcomeMsg').text('')
  $('#dashboardButton').hide()
  $('.dashboard').hide()
  $('#change-password').hide()
  $('#changePassButton').hide()
  $('#add-event').hide()
  $('#addDateButton').hide()
  $('#show-event').show()
  $('#showDateButton').hide()
  $('#edit-event').hide()
  $('#editDateButton').hide()
  $('#delete-event').hide()
  $('#deleteDateButton').hide()
  $('#sign-out').hide()
  $('#menu-button').show()
}

const onEventShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showEvent(data)
    .then(ui.showEventSuccess)
    .catch(ui.showEventFailure)
}

const onEditDateButton = function (event) {
  event.preventDefault()
  $('#welcomeMsg').text('')
  $('#dashboardButton').hide()
  $('.dashboard').hide()
  $('#change-password').hide()
  $('#changePassButton').hide()
  $('#add-event').hide()
  $('#addDateButton').hide()
  $('#show-event').hide()
  $('#showDateButton').hide()
  $('#edit-event').show()
  $('#editDateButton').hide()
  $('#delete-event').hide()
  $('#deleteDateButton').hide()
  $('#sign-out').hide()
  $('#menu-button').show()
}

const onEventUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editEvent(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onDeleteDateButton = function (event) {
  event.preventDefault()
  $('#welcomeMsg').text('')
  $('#dashboardButton').hide()
  $('.dashboard').hide()
  $('#change-password').hide()
  $('#changePassButton').hide()
  $('#add-event').hide()
  $('#addDateButton').hide()
  $('#show-event').hide()
  $('#showDateButton').hide()
  $('#edit-event').hide()
  $('#editDateButton').hide()
  $('#delete-event').show()
  $('#deleteDateButton').hide()
  $('#sign-out').hide()
  $('#menu-button').show()
}

const onEventDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteEvent(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onMenuClick = function (event) {
  event.preventDefault()
  $('#welcomeMsg').text('')
  $('#change-password').hide()
  $('#add-event').hide()
  $('#show-event').hide()
  $('#edit-event').hide()
  $('#delete-event').hide()
  $('#change-password').hide()
  $('#menu-button').hide()
  $('#dashboardButton').show()
  $('.dashboard').hide()
  $('#message-display').text('')
  $('#changePassButton').show()
  $('#addDateButton').show()
  $('#showDateButton').show()
  $('#editDateButton').show()
  $('#deleteDateButton').show()
  $('#sign-out').show()
}

module.exports = {
  onAddDateButton,
  onEventCreate,
  onEventGetAll,
  onShowDateButton,
  onEventShow,
  onEditDateButton,
  onEventUpdate,
  onDeleteDateButton,
  onEventDelete,
  onMenuClick
}
