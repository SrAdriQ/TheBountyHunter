$(document).ready(function () {

  // - Change the class of the navbar to change the color and border with a little transition on css - //
  updateNavStyle();
  $(window).scroll(function () {
    updateNavStyle();
  });

  // - When the web is in responsive mode hide the navbar-collapse when you click an option -//
  $('.collapse-check>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $(".scroll-link").click (function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(id).offset().top - 62 }, 100);
  });

  $(".generoTarget").click (function (e) {
    e.preventDefault();
    $('.content-2').addClass('show');
    $('.content-2').removeClass('hide');
    $('.content-3').addClass('hide');
    $('.content-3').removeClass('show');
    $('.content-4').addClass('hide');
    $('.content-4').removeClass('show');
    $('.content-5').addClass('hide');
    $('.content-5').removeClass('show');
    $('.content-6').addClass('hide');
    $('.content-6').removeClass('show');
  });

  $(".estilo").click (function (e) {
    e.preventDefault();
    $('.content-3').addClass('show');
    $('.content-3').removeClass('hide');
    $('.content-2').addClass('hide');
    $('.content-2').removeClass('show');
    $('.content-4').addClass('hide');
    $('.content-4').removeClass('show');
    $('.content-5').addClass('hide');
    $('.content-5').removeClass('show');
    $('.content-6').addClass('hide');
    $('.content-6').removeClass('show');
  });
  $(".objetivos").click (function (e) {
    e.preventDefault();
    $('.content-5').addClass('show');
    $('.content-5').removeClass('hide');
    $('.content-2').addClass('hide');
    $('.content-2').removeClass('show');
    $('.content-3').addClass('hide');
    $('.content-3').removeClass('show');
    $('.content-4').addClass('hide');
    $('.content-4').removeClass('show');
    $('.content-6').addClass('hide');
    $('.content-6').removeClass('show');
  });

  $(".referencias").click (function (e) {
    e.preventDefault();
    $('.content-6').addClass('show');
    $('.content-6').removeClass('hide');
    $('.content-2').addClass('hide');
    $('.content-2').removeClass('show');
    $('.content-3').addClass('hide');
    $('.content-3').removeClass('show');
    $('.content-4').addClass('hide');
    $('.content-4').removeClass('show');
    $('.content-5').addClass('hide');
    $('.content-5').removeClass('show');
  });
  $(".mecanica").click (function (e) {
    e.preventDefault();
    $('.content-4').addClass('show');
    $('.content-4').removeClass('hide');
    $('.content-2').addClass('hide');
    $('.content-2').removeClass('show');
    $('.content-3').addClass('hide');
    $('.content-3').removeClass('show');
    $('.content-5').addClass('hide');
    $('.content-5').removeClass('show');
    $('.content-6').addClass('hide');
    $('.content-6').removeClass('show');
  });

  $(".generoTargetClose").click (function (e) {
    e.preventDefault();
    $('.content-2').addClass('hide');
    $('.content-2').removeClass('show');
  });
  $(".estiloClose").click (function (e) {
    e.preventDefault();
    $('.content-3').addClass('hide');
    $('.content-3').removeClass('show');
  });
  $(".objetivosclose").click (function (e) {
    e.preventDefault();
    $('.content-5').addClass('hide');
    $('.content-5').removeClass('show');
  });
  $(".refclose").click (function (e) {
    e.preventDefault();
    $('.content-6').addClass('hide');
    $('.content-6').removeClass('show');
  });
  $(".mecanicaclose").click (function (e) {
    e.preventDefault();
    $('.content-4').addClass('hide');
    $('.content-4').removeClass('show');
  });
});

function updateNavStyle() {
  if ($(this).scrollTop() > 100) {
    $('.arrow-container').addClass('hide');
    $('.arrow-container').removeClass('show');
  } else {
    $('.arrow-container').removeClass('hide');
    $('.arrow-container').addClass('show');
  }

  if ($(this).scrollTop() > 1200) {
    $('.rpg-title').addClass('hide');
    $('.rpg-title').removeClass('show');
  } else {
    $('.rpg-title').removeClass('hide');
    $('.rpg-title').addClass('show');
  }

  if($(this).scrollTop() > 2000)
  {
    $('.health-hud').removeClass('hide');
    $('.health-hud').addClass('show');
    $('.skillbox').removeClass('hide');
    $('.skillbox').addClass('show');
  }
  else
  {
    $('.health-hud').removeClass('show');
    $('.health-hud').addClass('hide');
    $('.skillbox').removeClass('show');
    $('.skillbox').addClass('hide');
  }

  if($(this).scrollTop() > 3000)
  {
    $('.content-1').removeClass('hide');
    $('.content-1').addClass('show');
  }
  else
  {
    $('.content-1').removeClass('show');
    $('.content-1').addClass('hide');
    $('.content-2').removeClass('show');
    $('.content-2').addClass('hide');
    $('.content-3').removeClass('show');
    $('.content-3').addClass('hide');
    $('.content-4').removeClass('show');
    $('.content-4').addClass('hide');
    $('.content-5').removeClass('show');
    $('.content-5').addClass('hide');
    $('.content-6').removeClass('show');
    $('.content-6').addClass('hide');
  }
}