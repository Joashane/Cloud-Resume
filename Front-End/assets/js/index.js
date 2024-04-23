const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://4uwglr33otfh2izfxvkhlkssgy0qtlds.lambda-url.us-east-1.on.aws/", {cache: "no-store"});
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        counter.innerHTML = "Couldn't Read Visitor Views.";
    }
}

updateCounter();
