// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  
  // Code for a Listener function activated by clicking the save button
  // for a given hour.
  $('.saveBtn').on('click', function () {
    // Function used to fetch the values of the hour block which had its save button
    // clicked using the jQuery siblings() and parent() methods.
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // Saves the value and time variables created above to localStorage.
    localStorage.setItem(time, value);

    // Display a Notification indicating that an appointment
    // was saved to localStorage by adding the 'show' class to the "section"
    // element with the class "notification".
    $('.notification').addClass('show');

    // Function thatm after 5 seconds, removes 'show' from the "section"
    // element with the class "notification"
    removeNotif(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  
  // TODO: Add code to display the current date in the header of the page.
});
