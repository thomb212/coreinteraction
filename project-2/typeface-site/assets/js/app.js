// Allowing the user to type in each letter

var newWord = $(".word");
var newStage = $(".stage");
var wordNumber = 0;
var time = 0;
var overTime;
var stages = 0;
var multiplier = 1;
var newPosX = 1;
var newPosY;

$(window).click(function(event) {
  overTime = $(".stage").clone();

  var extraStage = "<div class='stage" + stages + "'></div>";
  $("body").append(extraStage);
  $(".stage" + stages).append(overTime);

  multiplier++;
  newPosY = multiplier * 15;

  if (event.clientX < newPosX) {
    newPosX = newPosX - 15;
  } else {
    newPosX = newPosX + 15;
  }

  $(".stage" + stages + " .stage").css("top", newPosY + "px");
  $(".stage" + stages + " .stage").css("left", newPosX + "px");

  // console.log(event.timeStamp);
  stages++;
});



$(window).keypress(function(event) {
  var newLetter;

  if (event.which == 97 || event.which == 65) {
    newLetter = $(".alphabet .a").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 98 || event.which == 66) {
    newLetter = $(".alphabet .b").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 99 || event.which == 67) {
    newLetter = $(".alphabet .c").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 100 || event.which == 68) {
    newLetter = $(".alphabet .d").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 101 || event.which == 69) {
    newLetter = $(".alphabet .e").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 102 || event.which == 70) {
    newLetter = $(".alphabet .f").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 103 || event.which == 71) {
    newLetter = $(".alphabet .g").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 104 || event.which == 72) {
    newLetter = $(".alphabet .h").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 105 || event.which == 73) {
    newLetter = $(".alphabet .i").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 106 || event.which == 74) {
    newLetter = $(".alphabet .j").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 107 || event.which == 75) {
    newLetter = $(".alphabet .k").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 108 || event.which == 76) {
    newLetter = $(".alphabet .l").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 109 || event.which == 77) {
    newLetter = $(".alphabet .m").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 110 || event.which == 78) {
    newLetter = $(".alphabet .n").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 111 || event.which == 79) {
    newLetter = $(".alphabet .o").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 112 || event.which == 80) {
    newLetter = $(".alphabet .p").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 113 || event.which == 81) {
    newLetter = $(".alphabet .q").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 114 || event.which == 82) {
    newLetter = $(".alphabet .r").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 115 || event.which == 83) {
    newLetter = $(".alphabet .s").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 116 || event.which == 84) {
    newLetter = $(".alphabet .t").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 117 || event.which == 85) {
    newLetter = $(".alphabet .u").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 118 || event.which == 86) {
    newLetter = $(".alphabet .v").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 119 || event.which == 87) {
    newLetter = $(".alphabet .w").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 120 || event.which == 88) {
    newLetter = $(".alphabet .x").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 121 || event.which == 89) {
    newLetter = $(".alphabet .y").clone();
    $(newWord).append(newLetter);
  }
  if (event.which == 122 || event.which == 90) {
    newLetter = $(".alphabet .z").clone();
    $(newWord).append(newLetter);
  }

  if (event.which == 32) {
    wordNumber = wordNumber + 1;
    newWord = $(".stage").append("<div class='word word" + wordNumber +
      "'></div>");
    newWord = $(".word" + wordNumber);
    $(newWord).append(newLetter);
  }

  // console.log(event.which);
});
