//grab elements from the DOM

let details = document.querySelectorAll(".accordion__details");
const plusSigns =  document.querySelectorAll(".accordion__icon");

//test area

//add a way to make each plus sign turn to a minus sign when clicked, then back to plus when clicked again

plusSigns.forEach((plus) => {
    //let details = document.querySelectorAll(".accordion__details");
    plus.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("plus sign e listener working");
    if (plus.textContent === "+") {
        plus.textContent = "-";
    } else {
        plus.textContent = "+"
        }
    })
            
})


    for (let i=0; i < details.length; i++) {
        plusSigns[i].addEventListener('click', function(e) {
        console.log("the details e listener worked!");
        details[i].style.backgroundColor = "pink";
    })
}