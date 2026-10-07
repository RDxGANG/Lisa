// ===== Elements =====
const loading = document.getElementById("loading");
const giftSection = document.getElementById("giftSection");
const birthdaySection = document.getElementById("birthdaySection");
const letterSection = document.getElementById("letterSection");
const gallerySection = document.getElementById("gallerySection");
const finalSection = document.getElementById("finalSection");
const successSection = document.getElementById("successSection");

const giftBox = document.getElementById("giftBox");
const nextBtn = document.getElementById("nextBtn");
const galleryBtn = document.getElementById("galleryBtn");
const finalBtn = document.getElementById("finalBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const typing = document.getElementById("typing");
const music = document.getElementById("music");
const hearts = document.getElementById("hearts");

// ===== Loading =====
setTimeout(() => {
    loading.classList.add("hidden");
    giftSection.classList.remove("hidden");
}, 2500);

// ===== Floating Hearts =====
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

// ===== Gift Open =====
giftBox.onclick = () => {

    giftSection.classList.add("hidden");
    birthdaySection.classList.remove("hidden");

    music.play().catch(() => {});

    typeText(
        "May your life always be filled with happiness, love, laughter and beautiful memories. ❤️"
    );
};

// ===== Typing Animation =====
function typeText(text) {

    let i = 0;

    typing.innerHTML = "";

    const timer = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }

    }, 45);

}

// ===== Navigation =====

nextBtn.onclick = () => {

    birthdaySection.classList.add("hidden");

    letterSection.classList.remove("hidden");

};

galleryBtn.onclick = () => {

    letterSection.classList.add("hidden");

    gallerySection.classList.remove("hidden");

};

finalBtn.onclick = () => {

    gallerySection.classList.add("hidden");

    finalSection.classList.remove("hidden");

};

// ===== Moving No Button =====
noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Also move on mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// ===== YES Button =====
yesBtn.onclick = () => {

    finalSection.classList.add("hidden");

    successSection.classList.remove("hidden");

    for (let i = 0; i < 250; i++) {

        setTimeout(createHeart, i * 20);

    }

    alert("❤️ I Love You SONJITA moina pakhi ❤️\n\nHappy Birthday My Princess SONJITA! 🎂🥰");

};
