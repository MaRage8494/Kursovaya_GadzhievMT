let textBlock = document.querySelector(".video");
let text = document.querySelector(".video .video_title");

function textToCenter(text) {
    text.style.left = (text.parentElement.clientWidth - text.clientWidth) / 4  + "px";
    text.style.top = (text.parentElement.clientHeight - text.clientHeight) / 1.5 + "px";
}

textToCenter(text);
