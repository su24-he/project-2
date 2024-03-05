//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function () {

    $('#image5-container').hide();
     // Add a click to image4-container
     $('#image4-container').on('click', function () {
        //  fading in and fading out Image 4
        $(this).fadeToggle('slow', function () {
            //  fading in and fading out Image 5
            $('#image5-container').fadeToggle('slow');
        });
    });
});

$('#video-container').on('click', function () {
    // Hide Image 5 and fade in the video
    $('#image4-container').show("");
    $('#image5-container').fadeToggle("");

});