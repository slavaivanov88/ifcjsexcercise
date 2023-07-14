const projects = [
    {
        name: "Pavilion",
        id: "1",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/"
    },
    {
        name: "Restaurant",
        id: "2",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/"
    },
    {
        name: "Mansion",
        id: "3",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/"
    },
    {
        name: "Campus",
        id: "4",
        url: "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/"
    },
    {
        name: "Hospital",
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
