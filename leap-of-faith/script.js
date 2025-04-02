function leapOfFaith() {
    let jumpSound = document.getElementById("jumpSound");
    let assassin = document.getElementById("assassin");

    jumpSound.onplay();

    // Start leap animation
    assassin.style.top = "80vh"; // Moves down
    assassin.style.transform = "rotate(180deg)"; // Flips while falling

    // Optional: Hide assassin after landing
    setTimeout(() => {
        assassin.style.display = "none";
    }, 2000);
}
