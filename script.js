"use strict";

const Projects = [
  {
    id: "1",
    name: "Splitter",
    description: "this is project 1",
    image: "Images/splitter.png",
  },
  {
    id: "2",
    name: "To-do",
    description: "this is project 2",
    image: "Images/screenshot.png",
  },
  {
    id: "3",
    name: "Project 3",
    description: "this is project 3",
    image: "Images/screenshot.png",
  },
  {
    id: "4",
    name: "Project 4",
    description: "this is project 4",
    image: "Images/screenshot.png",
  }
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

window.onscroll = function () {
  navScrollFunction();
};

function navScrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    let nav = document.getElementById("nav");
    nav.style.backgroundColor = "var(--color-navbar-bg)";
  } else {
    let nav = document.getElementById("nav");
    nav.style.backgroundColor = "";
  }
  
}
window.addEventListener("DOMContentLoaded", () => {
  projectsCounter();
  progressCounter();
  displayProjects();
  displayProgress();
});

function projectsCounter() {
let projectsCounter = document.querySelector('#projectsCounter');
const targetProjectsCount = CountProjects;
let currentProjectsCount = 20;

if (!progressCounter) {
  console.error(" #projectsCounter element not found in DOM");
  return;
}
const interval = setInterval(()=>{
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
    output += `<div class='tile project${project["id"]}'>`;
    output += `<div class="projectTitle">`;
    output += `<h1>${project["name"]}</h1>`;
    output += `<h2>${project["description"]}</h2>`;
    output += `</div>`;
    output += `<div class="placment">`;
    output += `<figure class="projectsImageContainer">`;
    output += `<img src='${project["image"]}'>`;
    output += `</figure>`;
    output += `</div>`;
    output += `</div>`;
  });

  if (!projectsContainer) {
    console.error("projectsContainer element not found in the DOM");
  } else {
    projectsContainer.innerHTML = output;
  }
}

function displayProgress() {
  let output = "";
  let progressContainer = document.querySelector(".progressContainer");
  Progress.forEach((progress) => {
    output += `<div class='tile project${progress["id"]}'>`;
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

  if (!progressContainer) {
    console.error("progressContainer element not found in the DOM");
  } else {
    progressContainer.innerHTML = output;
  }
}
