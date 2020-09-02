
function fade(element) {
    var id = document.getElementById(element);

        if(id.up === null || id.up === false) {
            fadeIn(id);
        } else {
            fadeOut(id);
        }
}

function fadeIn(element) { 
    setTimeout( show, 200, element); 
    // setInterval( function () {show(element);}, 200); 
    // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);

} 

function fadeOut(element) {
    setTimeout( hidden, 200,element); 
    // setInterval(function() {hidden(element);}, 200);
    // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);

}

function show(element) { 
    // var body = document.getElementById(element); 
    var body = element; 
    console.log(element)
    opacity = Number(window.getComputedStyle(element) 
                     .getPropertyValue("opacity")); 
    console.log(opacity)
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        element.up = true;
        clearInterval(intervalID); 
    } 
} 

function hidden(element){
    // var body = document.getElementById(element); 
    var body = element;
    console.log(element)
    opacity = Number(window.getComputedStyle(body) 
                     .getPropertyValue("opacity")); 
    console.log(opacity)
    if (opacity != 0) { 
        opacity = opacity - 0.1; 
        body.style.opacity = opacity 
    } else { 
        element.up = false;
        clearInterval(intervalID); 
    } 
}