const dataset = [
  { fruit: 'apple', value: 8, year: 2019 },
  { fruit: 'apple', value: 12, year: 2020 },
  { fruit: 'apple', value: 4, year: 2021 },
  { fruit: 'banana', value: 10, year: 2019 },
  { fruit: 'banana', value: 6, year: 2020 },
  { fruit: 'banana', value: 8, year: 2021 },
  { fruit: 'orange', value: 7, year: 2019 },
  { fruit: 'orange', value: 12, year: 2020 },
  { fruit: 'orange', value: 12, year: 2021 },
];

// Une fonction qui crée le diagramme en barre pour une année donnée
function createViz(year) {
  // Filtrer les données pour l'année sélectionnée
  const data = dataset.filter(d => d.year === year)
  // Créer le diagramme en barre avec Plot
  return Plot.plot({
    marks: [
      Plot.barY(data, { x: "fruit", y: "value", fill: "fruit" }),
      Plot.frame()
    ]
  });
}

// On attend le chargement de la page pour exécuter le code
document.addEventListener('DOMContentLoaded', async function () {
  // On récupère les éléments du DOM
  const selectYear = document.getElementById("select-year");
  const vizContainer = document.getElementById("container-viz");

  // On créé le graphique pour l'année 2019
  vizContainer.innerHTML = `${createViz(2019).outerHTML}`;

  // On écoute l'événement "change" sur le select et on définit le comportement
  // à adopter quand l'événement est déclenché
  selectYear.addEventListener("change", (event) => {
    // L'année sélectionnée (attention, c'est une chaîne de caractères)
    // donc on le convertit en nombre avec '+'
    const year = +event.target.value;
    // Mettre à jour les graphiques
    vizContainer.innerHTML = createViz(year).outerHTML;
  });
});