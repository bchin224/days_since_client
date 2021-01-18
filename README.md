## Days Since
The Days Since application allows a client to create a user and then start creating dates that they might want to know how long it has been since they occured. Perhaps it's an anniversary or the loss of a loved one. Either way, your information is stored securely on a MongoDB server listed below.

### Relevant Links
[API Repository](https://github.com/bchin224/days_since_api)
|
[API Live Server](https://nameless-crag-47108.herokuapp.com/)
|
[Live Application](https://bchin224.github.io/days_since_client/)

### Planning Story
1/7
- Deployed client side
- Set up authentication curl scripts, routes, even listeners and ui
- Set up events curl scripts
- Created fields for creating a new event (resource)
- Created button for retrieving index of events (resources)
- Created button for editing a single event
- Created button for deleting an event

1/8
- Created delete a resource functionality
- Created show a resource functionality
- Updated a show resource functionality
- Made other forms hidden when a different button is clicked

1/9
- Replaced dashboard with modal
- Added boostrap grids for dates within modal
- Adjusted background colors and added margins
- Added modal for show individual event
- Added virtual for days passed calculation

1/10
- Importing modal data
- Adjusted index so all resources are displayed
- Virtual calculating elapsed time now works (within 10 days of accuracy)

1/11
- Changed to green accent and background colors
- Adjusted failure messages to be more specific to function
- Adjusted show even modal information
- Replaced header with logo
- Added mouse hover color change
- Added snowdrop animation to background, but removed when it interferred
 with mouse clicks on forms
- Updated wireframe
- Modals now display event info input
- Added Math.floor to round down elapsed days calculation
- Added form resets to all form success and failure in UI

1/18
- Fixed bug: modals holding on to titles from other events
- Added a brief message on home screen explaining the app

### User Stories
- As a user, I want a form to sign up.
- As a user, I want a form to sign in.
- As a user, I want a button to sign out.
- As a user, I want a button to be able to change my password.
- As a user, I want a form to input a new date.
- As a user, I want a form to input notes about dates.
- As a user, I want to have a dashboard of my inputted dates with data
- As a user, I want to have viewing options for my dashboard
- As a user, I want the app to calculate the number of days since date input
- As a user, I want to viewing options for my dates
- As a user, I want a button to find an event.
- As a user, I want a button to delete a date.

### Technologies Used
- HTML/CSS
- JavaScript
- JQuery
- Ajax

### Unsolved Problems
- Allow user to customize color of each date

### Wireframes
![Days Since App wireframe](https://i.imgur.com/LPVI3II.jpg "Days Since Wireframe")
