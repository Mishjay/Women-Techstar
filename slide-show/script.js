const images = ["https://plus.unsplash.com/premium_photo-1664640458482-23df72d8b882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dash.com/photos/an-abstract-image-of-a-flower-and-leaves-J1-FS6kVSc4",
"https://images.unsplash.com/photo-1704972841788-86fac20fc87e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1704118095891-92e7739fcaa9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1682686581660-3693f0c588d2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1705113165390-2ccce65cf0ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
let currentIndex = 0;
let totalImage = images.length;

function previousImage() {
 if (currentIndex === 0) {
 currentIndex = totalImage - 1;
 } else {
 currentIndex -= 1;
 }
}
function nextImage() {
 if (currentIndex === totalImage - 1) {
 currentIndex = 0;
 } else {
     currentIndex+=1;
}
}

const leftButton = document.querySelector("button.left");
const rightButton = document.querySelector("button.right");
 
const main = document.querySelector("main");
 
const slideshowContainer = document.getElementById('slideshow-container');
 
 
function updateSlideshow() {
    slideshowContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}
 
function changeto() {
    main.style.backgroundImage = `url(${images[currentIndex]})`;
}
 
leftButton.addEventListener("click", function() {
    previousImage();
    changeto();
  });
 
  rightButton.addEventListener("click", function() {
    nextImage();
    changeto();
  });
 
 // Set up a timer to update the slideshow at regular intervals
  setInterval(function() {
    updateSlideshow();
    changeto();
  }, 1000);