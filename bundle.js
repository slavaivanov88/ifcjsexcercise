const projects = [
    {
        name: "Model 1",
        id: "1",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/"
    },
    {
        name: "Model 2",
        id: "2",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/"
    },
    {
        name: "Model 3",
        id: "3",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/"
    },
    {
        name: "Model 4",
        id: "4",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/"
    },
    {
        name: "Model 5",
        id: "5",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/"
    }
];

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
