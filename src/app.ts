const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: String[] = ["laundry ", "walk the dog", "buy a newspaper"];

const render = () => {
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement("li");
    })
};
