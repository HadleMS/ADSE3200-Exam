document.addEventListener('click', function(event) {
    var menuContainer = document.querySelector('.menu-container');
    var menuToggle = document.querySelector('#menu-toggle');

    if (!menuContainer.contains(event.target) && menuToggle.checked) {
        menuToggle.checked = false;
    }
});
const modeSwitch = document.getElementById('modeSwitch');

modeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

function sortListings() {
    var sortOption = document.getElementById("sort").value;
    var listingsContainer = document.querySelector(".featured-listings");
    var listings = Array.from(listingsContainer.getElementsByClassName("featured-listing"));

    if (sortOption === "priceLowToHigh") {
        listings.sort(function(a, b) {
            var priceA = parseFloat(a.querySelector(".listing-price").textContent.replace("$", ""));
            var priceB = parseFloat(b.querySelector(".listing-price").textContent.replace("$", ""));
            return priceA - priceB;
        });
    } else if (sortOption === "priceHighToLow") {
        listings.sort(function(a, b) {
            var priceA = parseFloat(a.querySelector(".listing-price").textContent.replace("$", ""));
            var priceB = parseFloat(b.querySelector(".listing-price").textContent.replace("$", ""));
            return priceB - priceA;
        });
    }

    listings.forEach(function(listing) {
        listingsContainer.appendChild(listing);
    });
}

