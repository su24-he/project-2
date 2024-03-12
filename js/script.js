//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function () {

    $('#image5-container').hide();
    $('#image6-container').hide();
    $('#image7-container').hide();
    $('#image8-container').hide();
    $('#image10-container').hide();
    $('#image11-container').hide();
    $('#image12-container').hide();
    $('#image9-container').hide();


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

    $('#image3-container').click(function () {
        $('#image10-container').show('slow');
    });

    $('#image10-container').click(function () {
        $('#image11-container').fadeIn(2000);
        $('#image12-container').fadeIn(2000);
    });

    $('#image1-container').click(function () {
        $('#image9-container').show('slow');
    });




});

// restart

$('#video-container').on('click', function () {
    // Show Image 4 and hide other images
    $('#image4-container').show();
    $('#image5-container').hide();
    $('#image6-container').hide();
    $('#image7-container').hide();
    
    // Remove the animation class for image6 and image7
    $('#image6-container').removeClass('animation-color')
    $('#image7-container').removeClass('animation-color')
    
    $('#image8-container').hide();
    $('#image10-container').hide();
    $('#image11-container').hide();
    $('#image12-container').hide();
    $('#image9-container').hide();
});