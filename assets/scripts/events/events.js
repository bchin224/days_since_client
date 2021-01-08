'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

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
  api.getAllEvents()
    .then(ui.getAllEventSuccess)
    .catch(ui.getAllEventFailure)
}

const onEventShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showEvent(data)
    .then(ui.showEventSuccess)
    .catch(ui.showEventFailure)
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
  onEventCreate,
  onEventGetAll,
  onEventShow,
  onEventDelete
}
