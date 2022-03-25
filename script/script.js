let randomNumber = Math.ceil(Math.random()*10);
let bgInfo = document.querySelector("#bg-info");
let infoButton = document.querySelector("#information-button");
let infoDiv = document.querySelector("#information");
let bgDescrptions = [
    "Perito Moreno glacier. Santa Cruz, Argentina. PH: Rafa Flores",
    "Ushuaia, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Río Grande, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Lago Escondido, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Lago Escondido, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Lago Escondido, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Domingo cape, Río Grande, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Ushuaia harbor, Tierra del Fuego, Argentina. PH: Rafa Flores",
    "Beech leaves, Tolhuin, Tierra del Fuego, Argentina. PH: Carolina Ferrandi",
    "Beech tree, Tolhuin, Tierra del Fuego, Argentina. PH: Rafa Flores",
];

document.body.className = `img-${randomNumber}`;

bgInfo.textContent += bgDescrptions[randomNumber-1];

infoButton.addEventListener("click", () => {
    infoButton.classList.add("display-none");
    infoDiv.classList.remove("display-none");
    setTimeout(() => {
        infoButton.classList.remove("display-none");
        infoDiv.classList.add("display-none");
    }, 5000);
});
