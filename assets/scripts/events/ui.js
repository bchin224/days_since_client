'use strict'

const createEventSuccess = function (response) {
  console.log(response.event)

  $('#message').text('Event Created!')

  const eventHtml = `
  <h3>${response.event.title}</h3>
  <h4>Directed by ${response.event.director}</h4>`

  $('.event-display').html(eventHtml)
}

const createEventFailure = function (error) {
  $('#message').text('Event create failed: ' + error.responseJSON.message)
}

const getAllEventSuccess = function (response) {
  console.log(response.events)
  const eventList = response.events
  $('#message').text('Here are all the events!')
  eventList.forEach(event => {
    $('#message').after(`<b>ID:</b> ${event._id}</br></br>`)
    $('#message').after(`<b>Title:</b> ${event.title}</br>`)
  })
}

const getAllEventFailure = function (error) {
  $('#message').text('Failed to get all events' + error.responseJSON.message)
}

const showEventSuccess = function (response) {
  console.log('Show the event ' + response.events.id)
}

const showEventFailure = function (error) {
  $('#message').text('Failed to show a event' + error.responseJSON.message)
}

module.exports = {
  createEventSuccess,
  createEventFailure,
  getAllEventSuccess,
  getAllEventFailure,
  showEventSuccess,
  showEventFailure
}
