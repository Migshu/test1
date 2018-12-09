$(document).ready(function() {
    $(".main_btna, .main_btn, [href='#sheldure']").on('click', function() {
        $('.overlay').fadeIn("slow");
        $('.modal').slideToggle("slow");
    });

    $('.close').on('click',function() {
        $('.modal').slideToggle("slow");
        $('.overlay').fadeOut("slow");
    });
});