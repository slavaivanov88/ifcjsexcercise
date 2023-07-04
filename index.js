import { projects } from "./projects.js";

// Get all cards
const projectContainer = document.getElementById("projects-container");
const projectModels = Array.from(projectContainer.children);



const templateItem = projectModels[0];

const baseURL = './viewer.html';



for(let project of projects) {
    const newItem = createItem(project);
    projectContainer.appendChild(newItem);
}


function createItem(project)   {


    const newItem = templateItem.cloneNode(true);

    // Add project name to card
    const itemTitle = newItem.querySelector('h3');
    itemTitle.textContent = project.name;

    // Add project URL to card
    const button = newItem.querySelector('a');
    button.href = baseURL + `?id=${project.id}`;

    return newItem;

}

templateItem.remove();
