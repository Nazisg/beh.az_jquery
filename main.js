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

var random 

const publicKey = "oqZzC7iSgjF9q30hd";
const serviceID = "service_zj3w7s2";
const templateID = "template_yj2lywr";

emailjs.init(publicKey);

const params = {
  code: random,
};
var key
var keysArr = [];
var userCode;
$("#final").click(() => {
  $("#sign-up-2").css("display", "none");
  $(".container").css({
    "background-image": "url(./images/bg-img.png)",
    "background-size": "135%",
  });
  $("h6").css("color", "white");
  $("#code-box").css("display", "flex");
  $("svg path").css("fill", "white");
   random = Math.round(Math.random() * 9000 + 1000);
  console.log(random);
  
  // emailjs.send(serviceID, templateID, params).then(
  //   (res) => {
      // $("#submit").click(() => {
      //   console.log(`random: ${random}, userCode: ${userCode}`);
      //   if (random === userCode && start>0) {
      //     $("#code-box").css("display", "none");
      //     $(".container").css("background-image", "none");
      //     $("h6").css("color", "black");
      //     $("#success-box").css("display", "flex");
      //     $("svg path").css("fill", "black");
      //   } else {
      //     alert("yalnis");
      //   }
      // });
  //     // random = "";
  //     console.log(res);

  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  // random = "";
 
  $("#submit").click(() => {
    for (let i = 0; i < $(".input-code").length; i++) {
      inputValue = $(".input-code")[i].value
      console.log($(".input-code")[i].value);
   if(keysArr.length<4){
    keysArr.push(inputValue);
  }
  userCode = Number(keysArr.join(""))
  console.log(keysArr)
  console.log(userCode)

    }
   
    console.log(`random: ${random}, userCode: ${userCode}`);
    if (random === userCode && start>0) {
      $("#code-box").css("display", "none");
      $(".container").css("background-image", "none");
      $("h6").css("color", "black");
      $("#success-box").css("display", "flex");
      $("svg path").css("fill", "black");
    } else {
      alert("yalnis");
    }

      setInterval(oneTimer, 1000);
      keysArr=[]
  });
  $(".input-code").val("")
 

});

var start = 20;

function oneTimer() {
  if (start == 0) {
    start = 0;
  } else {
    start--;
  }
  $("#timer").html(`0:${start < 10 ? "0" + start : start}`);
}

$("#code-text").click(() => {
   random = Math.round(Math.random() * 9000 + 1000);
console.log(random);

  // emailjs.send(serviceID, templateID, params).then(
  //   (res) => {
      $("#submit").click(() => {
        for (let i = 0; i < $(".input-code").length; i++) {
          inputValue = $(".input-code")[i].value
          console.log($(".input-code")[i].value);
       if(keysArr.length<4){
        keysArr.push(inputValue);
      }
      userCode = Number(keysArr.join(""))
      console.log(keysArr)
      console.log(userCode)
    
        }
        console.log(`random: ${random}, userCode: ${userCode}`);
        if (random === userCode && start>0) {
          $("#code-box").css("display", "none");
          $(".container").css("background-image", "none");
          $("h6").css("color", "black");
          $("#success-box").css("display", "flex");
          $("svg path").css("fill", "black");
        } else {
          alert("yalnis");
        }
        keysArr=[]
      });
      // random = "";
    //   console.log(res);

    // },
    // (error) => {
    //   console.log(error);
    // }
  // );
  start = 20;
  if (start == 0) {
    setInterval(oneTimer, 1000);
    
  }
  $(".input-code").val("")
  userCode=""
  
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

var keysArr = [];
var userCode;

$(".keys").click((e) => {
   key = e.target.innerHTML;
  for (let i = 0; i < $(".input-code").length; i++) {
    // console.log($(".input-code")[i].value);
    if ($(".input-code")[i].value === "") {
      $(".input-code")[i].value = key
      // $(".input-code")[i+1].focus()
      break
    }
  }
});

document.addEventListener("keydown",(e)=>{
  if (!isNaN(e.key)) {
    var key = e.key;
    for (let i = 0; i < $(".input-code").length; i++) {
      // console.log($(".input-code")[i].value);
      if ($(".input-code")[i].value === "") {
        $(".input-code")[i].value = key
        // $(".input-code")[i+1].focus()
        break
      }
    }
  } else if (e.key === 'Backspace') {
    for (let i = $(".input-code").length - 1; i >= 0; i--) {
      // console.log($(".input-code")[i].value)
      if ($(".input-code")[i].value !== "") {
        $(".input-code")[i].value = ""
        // $(".input-code")[i+1].focus()
        break
      }
    }
  }
})

$("#delete").click(()=>{
  for (let i = $(".input-code").length - 1; i >= 0; i--) {
    // console.log($(".input-code")[i].value)
    if ($(".input-code")[i].value !== "") {
      $(".input-code")[i].value = ""
      // $(".input-code")[i+1].focus()
      break
    }
  }

})
