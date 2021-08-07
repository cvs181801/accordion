//grab elements from the DOM

const details = document.querySelector(".accordion__details");
const plusSign =  document.querySelector(".accordion__icon");


for (let i=0; i < details.clientHeight; i++) {
    plusSign.addEventListener('click', function(e) {
        details.style.height = "auto";
        details.style.overflow = "auto";
    })
}