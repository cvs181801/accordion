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

//make it so the corresponding answer to the question expands down when the plus sign for that question is clicked.

    for (let i=0; i < details.length; i++) {
        plusSigns[i].addEventListener('click', function(e) {
            if (details[i].style.overflow === "hidden" || details[i].style.overflow === "") {
        console.log("the details e listener worked!");
        details[i].style.maxHeight = "75vh";
        details[i].style.overflow = "visible";
        details[i].style.backgroundColor = "lightGrey";
            } else {
            details[i].style.maxHeight = "0";
            details[i].style.overflow = "hidden";
            }
        //details[i].classList.remove = "accordion__shrink"; I couldn't get the toggle method to work within this for loop, why?
    })
}