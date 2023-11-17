$(function () {
  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");
  const body = document.querySelector(".scroll");

  burger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("hidden");
  }
  $(document).ready(function () {
    $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate(
        {
          scrollTop: top,
        },
        1000
      );
    });
  });

  $(".menu__link").on("click", function (e) {
    e.preventDefault;
    $(".menu__link").removeClass("active");
    $(this).addClass("active");

    $(".menu").removeClass("active");
    $(".burger-menu").removeClass("active");
    $("body").removeClass("hidden");
  });
});
