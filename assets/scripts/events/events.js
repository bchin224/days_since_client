'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onAddDateButton = function (event) {
  event.preventDefault()
  $('#add-event').show()
  $('#addDateButton').hide()
  $('#show-event').hide()
  $('#edit-event').hide()
}

const onEventCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('This is data frome event.target', data)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onEventGetAll = function (event) {
  event.preventDefault()
  $('#add-event').hide()
  $('#show-event').hide()
  $('#edit-event').hide()
  api.getAllEvents()
    .then(ui.getAllEventSuccess)
    .catch(ui.getAllEventFailure)
}

const onShowDateButton = function (event) {
  event.preventDefault()
  $('#add-event').hide()
  $('#show-event').show()
  $('#edit-event').hide()
  $('#showDateButton').hide()
  $('#delete-event').hide()
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
  $('#add-event').hide()
  $('#show-event').hide()
  $('#edit-event').show()
  $('#editDateButton').hide()
  $('#delete-event').hide()
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
  $('#add-event').hide()
  $('#show-event').hide()
  $('#edit-event').hide()
  $('#delete-event').show()
  $('#deleteDateButton').hide()
}

const onEventDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteEvent(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onMenuClick = function (event) {
//   event.preventDefault()
//   $('.gameplay').hide()
//   $('.authenticated').show()
//   gameOver = false
//   $('.box').toggle('click')
//   $('#menu-button').hide()
//   $('#message-display').text('')
// }

module.exports = {
  onAddDateButton,
  onEventCreate,
  onEventGetAll,
  onShowDateButton,
  onEventShow,
  onEditDateButton,
  onEventUpdate,
  onDeleteDateButton,
  onEventDelete
}
