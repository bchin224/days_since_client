'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassButton = function (event) {
  event.preventDefault()
  $('#change-password').show()
  $('#changePassButton').hide()
  $('#add-event').hide()
  $('#addDateButton').hide()
  $('#dashboardButton').hide()
  $('#show-event').hide()
  $('#showDateButton').hide()
  $('#edit-event').hide()
  $('#editDateButton').hide()
  $('#delete-event').hide()
  $('#deleteDateButton').hide()
  $('.dashboard').hide()
  $('#menu-button').show()
  $('#sign-out').hide()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassButton,
  onChangePassword,
  onSignOut
}
