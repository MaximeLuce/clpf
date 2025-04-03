// variables
let slide = document.querySelectorAll(".slides");
console.log(slide);
let currentElement;
let totalLength = slide.length;
let counter = 0;
// main
slide.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});
// button functions
function goBack() {
  counter--;
  slider();
}
function goNext() {
  counter++;
  slider();
}
function slideNext() {
  slide.forEach((slider, index) => {
    slider.style.transform = `translateX(-${counter * 100}%)`;
    document.getElementById("Next").disabled = false;
  });
}
function startagain() {
  slide.forEach((slider, index) => {
    slider.style.transform = `translateX(0%)`;
    counter = 0;
  });
}
//  slide function
function slider() {
  counter < totalLength ? slideNext() : startagain();
};
 
