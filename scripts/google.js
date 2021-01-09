let map;

function initMap() {
    map = new google.maps.Map(document.querySelector(".body-contact_bottom-detail-content-map"), {
        center: { lat: -33.88393, lng: 151.20017 },
        zoom: 17,
    });
}