
$(function () {

  // creates an element selector for the save buttons
  var saveButton = $('.saveBtn');

  // elemenet selectors for each of the hours
  var hours = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')];

  // variable for writing data from local storage on page load
  var saved;

  // used day.js to get the current hour on page load
  var currentHour = dayjs().hour();
  // converts the current hour to an hour index that will be used to assign classes to the elements in the hours array
  var hourIndxex = currentHour - 9;

  // the date of today provided by day js, will display at top of page
  var today = dayjs();

  // when the save button is clicked, save contents of 
  function save(event) {
    var btnClicked = $(event.target);
    // uses DOM traversal to select the text content of the corresponding save button
    localStorage.setItem(btnClicked.parent().attr("id"), JSON.stringify(btnClicked.parent().children().eq(1).val().trim()));
  };


  // retrieves and sets text content from local storage
  function load() {
    for (i = 0; i < hours.length; i++) {
      var getFromStorage = i + 9;
      saved = localStorage.getItem("hour-" + getFromStorage);
      if (saved !== null) {
        hours[i].children().eq(1).text(JSON.parse(saved));

      }
    }
  };

  // make array of hours for 
  // get current hour
  // enter conditional logic for hour
  // if < 9 set all booxes as future
  // if > 17 set all boxes as past

  // adds classes to hour boxes based on current time which in turn sets styling
  function setTime() {
    for (i = 0; i < hours.length; i++) {
      if (i > hourIndxex) {
        hours[i].addClass('future');
      }
      if (i === hourIndxex) {
        hours[i].addClass('present');
      }
      if (i < hourIndxex) {
        hours[i].addClass('past');
      }
    }
  };

  // sets box styling on page load
  setTime();

  // set the text content at the top of the page to display the date
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));

  // on page load, populate boxes with text from local storage
  load();

  // adds event listener to the save buttons on click
  saveButton.on("click", save);

});
