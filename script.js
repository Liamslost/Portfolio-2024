"use strict";

const Projects = [
  {
    id: "5",
    h1: "Karen-Ipsum",
    h2: "React | Typescript",
    description: "A Full-Stack web app for generating stylised Lorem Ipsum with a nod to modern internet culture. A work in progress but currently functional and live. Uses MongoDb and it's own domain.",
    image: "Images/karenIpsum.png",
    projectUrl: "https://www.karenipsum.com",
    githubUrl: "https://github.com/Liamslost/karen-ipsum",
  },
  {
    id: "1",
    h1: "Splitter",
    h2: "React | Tailwind",
    description: "My first solo React/Tailwind project made over 3 evenings. If I were to spend more time on this I would include validation, unit tests and make the reset button clear the custom tip and restart the animation. I really enjoy working with React and Tailwind.",
    image: "Images/split.png",
    projectUrl: "https://liamslost.github.io/splitter/",
    githubUrl: "https://github.com/Liamslost/splitter",
  },
  {
    id: "2",
    h1: "Calculator",
    h2: "JavaScript | CSS",
    description: "My first solo Javascript project made over 2 days. I enjoyed learning how to use the slider to change the displayed price as well as the annual/monthly price clicker changing the display.",
    image: "Images/traffic-calculator.png",
    projectUrl: "https://liamslost.github.io/priceCalculator/",
    githubUrl: "https://github.com/Liamslost/priceCalculator",
  },
  {
    id: "3",
    h1: "To-do",
    h2: "Slim | PHP | SQL",
    description: "A quick solo project practising using Slim and MVC with intentional minimal CSS to focus of function over form. The app can add, complete, restore and delete tasks from a SQL database as well as shows task priority. I really enjoyed the organisation of MVC. With more time I would complete the sort by functionality.",
    image: "Images/to-do.png",
    projectUrl: "",
    githubUrl: "https://github.com/Liamslost/slim-to-do-app",
  },
  {
    id: "4",
    h1: "Whack",
    h2: "JavaScript | CSS",
    description:"This project was made by myself and course-mates at IO academy. We were tasked with making a Whack-a-Mole style game for Halloween. I was responsible for most of the design and all of the SVG artwork along with the pre and post game modals with their functionality.",
    image: "Images/Whack-a-Jacko.png",
    projectUrl: "https://2024-blue-lobsters-whack-a-ghoul.dev.io-academy.uk/",
    githubUrl: "https://github.com/Liamslost",
  },
];

const Progress = [
  {
    id: "1",
    h1: "Keyboard Warrior",
    h2: "React.ts | Node.ts",
    description: "Think Guitar Hero but for improving touch typing. Scores extra points based on accuracy with score multipliers",
    image: "Images/keyboard-warrior.png",
    githubUrl: "https://github.com/Liamslost",
  },
  {
    id: "2",
    h1: "Drum Sequencer",
    h2: "React | Tailwind | TypeScript",
    description: "This app is just for fun. I&#39;m hoping to be able to create drum loops rather than just tap away and play a drum beat. My aim is to be able to adjust BPM and adjustable notes to 1/16th of a beat.",
    image: "Images/Placeholder.png",
    githubUrl: "https://github.com/Liamslost",
  },
  // {
  //   id: "3",
  //   name: "Progress 3",
  //   description: "this is 3",
  //   image: "",
  // },
  // {
  //   id: "4",
  //   name: "Progress 4",
  //   description: "this is 4",
  //   image: "",
  // },
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
    

    output += `<div class='tile project${progress["id"]} progressTile'>`;
    output += `<div class="progressTitle">`;
    output += `<h1>${progress["h1"]}</h1>`;
    output += `<h2>${progress["h2"]}</h2>`;
    output += `</div>`;
    output += `<div class="progressButtons">`;
    output += `<a href='${progress["githubUrl"]}' target="_blank">See Repo</a>`;
    output += `</div>`;
    output += `<div class="progressDescription" >${progress["description"]} </div>`;
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

  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

const form = document.getElementById("my-form");
async function handleSubmit(event) {
event.preventDefault();
const status = document.getElementById("my-form-status");
const data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks! I'll be in touch soon!";
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
      status.innerHTML = "Oops! There was a problem submitting your mail"
    }
  })
}
}).catch(error => {
  status.innerHTML = "Oops! That didn't work"
});
}
form.addEventListener("submit", handleSubmit)