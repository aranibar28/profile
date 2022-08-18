(function ($) {
  "use strict";

  $(document).ready(function () {
    // wow js init
    new WOW().init();

    // back to top
    $(document).on("click", ".back-to-top", function () {
      $("html,body").animate({ scrollTop: 0 }, 2000);
    });
  });

  $(window).on("load", function () {
    // preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(1000);

    // back to top
    var backtoTop = $(".back-to-top");
    backtoTop.fadeOut();

    // Cancel Preloader
    $(document).on("click", ".cancel-preloader a", function (e) {
      e.preventDefault();
      $("#preloader").fadeOut(2000);
    });
  });

  $(window).on("scroll", function () {
    //back to top show/hide
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }

    // sticky menu activation
    if ($(window).scrollTop() >= 1) {
      $(".navbar-area").addClass("navbar-area-fixed");
    } else {
      $(".navbar-area").removeClass("navbar-area-fixed");
    }
  });
})(jQuery);

const init_carrousel = () => {
  $(".owl-one").owlCarousel({
    loop: true,
    autoplay: true, //true if you want enable autoplay
    autoPlayTimeout: 1000,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 4,
      },
      767: {
        items: 4,
      },
      768: {
        items: 8,
      },
      1200: {
        items: 12,
      },
    },
  });

  $(".owl-two").owlCarousel({
    loop: true,
    autoplay: true, //true if you want enable autoplay
    autoPlayTimeout: 1000,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    rtl: true,
    responsive: {
      0: {
        items: 4,
      },
      767: {
        items: 4,
      },
      768: {
        items: 8,
      },
      1200: {
        items: 12,
      },
    },
  });
};

const init_gallery = () => {
  var $Container = $(".gallery-masonry");
  if ($Container.length > 0) {
    $(".gallery-masonry").imagesLoaded(function () {
      var festivarMasonry = $Container.isotope({
        itemSelector: ".masonry-item", // use a separate class for itemSelector, other than .col-
        masonry: {
          gutter: 0,
        },
      });
      $(document).on("click", ".gallery-menu li", function () {
        var filterValue = $(this).attr("data-filter");
        festivarMasonry.isotope({
          filter: filterValue,
        });
      });
    });
    $(document).on("click", ".gallery-menu li", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  }

  function riyaqas_image_popup(selector) {
    if ($(selector).length) {
      $(selector).magnificPopup({
        delegate: "a",
        type: "image",
        gallery: { enabled: true },
        removalDelay: 500,
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim"
            );
            this.st.mainClass = this.st.el.attr("data-effect");
          },
        },
        closeOnContentClick: true,
        midClick: true,
      });
    }
  }
  /* ------- Gallery image Popup--------- */
  riyaqas_image_popup(".gallery-masonry .masonry-item");
};
