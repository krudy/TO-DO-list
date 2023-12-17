import { renderCategories } from "./helpers/render-categories.helper.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Task, Category } from "./types/types.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".addButton");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  { name: "laundry", done: false },
  { name: "walk the dog", done: true},
  { name: "buy a newspaper", done: false ,category: "hobby"},
];

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({name: taskNameInputElement.value, done: false, category: selectedCategory});
  renderTasks(tasks, tasksContainerElement);
});

renderCategories(categories, selectedCategory,categoriesContainerElement);
renderTasks(tasks, tasksContainerElement);
