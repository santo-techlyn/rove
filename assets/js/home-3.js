 //award hocer function
 $('.tab-link').on('mouseenter', function (event) {
    event.preventDefault(); // Prevent default action if necessary

    var tab_id = $(this).attr('data-tab');

    // Remove 'active' class from all tabs and content
    $('.tab-link').removeClass('active');
    $('.tab-content').removeClass('active');

    // Add 'active' class to the hovered tab and the corresponding content
    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});