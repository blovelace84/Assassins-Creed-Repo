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

document.querySelectorAll(".city").forEach(city =>{
    city.addEventListener('mouseover', function() {
        const cityName = this.getAttribute('data-city');
        const infoBox = this.getAttribute('info-box');

        infoBox.innerHTML = `<strong>${cityName}</strong><br>${cities[cityName].info}<br>
                            <img src="${cities[cityName].image}" alt="${cityName}" style="width:100px;height:auto;">`;
        infoBox.style.display = 'block';
    });
    city.addEventListener('mouseleave', function() {
        document.getElementById('info-box').style.display = 'none';
    });
});