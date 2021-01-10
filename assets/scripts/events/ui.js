'use strict'

const createEventSuccess = function (response) {
  // console.log(response.event)
  $('#message-display').text('Event Created!')
}

const createEventFailure = function (error) {
  $('#message-display').text('Event create failed: ' + error.responseJSON.message)
}

// const getAllEventSuccess = function (response) {
//   console.log('Here are the events', response.events)
//   // console.log('Days since =', event.daysSince)
//   const eventList = response.events
//   $('#message-display').text('')
//   eventList.forEach(event => {
//     $('#date-info').text(`${event.name} | ${event.date}
//       ID:${event._id}`)
//     // $('#date-info').after(`Date: ${event.date}`)
//     // $('#days-passed').text(`Days since ${jQuery.now()}`)
//     console.log('This is daysSince:', event.daysSince)
//     $('#days-passed').text(`Days since: ${event.daysSince}`)
//   })
// }

const getAllEventSuccess = function (response) {
  console.log('Here are the events', response.events)
  // console.log('Days since =', event.daysSince)
  let dashTest = ''
  const eventList = response.events
  $('#message-display').html('')
  eventList.forEach(event => {
    const eventHtml = (`
    <div class="row">
      <div class="col-sm-8 col-12" id="date-info">${event.name} | ${event.date}
        </br>ID:${event._id}</div>
      <div class="col-sm-3 col-12" id="days-passed"># days: ${event.daysSince}</div>
    </div>
    `)
    dashTest += eventHtml
  })
  $('#dashEvents').html(dashTest)
}

const getAllEventFailure = function (error) {
  $('#message-display').text('')
  $('#message-display').text('Failed to get all events' + error.responseJSON.message)
}

const showEventSuccess = function (response) {
  $('#message-display').text('')
  // console.log('Show the event ' + response.event.name + 'on ' + response.event.date)
  $('#show-date-info').text(`${response.event.name} | ${response.event.date}`)
  console.log(response.event.daysSince)
  $('#show-days-passed').text(`Days since: ${response.event.daysSince}`)
}

const showEventFailure = function (error) {
  $('#message-display').text('')
  $('#message-display').text('Failed to show a event' + error.responseJSON.message)
}

const editEventSuccess = function (response) {
  $('#message-display').text('Your date has been updated')
  $('form').trigger('reset')
}

const editEventFailure = function (error) {
  $('#message-display').text('Failed to edit that event' + error.responseJSON.message)
}

const deleteEventSuccess = function (response) {
  $('#message-display').text('Your date has been deleted')
  $('form').trigger('reset')
}

const deleteEventFailure = function (error) {
  $('#message-display').text('Failed to delete that event' + error.responseJSON.message)
}

module.exports = {
  createEventSuccess,
  createEventFailure,
  getAllEventSuccess,
  getAllEventFailure,
  showEventSuccess,
  showEventFailure,
  editEventSuccess,
  editEventFailure,
  deleteEventSuccess,
  deleteEventFailure
}
