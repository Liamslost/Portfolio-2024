"use strict";

const Projects = [
  {
    id: "1",
    h1: "Splitter",
    h2: "this is project 1",
    description:
      "Life finds a way. What do they got in there? King Kong? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Eventually, you do plan to have dinosaurs on your dinosaur tour, right?.",
    technologies: "",
    image: "Images/split.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/splitter",
  },
  {
    id: "2",
    h1: "Price Calculator",
    h2: "this is project 2",
    description:
      "Life finds a way. What do they got in there? King Kong? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Eventually, you do plan to have dinosaurs on your dinosaur tour, right?.",
    technologies: "",
    image: "Images/traffic-calculator.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/priceCalculator",
  },
  {
    id: "3",
    h1: "Slim To-do App",
    h2: "this is project 3",
    description:
      "Life finds a way. What do they got in there? King Kong? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Eventually, you do plan to have dinosaurs on your dinosaur tour, right?.",

    technologies: "",
    image: "Images/to-do.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/slim-to-do-app",
  },
  {
    id: "4",
    h1: "Collections",
    h2: "this is project 4",
    description:
      "Life finds a way. What do they got in there? King Kong? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Eventually, you do plan to have dinosaurs on your dinosaur tour, right?.",
    technologies: "",
    image: "Images/Placeholder.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/CollectionsApp",
  },
];

const Progress = [
  {
    id: "1",
    name: "Progress 1",
    description: "this is 1",
    image: "Images/work-in-progress.png",
  },
  {
    id: "2",
    name: "Progress 2",
    description: "this is 2",
    image: "Images/work-in-progress.png",
  },
  {
    id: "3",
    name: "Progress 3",
    description: "this is 3",
    image: "Images/work-in-progress.png",
  },
  {
    id: "4",
    name: "Progress 4",
    description: "this is 4",
    image: "Images/work-in-progress.png",
  },
];

const CountProjects = Projects.length;
const CountProgress = Progress.length;
const ScrollContainer = document.querySelector(".progressContainer");

// window.onscroll = function () {
//   navScrollFunction();
// };

window.addEventListener ("scroll", navScrollFunction);

window.addEventListener("DOMContentLoaded", () => {
  projectsCounter();
  progressCounter();
  displayProjects();
  // displayProgress();
});

function navScrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    let nav = document.querySelector(".navBar");
    nav.style.backgroundColor = "#a4ac8632";
  } else {
    let nav = document.querySelector(".navBar");
    nav.style.backgroundColor = "transparent";
  }
}

const navButtons = document.querySelectorAll("navBar li")

navButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    navButtons.forEach(btn => btn.classList.remove('active'));

    event.currentTarget.classList.add('active')
  })
});



function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function projectsCounter() {
  let projectsCounter = document.querySelector("#projectsCounter");
  const targetProjectsCount = CountProjects;
  let currentProjectsCount = 20;

  if (!progressCounter) {
    console.error(" #projectsCounter element not found in DOM");
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
    console.error("#progressCounter element not found in the DOM");
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
    output += `<div class='tile progress${progress["id"]}'>`;
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
