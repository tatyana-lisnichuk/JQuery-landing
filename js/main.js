"use strict";
$(document).ready(function () {
  // tabs
  $('.card').on('click', function () {
    let currentTab = $(this).parent().index();

    $(".card").removeClass("card-active");
    $(this).addClass('card-active');
    $(".tab-content").removeClass("active");
    $(".tab-content").eq(currentTab).addClass("active");
  });
  // menu hamburger
  $(".hamburger").on('click', function () {
    $(".head__menu").toggle();
  });
$(".menu-close").on('click', function () {
  $(".head__menu").hide();
});
  
  // Parallax
  let scene = document.getElementById("scene");
  let parallaxInstance = new Parallax(scene);

// slider

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView:3,
  loop: true,
  stopInLastSlide: false,
  autoplay: {
    delay:2000
  }

});
    //Validation
  $.validator.addMethod('regex', function (value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
  }, 'Please check your input');
  
  $("form").validate({
    rules: {
      firstName: {
        required: true,
        regex: "[A-Za-z]{1,32}"//регулярное выражение для валидации формы
      },
      phoneNumber: {
        digits: true,
        required: true,
        minlength: 10,
        maxlength: 11,
        regex: "[0-9]+"//регулярное выражение для телефона
      }
    },
    messages: {
      firstName: "Введите имя правильно",
      phoneNumber: "Введите ваш номер"
    }
  });


});

  // Map
    let map;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat:  50.4536,
          lng: 30.5164
        },
        zoom: 8,
      });
    }
