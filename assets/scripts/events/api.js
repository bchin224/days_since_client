'use strict'

const store = require('./../store')
const config = require('./../config')

const createEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const getAllEvents = function () {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showEvent = function (data) {
  console.log('This is showEvent data:', data)
  return $.ajax({
    url: config.apiUrl + '/events/' + data.event.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events/' + data.event.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createEvent,
  getAllEvents,
  showEvent,
  deleteEvent
}
