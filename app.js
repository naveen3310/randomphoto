
function mypics() {
  var randomImg = Math.floor(Math.random() * 21) + 1;

  var randomImg2 = Math.floor(Math.random() * 5) + 1;
  var url = "images/gima/" + randomImg + ".jpg";
  var url2 = "images/somenudes/" + randomImg2 + ".png";
  var url3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnV0kR8cc2XwFoO5XbEgdozY02bPs7kC0yw&usqp=CAU";
  $(document).ready(function () {
    $(`<img src='${url}'>`).appendTo("#container");
    $(`<img src='${url2}'>`).appendTo("#container2");
    $(`<img src='${url3}'>`).appendTo("#container3");
    

  
    
  });
}
