// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scrollRocket').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scrollRocket').fadeOut(200);   // Else fade out the arrow
    }
});
// $('#scrollRocket').click(function() {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 1000);
// });