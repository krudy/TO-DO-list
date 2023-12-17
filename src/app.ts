const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".addButton");

const task = {
  name: "laundy",
  done: false,
};

const tasks: {
  name: string;
  done: boolean;
}[] = [
  { name: "laundry", done: false },
  { name: "walk the dog", done: true },
  { name: "buy a newspaper", done: false },
];

const render = () => {
  tasksContainerElement.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`;
    
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkBoxElement: HTMLInputElement = document.createElement("input");
    checkBoxElement.type = "checkbox";
    checkBoxElement.name = task.name;
    checkBoxElement.id = id;
    checkBoxElement.checked = task.done; 
    checkBoxElement.addEventListener("change", () => {
      task.done = !task.done;
    })

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkBoxElement);    
    
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false});
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  render();
});

render();
