function makeSound(key)
{
    var str= " ";
    switch (key) 
    {
        case "w":
             str ="tom-1";           
            break;
        case "a":
             str="tom-2";
            break;
        case "s": 
             str="tom-3"
            break;
        case "d": 
             str="tom-4";
            break;
        case "j": 
             str="crash";
            break;
        case "k": 
             str="kick-bass";
            break;
        case "l": 
             str="snare";
            break;    
    }
    var audio = new Audio("sounds/"+str+".mp3");
    audio.play();
}

function addAnimation(currentKey)
{
    var activeBtn = document.querySelector("."+ currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){activeBtn.classList.remove("pressed")},100);
}

//upon pressing the button
const btnArr = document.querySelectorAll("button");
for(var i = 0 ; i<btnArr.length ; i++)
    btnArr[i].addEventListener("click",function(){
        makeSound(this.innerText);
        addAnimation(this.innerText);
});

//upon pressing the key
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);
});
      