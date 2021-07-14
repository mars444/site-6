$(function () {

  $('.home__slider').slick({
    nextArrow: '<button type="button" class="slick_button slick-next fa fa-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick_button slick-prev  fa fa-chevron-left"></button>',
    autoplay: true,
    autoplaySpeed: 2000,

  });

  $('.ourmenu__slider').slick({
    nextArrow: '<button type="button" class="slick_button slick-next fa fa-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick_button slick-prev  fa fa-chevron-left"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,

        }
      },


    ]

  });
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('mobile')
  } else {
    document.body.classList.add('pc')
  }


  $(".menu-icon").click(function (e) {
    $(".menu").addClass('menu-active');
    $("body").addClass('lock');
    $(".menu-icon").addClass('menu-icon-active');
    $(".menu-icon-close").addClass('menu-icon-close-active');
  })


  const list = document.querySelectorAll('.week-nav-link')
  list.forEach(item => {
    item.addEventListener('click', (e) => {
      list.forEach(el => { el.classList.remove('week-nav-link-active'); });
      item.classList.add('week-nav-link-active')
    })
  })

  $(".features-click").click(function () {
    $(".features__list").toggleClass("features__list-active");
    $(".features-click-up").toggleClass("features-click-up-active");
    $(".features-click-down").toggleClass("features-click-down-noactive");
  });



  $(".menu-icon-close").click(function (e) {
    $(".menu").removeClass('menu-active');
    $("body").removeClass('lock');
    $(".menu-icon").removeClass('menu-icon-active');
    $(".menu-icon-close").removeClass('menu-icon-close-active');
  })
  $(".menu__list__item-link").click(function (e) {
    $(".menu").removeClass('menu-active');
    $("body").removeClass('lock');
    $(".menu-icon").removeClass('menu-icon-active');
    $(".menu-icon-close").removeClass('menu-icon-close-active');
  })


  const menuLinks = document.querySelectorAll('.menu__list__item-link');
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuClick);
    });
    function onMenuClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }

    }
  }



  $('.week-nav-link').click(function () {
    $('html, body').stop().animate({ scrollTop: $('.week-nav').offset().top - document.querySelector('header').offsetHeight }, 500);

  });


  $(".week-tabs-click").click(function () {
    $(".week-tabs-first").addClass("week-tabs-first-close");
  });

  $(".week-nav-link-first").click(function () {
    $(".week-tabs-first").removeClass("week-tabs-first-close");
  });



  var date = document.getElementById('date');
  var time = document.getElementById('time');
  var dateObj = new Date();
  date.value = dateObj.toISOString().slice(0,10)
  time.value = dateObj.getHours() + ':' + dateObj.getMinutes();

});
