var video=document.querySelectorAll('video');
video.forEach(play=> play.addEventListener('click',()=>{

    play.classList.toggle('active');

    if(play.paused){
        play.play();

    }
    else{
        play.pause();
        // play.currentTime=0;
    }
}));


document.addEventListener("DOMContentLoaded", function() {
const videos = document.querySelectorAll("video");

videos.forEach(video => {
video.addEventListener("play", function() {
// Pause all other videos
videos.forEach(otherVideo => {
if (otherVideo !== video) {
  otherVideo.pause();
}
});
});
});
});

document.addEventListener("DOMContentLoaded", function() {
const videoZoom = document.querySelectorAll(".video");

videos.forEach(video => {
video.addEventListener("click", function() {
// Remove zoomed class from all videos
videoZoom.forEach(otherVideo => {
if (otherVideo !== video) {
  otherVideo.classList.remove("zoomed");
}
});

// Toggle zoomed class for the clicked video
video.classList.toggle("zoomed");
});
});
});