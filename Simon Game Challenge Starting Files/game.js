var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;
$(document).keydown(function (e) { 
    if(!started){
        started = true;
        nextSequence();
    }
});

$(".btn").click(function(){
    var userChosencolour = $(this).attr("id");
    userClickedPattern.push(userChosencolour);
    makeSound(userChosencolour);
    animatePress(userChosencolour);    
    checkAnswer(userClickedPattern.length-1);
});


function makeSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);
    $("#"+randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomColour);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000);
        }
    }
    else{
        makeSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
           $("body").removeClass("game-over"); 
        },1000);
        $("h1").text("Game Over, Press Any Key to Restart");
        Restart();
    }        
}

function Restart(){
    level = 0;
    started = false;
    gamePattern = [];
}
 