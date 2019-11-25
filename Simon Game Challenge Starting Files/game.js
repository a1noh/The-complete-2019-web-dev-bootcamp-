var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// console.log(randomChooseColor);
var level = 0
function nextSequence() {
    level++;
    userClickedPattern = [];
    $("h1").text("Level" +level);
    var a =  Math.floor(Math.random() * 4);
    var randomChooseColor = colors[a];
    gamePattern.push(randomChooseColor);
    $("#level-title").text("Level " + level);

    $("#" + randomChooseColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/"+randomChooseColor+".mp3");
    sound.play();

}

$(".btn").on("click", function(event){
        
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    $(this).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/"+userChosenColor+".mp3")
    sound.play();
    // console.log(gamePattern);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    
    
        if (userClickedPattern.length === gamePattern.length){
            console.log("success");

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
    }else{
        console.log("wrong");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("h1").text("Gamve over, press any key to restart")
          startover();
  }
      
}
    
function startover(){
    level = 0;
    gamePattern=[];
    userClickedPattern= [];
    started = false;
   
}

var started = false;
$(document).on("keydown", function(e){

    if (!started) {
        $("#level-title").text("Level " + "0");
        nextSequence();
        started = true;
    }
    

})


