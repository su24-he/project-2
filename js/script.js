//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function () {

    $('#image5-container').hide();
    $('#image6-container').hide();
    $('#image7-container').hide();
    $('#image8-container').hide();


    // Add a click to image4-container
    $('#image4-container').on('click', function () {
        //  fading in and fading out Image 4
        $(this).fadeToggle('slow', function () {
            //  fading in and fading out Image 5
            $('#image5-container').fadeToggle('slow');
        });
    });


    $('#image2-container').click(function () {
        // fading in and fading out Image 6, Image 7, and toggling color on Image 8
        $('#image6-container').fadeToggle('slow');
        $('#image7-container').fadeToggle('slow');
        $('#image8-container').show('slow');
    });
    // animation-color
    $('#image8-container').click(function () {
        $('#image6-container').addClass('animation-color');
        $('#image7-container').addClass('animation-color');
    });


});

    


$('#video-container').on('click', function () {
    // Hide Image 5 and fade in the video
    $('#image4-container').show("");
    $('#image5-container').fadeToggle("");
    $('#image6-container').fadeToggle("");
    $('#image7-container').fadeToggle("");

});