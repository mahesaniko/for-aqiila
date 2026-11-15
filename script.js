// =====================================
// 1. DEKORASI: HATI, BINTANG, DAN AWAN
// =====================================

const heartSymbols = ["♡", "♥", "💕", "💗", "୨୧"];

function createDecorations(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");

        heart.innerHTML = heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-40px";
        heart.style.fontSize = (12 + Math.random() * 20) + "px";
        heart.style.color = "rgba(255,255,255,0.8)";
        heart.style.animation =
            `floatHeart ${8 + Math.random() * 10}s linear infinite`;
        heart.style.animationDelay = Math.random() * 10 + "s";

        container.appendChild(heart);
    }

    for (let i = 0; i < 35; i++) {
        const star = document.createElement("span");

        star.innerHTML = "✦";
        star.style.position = "absolute";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.fontSize = (6 + Math.random() * 12) + "px";
        star.style.color = "white";
        star.style.opacity = "0.7";
        star.style.animation =
            `twinkle ${1 + Math.random() * 3}s ease-in-out infinite alternate`;
        star.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(star);
    }

    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement("div");

        cloud.innerHTML = "☁";
        cloud.style.position = "absolute";
        cloud.style.left = Math.random() * 90 + "%";
        cloud.style.top = (10 + Math.random() * 75) + "%";
        cloud.style.fontSize = (45 + Math.random() * 45) + "px";
        cloud.style.color = "rgba(255,255,255,0.35)";
        cloud.style.filter = "blur(1px)";
        cloud.style.animation =
            `moveCloud ${15 + Math.random() * 15}s ease-in-out infinite alternate`;

        container.appendChild(cloud);
    }
}

createDecorations("welcomeHearts");
createDecorations("confessionHearts");
createDecorations("loveHearts");


// =====================================
// 2. ANIMASI DEKORASI
// =====================================

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `
@keyframes floatHeart {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }
    15% { opacity: 0.8; }
    85% { opacity: 0.7; }
    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes twinkle {
    from {
        opacity: 0.2;
        transform: scale(0.7);
    }
    to {
        opacity: 1;
        transform: scale(1.3);
    }
}

@keyframes moveCloud {
    from { transform: translateX(-25px); }
    to { transform: translateX(35px); }
}
`;

document.head.appendChild(animationStyle);


// =====================================
// 3. PINDAH HALAMAN
// =====================================

const welcomePage = document.getElementById("welcomePage");
const confessionPage = document.getElementById("confessionPage");
const lovePage = document.getElementById("lovePage");

const enterBtn = document.getElementById("enterBtn");

function showPage(page) {
    document.querySelectorAll(".page").forEach((item) => {
        item.classList.remove("active");
    });

    if (page) page.classList.add("active");
}

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        showPage(confessionPage);
    });
}
// =====================================
// 4. TOMBOL YES DAN NO
// =====================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reactionText = document.getElementById("reactionText");
const questionText = document.getElementById("questionText");

let noCount = 0;

const reactions = [
    "Yakin nih? 🥺",
    "Coba pikir lagi dongg 💗",
    "Masa iya kamu tegaaa? 😭",
    "Plisss donggg, pilih YES yaa 🥹💕"
];

if (noBtn) {
    noBtn.addEventListener("click", () => {
        noCount++;

       reactionText.textContent = reactions[noCount - 1];

reactionText.style.animation = "none";
void reactionText.offsetWidth;
reactionText.style.animation = "reactionPop 0.4s ease";

        // YES membesar perlahan
        if (noCount === 1) {
            yesBtn.style.transform = "scale(1.5)";
        } else if (noCount === 2) {
            yesBtn.style.transform = "scale(2.5)";
        } else if (noCount === 3) {
            yesBtn.style.transform = "scale(3)";
        }

        // Klik NO keempat
if (noCount === 4) {
    noBtn.style.display = "none";

    // Lepaskan YES dari container agar bisa memenuhi layar
    document.body.appendChild(yesBtn);

    // Aktifkan animasi layar penuh
    yesBtn.style.transform = "";
    yesBtn.classList.add("takeover");

    // Pertahankan pertanyaan di atas tombol YES
    const confessionContent =
        document.querySelector(".confession-content");

    confessionContent.style.zIndex = "10000";
    confessionContent.style.pointerEvents = "none";
}
    });
}


// =====================================
// 5. ANIMASI SETELAH MENEKAN YES
// =====================================

function celebrateAndShowLove() {
    console.log("YES BERHASIL DI KLIK");
    const transition = document.getElementById("heartTransition");

    if (!transition) {
        showPage(lovePage);
        animateLoveLetter();
        return;
    }

    // Tampilkan layar perayaan
    yesBtn.style.display = "none";

    transition.innerHTML = `
        <div class="celebration-content">
            <div class="big-heart">💗</div>
            <h1>YAYYY!!</h1>
            <h2>SHE SAID YES!</h2>
            <p>You just made me the happiest person ♡</p>
        </div>

        <div class="celebration-particles"></div>

        <div class="sunset-message">
            <span>and so, a little story begins...</span>
            <div>♡</div>
        </div>
    `;

    transition.style.display = "flex";
transition.style.position = "fixed";
transition.style.inset = "0";
transition.style.width = "100vw";
transition.style.height = "100vh";
transition.style.zIndex = "999999";
transition.style.alignItems = "center";
transition.style.justifyContent = "center";
transition.style.overflow = "hidden";
transition.style.background =
    "linear-gradient(135deg, #ffc9df, #e6c9f5, #fbd9e9)";
transition.style.opacity = "1";
transition.style.pointerEvents = "auto";

transition.classList.remove("sunset-mode", "fade-away");

    const particles = transition.querySelector(".celebration-particles");

    // Membuat hati yang meledak dari tengah layar
    for (let i = 0; i < 65; i++) {
        const heart = document.createElement("span");

        heart.textContent = heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

        heart.className = "burst-heart";

        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 380;

        heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
        heart.style.setProperty("--delay", `${Math.random() * 0.5}s`);
        heart.style.setProperty("--size", `${24 + Math.random() * 30}px`);

        particles.appendChild(heart);
    }

    // Setelah perayaan, berubah menjadi suasana senja
    setTimeout(() => {
        transition.classList.add("sunset-mode");
    }, 3200);

    // Tampilkan halaman surat
    setTimeout(() => {
        transition.classList.add("fade-away");

        setTimeout(() => {
            transition.style.display = "none";
            transition.classList.remove("fade-away", "sunset-mode");
            showPage(lovePage);
            animateLoveLetter();
        }, 1000);

    }, 5600);
}

if (yesBtn) {
    yesBtn.addEventListener("click", celebrateAndShowLove);
}

function animateLoveLetter() {
    const letter = document.querySelector(".letter");

    if (!letter) {
        console.log("Elemen .letter tidak ditemukan!");
        return;
    }

    letter.classList.remove("show-letter");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            void letter.offsetWidth;
            letter.classList.add("show-letter");

            console.log("ANIMASI SURAT DIMULAI!");
        });
    });
}
// MINI MUSIC PLAYER
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const musicProgress = document.getElementById("musicProgress");
const musicCurrent = document.getElementById("musicCurrent");
const musicDuration = document.getElementById("musicDuration");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

if (backgroundMusic && musicToggle) {
    musicToggle.addEventListener("click", async () => {
        if (backgroundMusic.paused) {
            try {
                await backgroundMusic.play();
            } catch (error) {
                musicStatus.textContent = "Music couldn't play";
                console.error("Audio playback error:", error);
            }
        } else {
            backgroundMusic.pause();
        }
    });

    backgroundMusic.addEventListener("play", () => {
        musicToggle.textContent = "Ⅱ";
        musicToggle.setAttribute("aria-label", "Pause music");
        musicStatus.textContent = "Now playing ♡";
    });

    backgroundMusic.addEventListener("pause", () => {
        musicToggle.textContent = "▶";
        musicToggle.setAttribute("aria-label", "Play music");
        musicStatus.textContent = "Paused";
    });

    backgroundMusic.addEventListener("loadedmetadata", () => {
        musicDuration.textContent = formatTime(backgroundMusic.duration);
    });

    backgroundMusic.addEventListener("timeupdate", () => {
        musicCurrent.textContent = formatTime(backgroundMusic.currentTime);

        if (Number.isFinite(backgroundMusic.duration) && backgroundMusic.duration > 0) {
            musicProgress.value =
                (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
        }
    });

    musicProgress.addEventListener("input", () => {
        if (Number.isFinite(backgroundMusic.duration)) {
            backgroundMusic.currentTime =
                (musicProgress.value / 100) * backgroundMusic.duration;
        }
    });
}