"use strict";

const Projects = [
  {
    id: "1",
    h1: "Splitter",
    h2: "React | Tailwind",
    description: "My first solo React/Tailwind project made over 3 evenings. If I were to spend more time on this I would include validation, unit tests and make the reset button clear the custom tip and restart the animation. I really enjoy working with React and Tailwind.",
    image: "Images/split.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/splitter",
  },
  {
    id: "2",
    h1: "Price Calculator",
    h2: "JavaScript | CSS",
    description: "My first solo Javascript project made over 2 days. I enjoyed learning how to use the slider to change the displayed price as well as the annual/monthly price clicker changing the display.",
    image: "Images/traffic-calculator.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/priceCalculator",
  },
  {
    id: "3",
    h1: "Slim To-do App",
    h2: "Slim | PHP | SQL",
    description: "A quick solo project practising using Slim and MVC with intentional minimal CSS to focus of function over form. The app can add, complete, restore and delete tasks from a SQL database as well as shows task priority. I really enjoyed the organisation of MVC. With more time I would complete the sort by functionality.",
    image: "Images/to-do.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/slim-to-do-app",
  },
  {
    id: "4",
    h1: "Collections",
    h2: "PHP | SQL",
    description:"This was my first solo PHP project. I was tasked to create an app that can add items to a collection. Within the timeframe I managed to get the app to display all items from the SQL database, add new items and delete exiting entries. Istarted working on filtering the results and would complete this with more time.",
    image: "Images/Placeholder.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/CollectionsApp",
  },
];

const Progress = [
  {
    id: "1",
    name: "Karen Ipsum",
    description: "A lorem ipsum generator inspored by the works of 'Karens' from all over the world",
    image: "",
  },
  {
    id: "2",
    name: "Progress 2",
    description: "this is 2",
    image: "",
  },
  {
    id: "3",
    name: "Progress 3",
    description: "this is 3",
    image: "",
  },
  {
    id: "4",
    name: "Progress 4",
    description: "this is 4",
    image: "",
  },
];

const CountProjects = Projects.length;
const CountProgress = Progress.length;
const ScrollContainer = document.querySelector(".progressContainer");
const navButtons = document.querySelectorAll(".navBar li");

let counterStarted = false;
window.addEventListener("scroll", navScrollFunction);

window.addEventListener("DOMContentLoaded", () => {
  displayProjects();
  displayProgress();
  getTempBristol();
  progressTileGrow();
});

function navScrollFunction() {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const nav = document.querySelector(".navBar");
  const counter = document.querySelector(".projectsCounterContainer");

  if (scrollTop > 10) {
    nav.classList.add("navScroll");
    counter.style.opacity = 1;

    if (!counterStarted) {
      counterStarted = true;
      projectsCounter();
      progressCounter();
    }
  } else {
    nav.classList.remove("navScroll");
    counter.style.opacity = 0;
    counterStarted = false;
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

function progressTileGrow(){
    const tiles = document.querySelectorAll('.progressTile');
    tiles.forEach((tile) => {
      tile.addEventListener('click', () => {
        console.log('EL added');
  
        tiles.forEach((t) => t.classList.remove('active'));
        console.log('class rem');

        tile.classList.add('active');

        console.log('class add');
      });
    });
  }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function projectsCounter() {
  let projectsCounter = document.querySelector("#projectsCounter");
  const targetProjectsCount = CountProjects;
  let currentProjectsCount = 20;

  if (!progressCounter) {
    console.error(" ProjectsCounterContainer element not found in DOM");
    return;
  }

  const interval = setInterval(() => {
    currentProjectsCount--;
    projectsCounter.textContent = `${currentProjectsCount}`;
    if (currentProjectsCount <= targetProjectsCount) {
      clearInterval(interval);
    }
  }, 100);
}

function progressCounter() {
  let inProgress = document.querySelector("#progressCounter");
  const targetProgressCount = CountProgress;
  let currentProgressCount = 20;

  if (!inProgress) {
    console.error("ProjectsCounterContainer element not found in the DOM");
    return;
  }
  const interval = setInterval(() => {
    currentProgressCount--;
    inProgress.textContent = `${currentProgressCount}`;

    if (currentProgressCount <= targetProgressCount) {
      clearInterval(interval);
    }
  }, 100);
}

function displayProjects() {
  let output = "";
  let projectsContainer = document.querySelector(".projectsContainer");
  Projects.forEach((project) => {
    output += `<div class='tile project${project["id"]} projectTile'>`;
    output += `<div class="projectTitle">`;
    output += `<h1>${project["h1"]}</h1>`;
    output += `<h2>${project["h2"]}</h2>`;
    output += `</div>`;
    output += `<div class="projectButtons">`;
    output += `<a href='${project["projectUrl"]}' target="_blank">See in browser</a>`;
    output += `<a href='${project["githubUrl"]}' target="_blank">See Repo</a>`;
    output += `</div>`;
    output += `<div class="projectDescription" >${project["description"]} </div>`;
    output += `<div class="descriptionCover">`;
    output += `</div>`;
    output += `<figure class="projectsImageContainer">`;
    output += `<img src='${project["image"]}'>`;
    output += `</figure>`;
    output += `</div>`;
    output += `</div>`;
  });

  projectsContainer.innerHTML = output;
}

function displayProgress() {
  let output = "";
  let progressContainer = document.querySelector(".progressContainer");
  Progress.forEach((progress) => {
    output += `<div class='progressTile progress${progress["id"]}'>`;
    output += `<div class="projectTitle">`;
    output += `<h1>${progress["name"]}</h1>`;
    output += `<h2>${progress["description"]}</h2>`;
    output += `</div>`;
    output += `<div class="placment">`;
    output += `<figure class="projectsImageContainer">`;
    output += `<img src='${progress["image"]}'>`;
    output += `</figure>`;
    output += `</div>`;
    output += `</div>`;
  });

  progressContainer.innerHTML = output;
}

function getTempBristol(){
  const lat = 51.4755;
  const lon = -2.6101;
  const apiKey = '9fed275d8f67fab6bbf25890046d3fb6';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  let tempDisplay = document.querySelector('.about span')

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const bristolTemp = Math.round((data.main.temp - 273.15));
      tempDisplay.innerHTML= `${bristolTemp}&degC`
    })
    .catch(error => console.log(error));
  };