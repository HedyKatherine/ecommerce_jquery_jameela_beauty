$(document).ready(function () {
    $('#search-icon').click(function () {
        $(this).toggleClass('fa-times'); //saerch icon changes to X
        $('#search-box').toggleClass('active');
    });
    $('#menu').click(function () {
        $('.navbar').toggleClass('nav-toggle');
    });
    // the navbar, search icon and saerch-box dissapear while scrolling
    $(window).on('scroll load', function () {
        $('#search-icon').removeClass('fa-times');
        $('#search-box').removeClass('active');
        $('.navbar').removeClass('nav-toggle');
        if ($(window).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});

var suggestions =
    ['Beauty', 'Tote bags', 'Plage', 'Sunglasses', 'Lunettes', 'Sac', 'Produits', 'Nature', 'Fashion', 'Swimsuits', 'Maillo de bain', 'Summer', 'Argan', 'oil'];
$('#search').autocomplete({
    source: suggestions
});

