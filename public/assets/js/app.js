(function($){
  "use strict";

  $(window).on('load', function(){

     //preloader
     $(".preloader").delay(300).animate({
        "opacity" : "0"
        }, 500, function() {
        $(".preloader").css("display","none");
    });

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("animated fadeInDown menu-fixed");
      } else {
        $(".header").addClass("animated fadeInDown menu-fixed");
      }
    });
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".header").removeClass("animated fadeInDown menu-fixed");
    } else {
      $(".header").addClass("animated fadeInDown menu-fixed");
    }

    // mobile menu js
    $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
      let element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
      }
      else {
        element.addClass("open");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
      }
    });

    // new WOW().init();
      
    // lightcase plugin init
    $('a[data-rel^=lightcase]').lightcase();

    let img=$('.bg_img');
    img.css('background-image', function () {
      let bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $('select').niceSelect();

    $('.winner-slider').slick({
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-long-arrow-alt-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-long-arrow-alt-left"></i></div>',
    });

    $('.testimonial-slider').slick({
      autoplay: true,
      speed: 700,
      arrows: true,
      dots: false,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
    });

    $('.contest-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-long-arrow-alt-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-long-arrow-alt-left"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.contest-cart__thumb-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.contest-cart__nav-slider'
    });

    $('.contest-cart__nav-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.contest-cart__thumb-slider',
      dots: false,
      centerMode: true,
      nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });


    $('.contest-details__thumb-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.contest-details__nav-slider'
    });

    $('.contest-details__nav-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.contest-details__thumb-slider',
      dots: false,
      centerMode: true,
      nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });


    // small-post-slider 
    $('.small-post-slider').slick({
      infinite: false,
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
    });

    // small-post-slider 
    $('.client-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      speed: 700,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    // draw-ticket-slider 
    $('.draw-ticket-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      speed: 700,
      arrows: true,
      dots: false,
      prevArrow: '<div class="prev"><i class="las la-long-arrow-alt-left"></i></div>',
      nextArrow: '<div class="next"><i class="las la-long-arrow-alt-right"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    // date picker js 
    $('.datepicker-here').datepicker();

    // Select on pressing COPY
    var els_copy = document.querySelectorAll("[data-copy]");
    for (var i = 0; i < els_copy.length; i++) {
      var el = els_copy[i];
      el.addEventListener("submit", function(e) {
        e.preventDefault();
        var text = e.target.querySelector('input[type="text"]').select();
        document.execCommand("copy");
      });
    }

    // Select all text when pressing inside text field
    var els_selectAll = document.querySelectorAll("[data-click-select-all]");
    for (var i = 0; i < els_selectAll.length; i++) {
      var el = els_selectAll[i];
      el.addEventListener("click", function(e) {
        e.target.select();
      });
    }

    // progress bar
    $(".progressbar").each(function(){
      $(this).find(".bar").animate({
        "width": $(this).attr("data-perc")
      },3000);
    });

    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#imagePreview').css('background-image', 'url('+e.target.result +')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function() {
      readURL(this);
    });

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-down"><i class="las la-minus"></i></div><div class="quantity-button quantity-up"><i class="las la-plus"></i></div></div>').insertAfter('.quantity input');
      jQuery('.quantity').each(function () {
          var spinner = jQuery(this),
              input = spinner.find('input[type="number"]'),
              btnUp = spinner.find('.quantity-up'),
              btnDown = spinner.find('.quantity-down'),
              min = input.attr('min'),
              max = input.attr('max');

          btnUp.on('click', function () {
              var oldValue = parseFloat(input.val());
              if (oldValue >= max) {
                  var newVal = oldValue;
              } else {
                  var newVal = oldValue + 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
          });

          btnDown.on('click', function () {
              var oldValue = parseFloat(input.val());
              if (oldValue <= min) {
                  var newVal = oldValue;
              } else {
                  var newVal = oldValue - 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
          });
    });

    // countdown plungin init
    var getDate = $('.clock').attr('data-clock');

    $('.clock').countdown(getDate, function(event) {
      $(this).html(event.strftime(''
        +'<div><span>%D</span><p>days</p></div>'
        +'<div><span>%H</span><p>hours</p></div>'
        +'<div><span>%M</span><p>minutes</p></div>'
        +'<div><span>%S</span><p>seconds</p></div>'));
    });


    var getDate = $('.clock2').attr('data-clock');
    $('.clock2').countdown(getDate, function(event) {
      $(this).html(event.strftime(''
        +'<div><span>%D</span><p>d</p></div>'
        +'<div><span>%H</span><p>h</p></div>'
        +'<div><span>%M</span><p>m</p></div>'
        +'<div><span>%S</span><p>s</p></div>'));
    });

    // lottery number select js 
    $('.lottery-single__number li').on('click', function(){
      $(this).toggleClass('active');
    });


    $( function() {
      let mainContainer = $('#slider-range-min-one');
      let minValue = mainContainer.attr('data-value');
      let maxValue = mainContainer.attr('data-maxValue');
      
      mainContainer.slider({
        range: "min",
        value: minValue,
        min: 0,
        max: maxValue,
        slide: function( event, ui ) {
          $( "#basic-amount" ).val(ui.value );
        }
      });
      $( "#basic-amount" ).val(mainContainer.slider( "value" ) );
    } );

  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
  });

  $('.theme-switcher__icon').on('click', function(){
    $('.theme-switcher').toggleClass('active');
  });

})(jQuery);