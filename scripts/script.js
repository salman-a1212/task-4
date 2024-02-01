const poster = document.querySelector(".poster");
const playIcon = document.getElementById("play-icon");
const modalClose = document.getElementsByClassName("btn-close");
playIcon.addEventListener("click", removePoster);

function removePoster() {
  poster.classList.add("poster-active");
  document.querySelector("#myIframe").src += "?autoplay=1";
  playIcon.style.display = "none";
}

function showPoster() {
  playIcon.style.display = "block";
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "inline-block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// slick slider
$(".slider-row").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        dots: false,
      },
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();

jQuery.noConflict();
(function ($) {
  $(function () {
    var toggleSwitch = $("#js-pricing-switch input");

    (function () {
      $(toggleSwitch).change(function () {
        // Change prices for plans
        togglePriceContent();

        // Toggle monthly/yearly style
        $(".js-switch-label-monthly, .js-switch-label-yearly").toggleClass(
          "active"
        );
      });
    })();

    function togglePriceContent() {
      if ($(toggleSwitch).is(":checked") === true) {
        // if toggle is yearly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-yearly"));
        });
      } else {
        // if toggle is monthly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-monthly"));
        });
      }
    }
  });
})(jQuery);
