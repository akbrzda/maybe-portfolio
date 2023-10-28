$(function () {
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

    $(".menu__list").removeClass("active");
  });
});
