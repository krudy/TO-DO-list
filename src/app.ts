const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".addButton");

interface Task {
  name: string;
  done: boolean;
}

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({name: taskNameInputElement.value, done: false});
  render();
});

render();
