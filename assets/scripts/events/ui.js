'use strict'

const createEventSuccess = function (response) {
  $('#message-display').text('Event Created!')
}

const createEventFailure = function (error) {
  $('#message-display').text('Failed to create event: ' + error.responseJSON.message)
}

const getAllEventSuccess = function (response) {
  // console.log('Here are the events', response.events)
  let dashTest = ''
  const eventList = response.events
  console.log('Testing Virtual:', eventList)
  $('#message-display').html('')
  eventList.forEach(event => {
    const eventHtml = (`
    <div class="row">
      <div class="col-sm-8 col-12" id="date-info">${event.name}  |  ${event.date}
        </br>ID:${event._id}</div>
      <div class="col-sm-4 col-12" id="days-passed"># days:</br> ${event.daysSince}</div>
    </div>
    `)
    // add each element to a larger string
    dashTest += eventHtml
  })
  // push string into the modal div with the dashEvents id
  $('#dashEvents').html(dashTest)
}

const getAllEventFailure = function (error) {
  $('#message-display').text('')
  $('#message-display').text('Failed to get all events: ' + error.responseJSON.message)
}

const showEventSuccess = function (response) {
  $('#message-display').text('')
  $('.modal-title').text(response.event.name)
  $('#show-date-info').text(`Date: ${response.event.date}`)
  $('#show-days-passed').text(`Days since: ${response.event.daysSince}`)
  $('form').trigger('reset')
}

const showEventFailure = function (error) {
  $('.modal-title').text('Failed to find event')
  $('#message-display').text('')
  $('#show-date-info').text('Please try a different event ID that is not ' + error.responseJSON.message)
}

const editEventSuccess = function (response) {
  $('#message-display').text('Your date has been updated')
  $('form').trigger('reset')
}

const editEventFailure = function (error) {
  $('#message-display').show()
  $('#message-display').text('Failed to edit that event. It was ' + error.responseJSON.message)
}

const deleteEventSuccess = function (response) {
  $('#message-display').text('Your date has been deleted')
  $('form').trigger('reset')
}

const deleteEventFailure = function (error) {
  $('#message-display').text('Failed to delete that event. It was ' + error.responseJSON.message)
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
