var numberofdrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrumbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerhtml = this.innerHTML;
        playSound(innerhtml);
        buttonAnimation(innerhtml);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});
document.addEventListener("keypress", function(event) {
    if (["w", "a", "s", "d", "j", "k", "l"].includes(event.key)) {
        playSound(event.key);
        buttonAnimation(event.key);
        bAnimation(event.key);
    }
});

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keypress",function(event){
    console.log(event);
});

/*function bAnanimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
}*/


