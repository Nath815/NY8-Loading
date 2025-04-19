
const music = document.getElementById('bg-music');
const icon = document.getElementById('volume-icon');
const slider = document.getElementById('volume-slider');
const musicText = document.getElementById('music-control-text');

let isPlaying = true;
music.volume = 1;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        icon.src = "https://img.icons8.com/ios-filled/24/ffffff/mute.png";
        musicText.innerHTML = "Appuie sur <strong>ESPACE</strong> pour <u>relancer</u> la musique";
    } else {
        music.play();
        icon.src = "https://img.icons8.com/ios-filled/24/ffffff/high-volume.png";
        musicText.innerHTML = "Appuie sur <strong>ESPACE</strong> pour couper la musique";
    }
    isPlaying = !isPlaying;
}

icon.addEventListener('click', toggleMusic);

document.addEventListener('keydown', function (e) {
    if (e.code === "Space") {
        e.preventDefault();
        toggleMusic();
    }
});

slider.addEventListener('input', function () {
    music.volume = parseFloat(this.value);
    if (music.volume === 0 && isPlaying) {
        icon.src = "https://img.icons8.com/ios-filled/24/ffffff/mute.png";
    } else if (!isPlaying && music.volume > 0) {
        music.play();
        isPlaying = true;
        icon.src = "https://img.icons8.com/ios-filled/24/ffffff/high-volume.png";
        musicText.innerHTML = "Appuie sur <strong>ESPACE</strong> pour couper la musique";
    }
});

// Application des couleurs dynamiques depuis config.js
window.onload = () => {
    if (typeof config !== 'undefined' && config.colors) {
        document.getElementById("line1").style.color = config.colors.line1;
        document.getElementById("line2").style.color = config.colors.line2;
        document.getElementById("staffTitle").style.color = config.colors.staffTitle;
        document.querySelectorAll("#staff-list li").forEach(el => {
            el.style.color = config.colors.staffList;
        });
    }
};
