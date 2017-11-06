$(function () {
    
    // user dropdown
    $('.ui.dropdown.item').dropdown();

    // navbar item active
    $('.right.menu').on('click', '.item', function () {
        if (!$(this).hasClass('dropdown')) {
            $(this).addClass('active').siblings('.item').removeClass('active');
        }
    });
    
    // origin-password click show
    $('#showPasswordIcon').bind('click', function () {
        $('#origin-password>input').attr("type", "text");
        $('#origin-password>.unhide.link.icon').attr("id", "hidePasswordIcon");
        $('#origin-password>.unhide.link.icon').attr("class", "hide link icon");
    });

    // origin-password click hidden
    $('#hidePasswordIcon').bind('click', function () {
        $('#origin-password>input').attr("type", "password");
        $('#origin-password>.hide.link.icon').attr("id", "showPasswordIcon");
        $('#origin-password>.unhide.link.icon').attr("class", "unhide link icon");
    });

});
