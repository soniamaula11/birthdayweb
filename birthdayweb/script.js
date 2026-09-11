/* =========================
   OPEN WEBSITE
========================= */

function openWebsite() {

    document
        .getElementById("home")
        .classList.add("hidden");

    document
        .getElementById("main")
        .classList.remove("hidden");

    confetti();

}



/* =========================
   SHOW SECTION
========================= */

function showSection(section) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.add("hidden");

    });

    document
        .getElementById(section)
        .classList.remove("hidden");

}



/* =========================
   MINI GAME
========================= */

let score = 0;

let time = 15;

let gameRunning = false;

let timer;


function startGame() {

    score = 0;

    time = 15;

    gameRunning = true;

    document
        .getElementById("score")
        .innerText = score;

    document
        .getElementById("time")
        .innerText = time;

    document
        .getElementById("game-result")
        .innerText = "";

    const heart =
        document.getElementById("heart");

    heart.style.display = "block";

    moveHeart();

    clearInterval(timer);

    timer = setInterval(function() {

        time--;

        document
            .getElementById("time")
            .innerText = time;

        if (time <= 0) {

            endGame();

        }

    }, 1000);

}


function catchHeart() {

    if (!gameRunning) return;

    score++;

    document
        .getElementById("score")
        .innerText = score;

    moveHeart();

}


function moveHeart() {

    const area =
        document.getElementById("game-area");

    const heart =
        document.getElementById("heart");

    const maxX =
        area.clientWidth - 55;

    const maxY =
        area.clientHeight - 55;

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    heart.style.left =
        x + "px";

    heart.style.top =
        y + "px";

}


function endGame() {

    gameRunning = false;

    clearInterval(timer);

    document
        .getElementById("heart")
        .style.display = "none";

    let message;

    if (score >= 15) {

        message =
            "Gila 😭 banyak banget hatinya!";

    } else if (score >= 8) {

        message =
            "Lumayan, masih sayang berarti ❤️";

    } else {

        message =
            "Cuma segitu? 😭 coba lagi.";

    }

    document
        .getElementById("game-result")
        .innerText =
            "Score kamu: " +
            score +
            " ❤️\n" +
            message;

}



/* =========================
   DANGER BUTTON
========================= */

let dangerCount = 0;


function pressDanger() {

    dangerCount++;

    const title =
        document.getElementById("dont-title");

    const text =
        document.getElementById("dont-text");


    if (dangerCount === 1) {

        title.innerText =
            "KAMU BENERAN PENCET 😭";

        text.innerText =
            "Padahal udah dibilang jangan.";

    }

    else if (dangerCount === 2) {

        title.innerText =
            "MASIH DIPENCET JUGA?";

        text.innerText =
            "Penasaran banget sih kamu.";

    }

    else if (dangerCount === 3) {

        title.innerText =
            "YAUDH TERLANJUR 😭";

        text.innerText =
            "Ada satu pesan buat kamu...";

    }

    else {

        title.innerText =
            "haihai ganteng❤️"

        text.innerText =
            "Nah kan, akhirnya ketemu juga pesannya.";

        confetti();

    }

}



/* =========================
   SECRET
========================= */

function openSecret() {

    document
        .getElementById("secret-message")
        .classList.remove("hidden");

    confetti();

}



/* =========================
   CONFETTI
========================= */

function confetti() {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < 60; i++) {

        const item =
            document.createElement("div");

        item.innerText =
            Math.random() > 0.5
            ? "♥"
            : "✦";

        item.style.position =
            "fixed";

        item.style.left =
            Math.random() * 100 +
            "vw";

        item.style.top =
            "-20px";

        item.style.fontSize =
            Math.random() * 15 +
            10 +
            "px";

        item.style.zIndex =
            "9999";

        item.style.animation =
            "fall " +
            (Math.random() * 3 + 2) +
            "s linear forwards";

        container.appendChild(item);

        setTimeout(function() {

            item.remove();

        }, 5000);

    }

}