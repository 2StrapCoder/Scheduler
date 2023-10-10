$(function () {
    var currentHour = dayjs().hour();
    $('#currentDay').text(dayjs().format('MMM d, YYYY'));

    $('.saveBtn').on('click', function(){
        var timeBlock = $(this).closest('.time-block');
        var hourId = timeBlock.attr('id');
        var userInput = timeBlock.find('textarea').val();
        localStorage.setItem(hourId, userInput);
    });

    $('.time-block').each(function(){
        var blockHour = parseInt($(this).attr('id').split('-')[1], 10);

    