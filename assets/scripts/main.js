$(document).ready(function () {

  jQuery(document).ready(function () {
    $(".phonenumber").mask("+998 (11) 111 11 11");
  });

  $(".hamburger-btn").click(function () {
    $(".nav-menu").addClass("show-it");
  });
  $(".close-nav-menu").click(function () {
    $(".nav-menu").removeClass("show-it");
  });
  $(".link-item").click(function () {
    $(".nav-menu").removeClass("show-it");
  });

  $(".education-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    mouseDrag: true,
    touchDrag: true
  });

  function bodyScrollingToggle() {
    document.body.classList.toggle('stop-scrolling')
  }

  let filterContainer = document.querySelector('.portfolio-filter'),
    portfolioItemsContainer = document.querySelector('.portfolio-items'),
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    popup = document.querySelector('.portfolio-popup'),
    prevBtn = document.querySelector('.pp-prev'),
    nextBtn = document.querySelector('.pp-next'),
    closeBtn = document.querySelector('.pp-close'),
    projectDetailsContainer = document.querySelector('.pp-details'),
    projectDetailsBtn = document.querySelector('.pp-project-details-btn'),
    itemIndex, slideIndex, screenshots;


  filterContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-item') && !event.target.classList.contains('active')) {
      filterContainer.querySelector('.active').classList.remove('outer-shadow', 'active');
      event.target.classList.add('active', 'outer-shadow');
      const target = event.target.getAttribute("data-target");
      portfolioItems.forEach(item => {
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          item.classList.add('hide');
          item.classList.remove('show');
        }
      })
    }
  })

  portfolioItemsContainer.addEventListener('click', (event) => {
    if (event.target.closest(".portfolio-item-inner")) {
      const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
      itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
      screenshots = portfolioItems[itemIndex].querySelector('.portfolio-item-img img').getAttribute("data-screenshots");
      screenshots = screenshots.split(',');
      if (screenshots.length === 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      slideIndex = 0;
      popupToggle();
      popupSlideShow();
      popupDetails();
    }
  })

  closeBtn.addEventListener('click', () => {
    popupToggle()
  })

  function popupToggle() {
    popup.classList.toggle('open');
    bodyScrollingToggle()
  }

  function popupSlideShow() {
    const imgSrc = screenshots[slideIndex];
    const popupImg = popup.querySelector('.pp-img');
    popup.querySelector('.pp-loader').classList.add('active');
    popupImg.src = imgSrc;
    popupImg.onload = () => {
      popup.querySelector(".pp-loader").classList.remove('active');
    }
  }
  nextBtn.addEventListener("click", () => {
    if (slideIndex === screenshots.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++
    }
    popupSlideShow();
    console.log("slideIndex: " + slideIndex);
  })
  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = screenshots.length - 1;
    } else {
      slideIndex--;
    }
    popupSlideShow();
    console.log("slideIndex: " + slideIndex);
  })

  function popupDetails(){
    if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
      projectDetailsBtn.style.display = "none";
    } projectDetailsBtn.style.display = "block";
    const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
    popup.querySelector(".pp-project-details").innerHTML = details;
    const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
    popup.querySelector(".pp-title h2").innerHTML = title;
    const category = portfolioItems[itemIndex].getAttribute('data-category');
    popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");

  }

  projectDetailsBtn.addEventListener("click", () => {
    popupDetailsToggle()
  })

  function popupDetailsToggle() {
    if (projectDetailsContainer.classList.contains('active')) {
      projectDetailsBtn.querySelector('i').classList.remove('fa-minus');
      projectDetailsBtn.querySelector('i').classList.add('fa-plus');
      projectDetailsContainer.classList.remove('active');
      projectDetailsContainer.style.maxHeight = 0 + 'px'
    } else {
      projectDetailsBtn.querySelector('i').classList.remove('fa-plus');
      projectDetailsBtn.querySelector('i').classList.add('fa-minus');
      projectDetailsContainer.classList.add('active');
      projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + 'px';
      popup.scrollTo(0, projectDetailsContainer.offsetTop);
    }
  }

  const styleSwitcherToggler = document.querySelector('.style-toggler');

  styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('show-it');
  })

  window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('show-it')) {
      document.querySelector('.style-switcher').classList.remove('show-it')
    }
  })

  const html = document.querySelector('html');
  const pink = document.querySelector('.color-1');
  const blue = document.querySelector('.color-2');
  const gold = document.querySelector('.color-3');
  const green = document.querySelector('.color-4');
  const red = document.querySelector('.color-5');

  pink.addEventListener('click', () => {
    html.classList = '';
  })
  blue.addEventListener('click', () => {
    html.classList = '';
    html.classList.add('blue');
  })
  gold.addEventListener('click', () => {
    html.classList = '';
    html.classList.add('gold');
  })
  green.addEventListener('click', () => {
    html.classList = '';
    html.classList.add('green');
  })
  red.addEventListener('click', () => {
    html.classList = '';
    html.classList.add('red');
  })

  const dayNight = document.querySelector('.day-night');
  dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');

  })
  window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
      dayNight.querySelector('i').classList.add('fa-sun');
    } else {
      dayNight.querySelector('i').classList.add('fa-moon')
    }
  })

































  $('.percent').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 8000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  $(".modal-btn").click(function () {
    $("nav").toggleClass("active-modal");
  });

  $('.tab-item').on('click', function () {
    $([$(this).parent('.tabs-nav').siblings('.tabs-content').children('.tab')[+$(this).data('num')]]).addClass("active").siblings().removeClass("active");
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".tabs-nav").click(function () {
    $(this).toggleClass("show");
  });



  $(".item").click(function () {
    $(".modal-video").addClass("active-modal");
  });

  $(".video_close").click(function () {
    $(".modal-video").removeClass("active-modal");
  });

  $('.ask').click(function (e) {
    e.preventDefault()
    $('.answer').not(this).slideUp(500);
    $('.ask').not(this).removeClass('active');
    $(this).toggleClass('active');
    $(this).next().stop(true).slideToggle(500);
  })

});








