const button = document.querySelector("#theme-btn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const message = document.querySelector("#message");

const count = document.querySelector("#count");

message.addEventListener("input", () => {

    count.textContent = message.value.length;

});
const phrases = ["Python", "FastAPI", "React", "AI"];
const el = document.getElementById("typing-text");
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    el.textContent += phrases[phraseIndex][charIndex];
    charIndex++;
    setTimeout(type, 100); // typing speed
  } else {
    setTimeout(erase, 1000); // pause before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    el.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

type();

