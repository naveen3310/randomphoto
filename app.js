function mypics() {
  var randomImg = Math.floor(Math.random() * 21) + 1;

  var randomImg2 = Math.floor(Math.random() * 5) + 1;
  var url = "images/gima/" + randomImg + ".jpg";
  var url2 = "images/somenudes/" + randomImg2 + ".png";
  var url3 = "images/mithi/1.jpg";
  $(document).ready(function () {
    $(`<img src='${url}'>`).appendTo("#container");
    $(`<img src='${url2}'>`).appendTo("#container2");
    $(`<img src='${url3}'>`).appendTo("#container3");
  });
}
