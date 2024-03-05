//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function () {
    $('#image5-container').hide();

    // Add a click to image4-container
    $('#image4-container').on('click', function () {
        // Fade out Image 4
        $(this).fadeOut('slow', function () {
            // After fade out, fade in Image 5
            $('#image5-container').fadeIn('slow');
        });
    });
});