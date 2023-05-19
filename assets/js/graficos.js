var peliculaLabel = [],
  peliculaPopularityData = [],
  peliculaNombreData = [],
  peliculaIdioma=[],
  peliculaTotal=[];

async function dummyChart() {
  await getDummyData();

  const ctx = document.getElementById("graficos").getContext("2d");

  new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: peliculaNombreData,
      datasets: [
        {
          label: "Nota Promedio",
          backgroundColor: "blue",
          borderColor: "rgb(255, 99, 132)",
          data: peliculaPopularityData,
        },
      ],
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: "index",
      },

      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
  const ctx1 = document.getElementById("graficosTorta").getContext("2d");

  new Chart(ctx1, {
    // The type of chart we want to create
    type: "doughnut",

    // The data for our dataset
    data: {
      labels: peliculaIdioma,
      datasets: [
        {
          label: "Cantidad de peliculas por idioma",
          backgroundColor:["red", "blue", "orange","grey"],
       
          data: peliculaTotal,
        },
      ],
    },
  });
}

dummyChart();

//Fetch Data from API

async function getDummyData() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}";

  const response = await fetch(apiUrl);
  const barChatData = await response.json();
  console.log(barChatData);

  const popularidad = barChatData.results.map((x) => x.vote_average);
  console.log(popularidad);
  const nombre = barChatData.results.map((x) => x.title);
  const idiomas = {};
  barChatData.results.map((x) => {
    if (idiomas[x.original_language]) {
      idiomas[x.original_language] += 1;
    } else {
      idiomas[x.original_language] = 1;
    }
  });
  console.log(idiomas);

  peliculaIdioma = Object.keys(idiomas);
  peliculaTotal = Object.values(idiomas);
  peliculaPopularityData = popularidad;
  peliculaNombreData = nombre;
}

export default dummyChart;
