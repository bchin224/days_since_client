'use strict'

const createEventSuccess = function (response) {
  console.log(response.event)

  $('#message-display').text('Event Created!')

  const eventHtml = `
  <h3>${response.event.title}</h3>
  <h4>Directed by ${response.event.director}</h4>`

  $('.event-display').html(eventHtml)
}

const createEventFailure = function (error) {
  $('#message-display').text('Event create failed: ' + error.responseJSON.message)
}

const getAllEventSuccess = function (response) {
  console.log('Here are the events', response.events)
  const eventList = response.events
  $('#message-display').text('Here are all the events!')
  eventList.forEach(event => {
    $('#date-info').text(`${event.name} | ${event.date}`)
    // $('#date-info').after(`Date: ${event.date}`)
    $('#days-passed').text('Days since event calculation')
  })
}

const getAllEventFailure = function (error) {
  $('#message-display').text('Failed to get all events' + error.responseJSON.message)
}

const showEventSuccess = function (response) {
  console.log('Show the event ' + response.event.name + 'on ' + response.event.date)
  $('#show-date-info').text(`${response.event.name} | ${response.event.date}`)
  $('#show-days-passed').text('Days since event calculation')
}

const showEventFailure = function (error) {
  $('#message-display').text('Failed to show a event' + error.responseJSON.message)
}

module.exports = {
  createEventSuccess,
  createEventFailure,
  getAllEventSuccess,
  getAllEventFailure,
  showEventSuccess,
  showEventFailure
}
