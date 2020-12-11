(function Video(video, ind) {

    // add click listener
    video.onclick = () => {
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    // add play/pause listeners
    video.onpause = () => {
        ind.style.visibility = "visible";
    };
    video.onplay = () => {
        ind.style.visibility = "hidden";
    };

    // try to autoplay the video
    if(video.paused) {
        video.play().catch((e) => {
            console.log("Failed to autplay!\n" + e);
        });
    }

})(
    document.querySelector("video"),
    document.getElementById("play-btn")
);