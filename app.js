function mypics() {
  var newArray = [
    "https://infosaurs.com/images/blog_master/gima-ashi/gima%20ashi.jpg",
  ];
  var pusharray = $(".textareaa").val();

  newArray.push(pusharray);
  var valueofimg = newArray[Math.floor(Math.random() * newArray.length)];

  var randomImg = Math.floor(Math.random() * 21) + 1;

  var url = "images/gima/" + randomImg + ".jpg";

  $(document).ready(function () {
    $(`<img src='${url}'>`).appendTo("#container");

    $(`<img src='${valueofimg}'>`).appendTo("#container3");
  });
}
