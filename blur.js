(function Blur(canvas) {

    let video = document.querySelector("video");
    let ctx = canvas.getContext("2d");
    let progress = document.getElementById("progress");

    let enabled = true;
    if(!ctx) {
        console.error("Browser doesn't support canvas! Falling back to static background...");
        enabled = false;
    }

    function drawFrame(w, h) {
        // draw blurred background
        ctx.filter = "blur(30px) brightness(0.5)";
        let blurHeight = video.videoHeight * w / video.videoWidth;
        ctx.drawImage(video, 0, (h - blurHeight) / 2, w, blurHeight);
    }

    function requestFrame() {
        if(enabled) {
            // update canvas size
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            // draw the blur background
            drawFrame(canvas.width, canvas.height);
        }
        // update time bar
        let p = Math.min(video.currentTime * 100 / video.duration, 100);
        progress.style.width = `${p}%`;
        // request next frame
        requestAnimationFrame(requestFrame);
    }
    requestFrame();


})(document.getElementById("blur"));