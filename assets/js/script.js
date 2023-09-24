(function($) {
  ("use strict");

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");

      var HeaderHight = $(".main-header").height();
      if (windowpos >= HeaderHight) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  }

  var texts = document.getElementsByClassName("service-block_text");
  if (texts.length > 0) {
    for (let i = 0; i < texts.length; i++) {
      var str = texts[i].innerHTML;
      var truncated = str.substring(0, 60) + "...";
      texts[i].innerHTML = truncated;
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );

    //Dropdown Button
    $(".main-header li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
    });

    //Disable dropdown parent link
    $(".navigation li.dropdown > a").on("click", function (e) {
      e.preventDefault();
    });

    //Disable dropdown parent link
    $(
      ".main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a"
    ).on("click", function (e) {
      e.preventDefault();
    });

    $(".hamburger").on("click", function (e) {
      $(".about-sidebar").addClass("active");
    });

    $(".about-sidebar .close-button").on("click", function (e) {
      $(".about-sidebar").removeClass("active");
    });

    $(".about-sidebar .gradient-layer").on("click", function (e) {
      $(".about-sidebar").removeClass("active");
    });

    $(".xs-sidebar-group .close-button").on("click", function (e) {
      $(".xs-sidebar-group.info-group").removeClass("isActive");
    });
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    //$('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Hide / Show Submenu
    $(".mobile-menu .navigation > li.dropdown > .dropdown-btn").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $(this).parent("li").children("ul");

        if ($(target).is(":visible")) {
          $(this).parent("li").removeClass("open");
          $(target).slideUp(500);
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .removeClass("open");
          $(this)
            .parents(".navigation")
            .children("li.dropdown > ul")
            .slideUp(500);
          return false;
        } else {
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .removeClass("open");
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .children("ul")
            .slideUp(500);
          $(this).parent("li").toggleClass("open");
          $(this).parent("li").children("ul").slideToggle(500);
        }
      }
    );

    //3rd Level Nav
    $(
      ".mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn"
    ).on("click", function (e) {
      e.preventDefault();
      var targetInner = $(this).parent("li").children("ul");

      if ($(targetInner).is(":visible")) {
        $(this).parent("li").removeClass("open");
        $(targetInner).slideUp(500);
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown")
          .removeClass("open");
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown > ul")
          .slideUp(500);
        return false;
      } else {
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown")
          .removeClass("open");
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown > ul")
          .slideUp(500);
        $(this).parent("li").toggleClass("open");
        $(this).parent("li").children("ul").slideToggle(500);
      }
    });

    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
        $(".mobile-menu .navigation > li").removeClass("open");
        $(".mobile-menu .navigation li ul").slideUp(0);
      }
    );

    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $("body").removeClass("mobile-menu-visible");
        $(".mobile-menu .navigation > li").removeClass("open");
        $(".mobile-menu .navigation li ul").slideUp(0);
      }
    });
  }

  //Jquery Spinner / Quantity Spinner
  if ($(".qty-spinner").length) {
    $("input.qty-spinner").TouchSpin({
      verticalbuttons: true,
    });
  }

  //Typeit Text On Main Page
  if ($(".variable-text").length) {
    $(".variable-text").typeIt({
      strings: ["Merit"],
      speed: 650,
      breakLines: true,
      loop: true,
      autoStart: true,
    });
  }

  // Add Current Class Auto
  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-header .main-menu .navigation").length) {
    dynamicCurrentMenuClass($(".main-header .main-menu .navigation"));
  }

  //Add One Page nav
  if ($(".scroll-nav").length) {
    $(".scroll-nav ul").onePageNav();
  }

  //Custom Scroll Linsk / Sidebar
  if ($(".scroll-nav li a").length) {
    $(".scroll-nav li a").on("click", function (e) {
      e.preventDefault();
      $("body").removeClass("mobile-menu-visible");
    });
  }

  //Price Range Slider
  if ($(".price-range-slider").length) {
    $(".price-range-slider").slider({
      range: true,
      min: 0,
      max: 10000,
      values: [1000, 8000],
      slide: function (event, ui) {
        $("input.price-amount").val(ui.values[0] + " - " + ui.values[1]);
      },
    });

    $("input.price-amount").val(
      $(".price-range-slider").slider("values", 0) +
        " - $" +
        $(".price-range-slider").slider("values", 1)
    );
  }

  // Testimonial Section Four Carousel
  if ($(".shop-detail-section").length) {
    var thumbsCarousel = new Swiper(".shop-detail-section .thumbs-carousel", {
      spaceBetween: 0,
      slidesPerView: 4,
      direction: "vertical",
      breakpoints: {
        320: {
          spaceBetween: 20,
          direction: "horizontal",
          slidesPerView: 3,
        },
        640: {
          spaceBetween: 20,
          direction: "horizontal",
          slidesPerView: 4,
        },
        1023: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });

    var contentCarousel = new Swiper(".shop-detail-section .content-carousel", {
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsCarousel,
      },
    });
  }

  //Event Countdown Timer
  if ($(".time-countdown").length) {
    $(".time-countdown").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              '<div class="counter-column"><span class="count">%D</span>Days</div> ' +
              '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' +
              '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' +
              '<div class="counter-column"><span class="count">%S</span>Seconds</div>'
          )
        );
      });
    });
  }

  //Custom Seclect Box
  if ($(".custom-select-box").length) {
    $(".custom-select-box")
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass("overflow");
  }

  //Gallery Filters
  if ($(".filter-list").length) {
    $(".filter-list").mixItUp({});
  }

  if ($(".clock-wrapper").length) {
    (function () {
      //generate clock animations
      var now = new Date(),
        hourDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30,
        minuteDeg = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6,
        secondDeg = (now.getSeconds() / 60) * 360,
        stylesDeg = [
          "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
            hourDeg +
            "deg);}to{transform:rotate(" +
            (hourDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
            minuteDeg +
            "deg);}to{transform:rotate(" +
            (minuteDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-second{from{transform:rotate(" +
            secondDeg +
            "deg);}to{transform:rotate(" +
            (secondDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-hour{from{transform:rotate(" +
            hourDeg +
            "deg);}to{transform:rotate(" +
            (hourDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-minute{from{transform:rotate(" +
            minuteDeg +
            "deg);}to{transform:rotate(" +
            (minuteDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-second{from{transform:rotate(" +
            secondDeg +
            "deg);}to{transform:rotate(" +
            (secondDeg + 360) +
            "deg);}}",
        ].join("");
      document.getElementById("clock-animations").innerHTML = stylesDeg;
    })();
  }

  //Parallax Scene for Icons
  if ($(".parallax-scene-1").length) {
    var scene = $(".parallax-scene-1").get(0);
    var parallaxInstance = new Parallax(scene);
  }

  if ($(".paroller").length) {
    $(".paroller").paroller({
      factor: 0.2, // multiplier for scrolling speed and offset, +- values for direction control
      factorLg: 0.4, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
      type: "foreground", // background, foreground
      direction: "horizontal", // vertical, horizontal
    });
  }

  //Progress Bar
  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      { accY: 0 }
    );
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  // Odometer
  if ($(".odometer").length) {
    $(".odometer").appear();
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
      window.odometerOptions = {
        format: "d",
      };
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  //Main Slider Carousel
  if ($(".main-slider-carousel").length) {
    $(".main-slider-carousel").owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 6000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      rtl: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // Three Item Carousel
  if ($(".three-item-carousel").length) {
    $(".three-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      rtl: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Four Item Carousel
  if ($(".four-item-carousel").length) {
    $(".four-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      rtl: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      rtl: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Sponsors Carousel
  if ($(".sponsors-carousel").length) {
    $(".sponsors-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        600: {
          items: 3,
        },
        800: {
          items: 5,
        },
        1024: {
          items: 5,
        },
      },
    });
  }

  // Services Carousel
  if ($(".services-carousel").length) {
    $(".services-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      rtl: false,
      smartSpeed: 700,
      autoplay: 3000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  //Client Testimonial Carousel
  if (
    $(".testimonial-two .client-testimonial-carousel").length &&
    $(".testimonial-two .client-thumbs-carousel").length
  ) {
    var $sync3 = $(".client-testimonial-carousel"),
      $sync4 = $(".client-thumbs-carousel"),
      flag = false,
      duration = 500;

    $sync3
      .owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = false;
          $sync4.trigger("to.owl.carousel", [e.item.index, duration, true]);
          flag = false;
        }
      });

    $sync4
      .owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        navText: [
          '<span class="icon flaticon-left-arrow-2"></span>',
          '<span class="icon flaticon-right-arrow-1"></span>',
        ],
        dots: false,
        //center: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
            autoWidth: false,
          },
          400: {
            items: 1,
            autoWidth: false,
          },
          600: {
            items: 1,
            autoWidth: false,
          },
          1000: {
            items: 1,
            autoWidth: false,
          },
          1200: {
            items: 1,
            autoWidth: false,
          },
        },
      })

      .on("click", ".owl-item", function () {
        $sync3.trigger("to.owl.carousel", [$(this).index(), duration, true]);
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = true;
          $sync3.trigger("to.owl.carousel", [e.item.index, duration, true]);
          flag = false;
        }
      });
  }

  // Product Carousel Slider
  if (
    $(".services-page-carousel .image-carousel").length &&
    $(".services-page-carousel .thumbs-carousel").length
  ) {
    var $sync1 = $(".services-page-carousel .image-carousel"),
      $sync2 = $(".services-page-carousel .thumbs-carousel"),
      flag = false,
      duration = 500;

    $sync1
      .owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: false,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>',
        ],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = false;
          $sync2.trigger("to.owl.carousel", [e.item.index, duration, true]);
          flag = false;
        }
      });

    $sync2
      .owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>',
        ],
        dots: false,
        center: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
            autoWidth: false,
          },
          400: {
            items: 1,
            autoWidth: false,
          },
          600: {
            items: 1,
            autoWidth: false,
          },
          900: {
            items: 1,
            autoWidth: false,
          },
          1000: {
            items: 1,
            autoWidth: false,
          },
        },
      })

      .on("click", ".owl-item", function () {
        $sync1.trigger("to.owl.carousel", [$(this).index(), duration, true]);
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = true;
          $sync1.trigger("to.owl.carousel", [e.item.index, duration, true]);
          flag = false;
        }
      });
  }

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  // LightBox Image
  if ($(".lightbox-image").length) {
    $(".lightbox-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  // LightBox Video
  if ($(".lightbox-video").length) {
    $(".lightbox-video").magnificPopup({
      // disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%",
          },
        },
        srcAction: "iframe_src",
      },
      fixedContentPos: false,
    });
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        date: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }
  // appointment validation
  // if ($("#appointment-form").length) {
  //   $("#appointment-form").validate({
  //     rules: {
  //       username: {
  //         required: true,
  //       },
  //       email: {
  //         required: true,
  //         email: true,
  //       },
  //       phone: {
  //         required: true,
  //       },
  //       date: {
  //         required: true,
  //       },
  //       subject: {
  //         required: true,
  //       },
  //       message: {
  //         required: true,
  //       },
  //     },
  //   });
  // }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
  });
})(window.jQuery);