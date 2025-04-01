const cities = {
    "Florence": {
        info: "Florence is the home of Ezio Auditore, the main character of Assassin's Creed II. It is known for its Renaissance art and architecture.",
        coordinates: { lat: 43.7695, lng: 11.2558 },
        image: "Assassins-Creed-Interactive-Map/Florence.jpg"
    },
    "Ancient Egypt": {
        info: "Ancient Egypt is the setting for Assassin's Creed Origins. It features iconic landmarks like the Pyramids of Giza.",
        coordinates: { lat: 30.0444, lng: 31.2357 },
        image: "Assassins-Creed-Interactive-Map/Egypt.jpg"
    },
    "Valhalla": {
        info: "Valhalla is the setting for Assassin's Creed Valhalla, featuring Viking culture and landscapes.",
        coordinates: { lat: 60.4720, lng: 8.4689 },
        image: "Assassins-Creed-Interactive-Map/Valhalla.jpg"
    }
};

const mapContainer = document.querySelector('.map-container');

//Create and add info-box dynamically if not present
let infoBox = document.getElementById('info-box');
if(!infoBox) {
    infoBox = document.createElement('div');
    infoBox.id = 'info-box';
    mapContainer.appendChild(infoBox);
}

document.querySelectorAll(".city").forEach(city => {
    city.addEventListener("mouseover", function() {
        const cityName = this.getAttribute("data-city");

        infoBox.innerHTML = `<strong>${cityName}</strong><br>${cities[cityName].info}<br>
                             <img src="${cities[cityName].image}" width="100%">`;

        infoBox.style.display = "block";
        infoBox.style.position = "absolute";
        infoBox.style.top = `${this.offsetTop - 70}px`;
        infoBox.style.left = `${this.offsetLeft + 20}px`;
    });

    city.addEventListener("mouseleave", function() {
        infoBox.style.display = "none";
    });
});