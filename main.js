$("#eye").click(() => {
  if ($("#password").attr("type") === "password") {
    $("#password").attr("type", "text");
  } else {
    $("#password").attr("type", "password");
  }
});

$("#sign-up").click(() => {
  $("#login").css("display", "none");
  $("#sign-up-1").css("display", "block");
});

$("#next-1").click(() => {
  $("#sign-up-1").css("display", "none");
  $("#sign-up-2").css("display", "flex");
});

$("#final").click(() => {
  $("#sign-up-2").css("display", "none");
  $(".container").css({
    "background-image": "url(./images/bg-img.png)",
    "background-size": "135%",
  });
  $("h6").css("color", "white");
  $("#code-box").css("display", "flex");

  // const publicKey = "oqZzC7iSgjF9q30hd";
  // const serviceID = "service_zj3w7s2";
  // const templateID = "template_yj2lywr";

  // emailjs.init(publicKey);

  // const params = {
  //   code: random,
  // };

  // emailjs.send(serviceID, templateID, params).then(
  //   (res) => {
  //     random = "";
  //     console.log(res);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  var start = 60;
  setInterval(() => {
    if(start==0){
      
    }
    start--
    $("#timer").html(`0:${start}`)
  }, 1000);

});

$("#submit").click(() => {
  $("#code-box").css("display", "none");
  $(".container").css("background-image", "none");
  $("h6").css("color", "black");
  $("#success-box").css("display", "flex");
});

$("#login-btn").click(() => {
  $("#success-box").css("display", "none");
  $("#login").css("display", "block");
});

setInterval(() => {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var time =
    (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min);
  $("#current-time").html(`${time}`);
}, 1000);

// console.log($("#num").value)

var random = Math.round(Math.random() * 9000 + 1000);
console.log(random);


