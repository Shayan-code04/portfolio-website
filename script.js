
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

async function loadGitHubStats() {
    try {
        const response = await fetch("https://api.github.com/users/Shayan-code04");

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub data");
        }

        const data = await response.json();

        console.log(data);

        document.getElementById("github-name").textContent = data.name;
        document.getElementById("github-followers").textContent = data.followers;
        document.getElementById("github-repos").textContent = data.public_repos;
        document.getElementById("github-avatar").src = data.avatar_url;

    } catch (error) {
        console.error(error);
    }
}

loadGitHubStats();
async function loadBitcoinPrice() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch Bitcoin price");
        }

        const data = await response.json();

        console.log(data);

        document.getElementById("btc-price").textContent =
            "$" + data.bitcoin.usd;

        document.getElementById("btc-updated").textContent =
            new Date().toLocaleTimeString();

    } catch (error) {
        console.error(error);

        document.getElementById("btc-price").textContent =
            "Unable to load price";
    }
}

loadBitcoinPrice();
setInterval(loadBitcoinPrice, 60000);