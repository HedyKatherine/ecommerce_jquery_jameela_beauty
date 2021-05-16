// fonction pour afficher la search-box
// au clic sur l'icon search cela active la search-box et le search icon change
$(document).ready(function () {
  $('#search-icon').click(function () {
    $(this).toggleClass('fa-times'); //saerch icon change avec l'icon X
    $('#search-box').toggleClass('active');
  });
  // au click sur la div id=menu (l'icon diament ici) le menu deroulant (classe navebar) s'affiche ou se masquer
  $('#menu').click(function () {
    $('.navbar').toggleClass('nav-toggle');
  });
  // la navbar, le search icon et la saerch-box disparaisse au scroll sur la page
  $(window).on('scroll load', function () {
    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');
    $('.navbar').removeClass('nav-toggle');
    // si le scroll est superieur à 0 (donc non active) le header reste sticky
    if ($(window).scrollTop() > 0) {
      $('header').addClass('sticky');
      // sinon on retire la fonction sticky du header
    } else {
      $('header').removeClass('sticky');
    }
  });
});
// tableau pour l'affichage des suggestions en autoglompletion de la search-bar
var suggestions =
  ['Beauty', 'Tote bags', 'Plage', 'Sunglasses', 'Lunettes', 'Sac', 'Produits', 'Nature', 'Fashion', 'Swimsuits', 'Maillo de bain', 'Summer', 'Argan', 'oil'];
$('#search').autocomplete({
  source: suggestions
});
// reste un definir des conditions d'affichage pour la premiére lettre de recherche uniquement

//==================== Login-sign-up-form ==================
$(document).on('click', '#user,.Already-acount', function () {
  $('.form').addClass('login-active').removeClass('sign-up-active');
});

$(document).on('click', '.sign-up-btn', function () {
  $('.form').addClass('sign-up-active').removeClass('login-active');
});
$(document).on('click', '.form-cancel', function () {
  $('.form').removeClass('login-active').removeClass('sign-up-active');
});

//=============== Login-sign-up-form ======================

$('.small-image img').click(function () {
  var img = $(this).attr('src');
  $('.big-img img').attr('src', img);
});
$('#zoom').imagezoomsl({
  zoomrange: [4, 4]
});

$('.small img').click(function () {
  var img = $(this).attr('src');
  $('.hair img').attr('src', img);
});

$('#zoom1').imagezoomsl({
  zoomrange: [4, 4]
});

$('.sm-img img').click(function () {
  var img = $(this).attr('src');
  $('.hydratation img').attr('src', img);
});
$('#zoom2').imagezoomsl({
  zoomrange: [4, 4]
});

$('.pic img').click(function () {
  var img = $(this).attr('src');
  $('.big img').attr('src', img);
});
$('#zoom3').imagezoomsl({
  zoomrange: [4, 4]
});

$('.pics img').click(function () {
  var img = $(this).attr('src');
  $('.picture img').attr('src', img);
});
$('#zoom4').imagezoomsl({
  zoomrange: [4, 4]
});



