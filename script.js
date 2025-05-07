const myURL = "D:\to_do_listcards-data";

let idNum = -1;
let editId;
let deleteId;

const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const rate = document.getElementById("rate");

let cardsLi = document.querySelectorAll(".to-do-list-li")
const idList = document.getElementsByClassName("id-card-value");
const cardsListUl = document.getElementById("cards-list-ul");
const editButton = document.getElementById("edit-button");
const addButton = document.getElementById("add-button");

const selectList = document.getElementById("select-element");

const sortButton = document.getElementById("sort-button");
const filterButton = document.getElementById("filter-button");
const showAllButton = document.getElementById("show-all");

const statusCheckbox = document.getElementById("status-checkbox");
const dateCheckbox = document.getElementById("date-checkbox");
const deadlineCheckbox = document.getElementById("deadline-checkbox");

const statusFilterText = document.getElementById("get-status-for-filter");
const dateFilterText = document.getElementById("get-date-for-filter");
const deadlineFilterText = document.getElementById("get-deadline-for-filter");

const errorText = document.getElementById("error-text");

const confirmYesButton = document.getElementById("confirm-yes-button");
const confirmExitButton = document.getElementById("confirm-exit-button");

const saveAddButton = document.getElementById("add-task-save-button");
const saveEditButton = document.getElementById("edit-task-save-button")
const errorExitButton = document.getElementById("error-exit-button")

const exitButtons = document.getElementsByClassName("task-exit");
const editButtons = document.getElementsByClassName("task-edit");

const dialogAddWindow = document.getElementById("add-task-dialog");
const dialogEditWindow = document.getElementById("edit-task-dialog");
const errorsWindow = document.getElementById("errors-notification")
const confirmWindow = document.getElementById("confirm-of-delete");

const inputTitle = document.getElementById("get-task-title");
const inputDesc = document.getElementById("get-task-description");
const inputDeadline = document.getElementById("get-task-deadline");
const inputTags = document.getElementById("get-task-tags");
const inputStatus = document.getElementById("get-task-status");

const editTitle = document.getElementById("edit-task-title");
const editDesc = document.getElementById("edit-task-description");
const editDeadline = document.getElementById("edit-task-deadline");
const editTags = document.getElementById("edit-task-tags");
const editStatus = document.getElementById("edit-task-status");

const titles = document.getElementsByClassName("task-title");

/* function addFunc(element, fn) {
  element.addEventListener("click", fn);
} */

let MyCards = new Cards();

saveAddButton.addEventListener("click", onSaveAddClick);
saveEditButton.addEventListener("click", onSaveEditClick);
addButton.addEventListener("click", onAddClick);
errorExitButton.addEventListener("click", () => errorsWindow.close());
confirmYesButton.addEventListener("click", () => deleteCard());
confirmExitButton.addEventListener("click", () => confirmWindow.close());

showAllButton.addEventListener("click", showAllCards);

sortButton.addEventListener("click", onSortClick);
filterButton.addEventListener("click", onFilterClick);

/* Array.prototype.forEach.call(exitButtons, function(element) 
{
  element.addEventListener("click", onExitClick);
});
 */

