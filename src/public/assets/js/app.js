$(document).ready(function () {
  // Enable tooltip and popover
  $("body").tooltip({ selector: "[data-toggle=tooltip]" });
  $('[data-toggle="popover"]').popover();

  $(".card-img-top").click(function () {
    const image = $(this).attr("src");
    const imageName = $(this).attr("alt");

    $("#image").attr("src", image);
    $(".image_name").html(imageName);
    $(".btn-download").attr("href", image).attr("download", "");
  });
});
