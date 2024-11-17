"use strict";

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

const Projects = [
  { id: "1", name: "Project 1", description: "this is project 1", image: " " },
  { id: "2", name: "Project 2", description: "this is project 2", image: " " },
  { id: "3", name: "Project 3", description: "this is project 3", image: " " },
  { id: "4", name: "Project 4", description: "this is project 4", image: " " },
];

function displayProjects(){

    let output = "";
    Projects.forEach(project => {

        output += `<div class='projectTile tile ${project['id']}'>`;
        output += `<h1>${project['description']}</h1>`;
        output += `<p></p>`;
        output += `<img src='${project['image']}'>`;
        output += `</div>`;
        
    });
}
