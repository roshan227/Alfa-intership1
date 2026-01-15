const playBtn = document.getElementById("play");
let playing = false;

playBtn.onclick = () => {
    playing = !playing;
    playBtn.textContent = playing ? "⏸" : "▶";
};
