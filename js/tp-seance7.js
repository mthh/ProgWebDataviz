window.document.addEventListener('DOMContentLoaded', async () => {

  const map1 = L.map('map1');

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors"
  }).addTo(map1);

  map1.setView([45.1885, 5.7245], 13);

  // Example 2
  const map2 = L.map('map2');

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors"
  }).addTo(map2);

  map2.setView([45.1885, 5.7245], 13);

  const response = await fetch(
    'https://gist.githubusercontent.com/mthh/4ad093d3b33c2177f1e6c1ea1cde5d9b/raw/b6a60fc2ee66093f009114331f8a4230665d6a30/UNIONS_DE_QUARTIER_EPSG4326.json',
  );
  const data = await response.json();

  // On crée une couche Leaflet à partir des données GeoJSON
  const layer = L.geoJSON(data, {
    style: {
      color: 'red',
      opacity: 0.5,
    },
  });
  // On ajoute la couche à la carte
  layer.addTo(map2);
  // On ajuste le zoom pour que toutes les données soient visibles
  map2.fitBounds(layer.getBounds());


  // Example 3 - Ajout d'épingles
  const map3 = L.map('map3');

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors"
  }).addTo(map3);

  map3.setView([45.1885, 5.7245], 13);

  const layer3 = L.geoJSON(data, {
    style: {
      color: 'red',
      opacity: 0.5,
    },
  });
  layer3.addTo(map3);
  map3.fitBounds(layer3.getBounds());

  const marker = L.marker([45.1885, 5.7245]);
  marker.addTo(map3);

  const circle = L.circle([45.1673, 5.7373], {
    color: 'green',
    radius: 100,
  });
  circle.addTo(map3);

  // Ajout d'un popup
  marker.bindPopup('Hello, Marker!');
  circle.bindPopup('Hello, Circle!');

  const marker33 = L.marker([45.2031, 5.7189]);
  marker33.addTo(map3);

// Ajout d'un popup
  marker33.bindPopup('Je m\'ouvre au survol de la souris !');
  marker33.on('mouseover', () => marker33.openPopup());
  marker33.on('mouseout', () => marker33.closePopup());
});