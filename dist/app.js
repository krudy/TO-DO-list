import { renderCategories } from "./helpers/render-categories.helper.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector(".addButton");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    { name: "laundry", done: false },
    { name: "walk the dog", done: true },
    { name: "buy a newspaper", done: false, category: "hobby" },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, selectedCategory, categoriesContainerElement);
renderTasks(tasks, tasksContainerElement);
