// when clicking event submit button,
// grab the user input event data & make call to our backend
// create new = post
// edit existing = patch
// delete existing = delete

// be sure to add some event.preventDefault(); lines on any submit button types later
$(function() {
  // stuff to do when submit event button clicked
  $('.submitEventButton').on('click', function(event) {
    let eventInfo = $(this).data('eventInfoDataName');
    let eventId = $(this).data('eventId');
    // other lets to store event info details.
    // put those here later. above are examples/placeholders
    let eventFullDescription = {
      // make this an object w/ the above lets combined into 1 full event object w/ all needed details.
    };
    // post the eventInfo to create new event
    $.ajax('/api/events', {
      type: 'POST',
      data: eventFullDescription
    }).then(
      function() {
        console.log(`posted new event: ${eventFullDescription}`);
        location.reload();
      }
    );
  });
  // stuff to do when edit event button clicked
  $('.editEventButton').on('click', function(event) {
    // have all possible variables & then put in some kind of (if !eventDetail) {don't include in the object passed to patch route?}
    let eventId = $(this).data('eventId');
    // other lets to hold event info
    // put those here later
    let eventDescriptionEdits = {
      // make an object w/ the details to edit.
      // maybe make it an empty object, then use if(!particularEventDetail) {don't include} else {make that key:value pair};
    };
    // patch the event info to just edit parts of the event's details
    $.ajax('/api/events/' + eventId, {
      type: 'PATCH',
      data: eventDescriptionEdits
    }).then(
      function() {
        console.log(`updated event details: ${eventDescriptionEdits}`);
        location.reload();
      }
    );
  });
  // stuff to do when delete event button clicked
  $('.deleteEventButton').on('click', function(event) {
    let eventId = $(this).data('eventId');
    // send delete request
    $.ajax('/api/events/' + eventId, {
      type: 'DELETE',
    }).then(
      function() {
        console.log(`deleted event id#: ${eventId}`);
        location.reload();
      }
    );
  });
});
