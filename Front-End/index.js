const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://4uwglr33otfh2izfxvkhlkssgy0qtlds.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
