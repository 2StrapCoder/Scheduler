var timeBlockId;
var eventShow; 
var saveBtn = $(".saveBtn");
var eventSave;
var currentDate;
var currentHour = dayjs().format("HH");

$(function () {
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});

saveBtn.on("click", function () {
  timeBlockId = $(this).parent().attr("id");
  eventSave = $(this).siblings(".description").val();
  localStorage.setItem(timeBlockId, eventSave);
  console.log(timeBlockId);
  console.log(eventSave);
  console.log(localStorage);
});

$(".time-block").each(function () {
  timeBlockId = $(this).attr("id");
  if (timeBlockId > currentHour) {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
  } else if (timeBlockId == currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});

$(".description").each(function () {
  timeBlockId = $(this).parent().attr("id");
  eventShow = localStorage.getItem(timeBlockId);
  $(this).val(eventShow);
  console.log(timeBlockId);
  console.log(eventShow);
});