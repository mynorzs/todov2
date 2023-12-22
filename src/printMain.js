import checkStorage from "./checkStorage";
import printNav from "./printNav.js";
import selectFolder from "./selectFolder";
import setNewStorage from "./setNewStorage.js";

function addSingleTask(folderIndex, taskIndex) {
  let allTasks = checkStorage();

  const singleTask = document.createElement("div");
  const taskHeader = document.createElement("div");

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  if (allTasks[folderIndex].tasks[taskIndex].completed) {
    checkBox.checked = true;
  }

  const taskName = document.createElement("p");
  taskName.textContent = allTasks[folderIndex].tasks[taskIndex].taskName;
  taskName.contentEditable = true;

  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Delete Task";

  taskHeader.append(checkBox, taskName, deleteTaskButton);

  const taskInfo = document.createElement("div");

  const taskDate = document.createElement("p");
  taskDate.textContent = allTasks[folderIndex].tasks[taskIndex].taskDate;

  const taskNotes = document.createElement("p");
  taskNotes.textContent = allTasks[folderIndex].tasks[taskIndex].taskNotes;
  taskNotes.contentEditable = true;

  taskInfo.append(taskDate, taskNotes);

  singleTask.append(taskHeader, taskInfo);

  checkBox.addEventListener("click", () => {
    let allNewTasks = checkStorage();
    if (checkBox.checked == true) {
      allNewTasks[folderIndex].tasks[taskIndex].completed = true;
    } else {
      allNewTasks[folderIndex].tasks[taskIndex].completed = false;
    }
    setNewStorage(allNewTasks);
  });

  taskName.addEventListener("keypress", (evt) => {
    let allNewTasks = checkStorage();
    allNewTasks[folderIndex].tasks[taskIndex].taskName = evt.target.textContent;
    setNewStorage(allNewTasks);

    if (evt.key === "Enter") {
      evt.preventDefault();
      evt.target.blur();
      taskNotes.focus();
    }
  });

  taskNotes.addEventListener("keypress", (evt) => {
    let allNewTasks = checkStorage();
    allNewTasks[folderIndex].tasks[taskIndex].taskNotes = evt.target.textContent;
    setNewStorage(allNewTasks);

    if (evt.key === "Enter") {
      evt.preventDefault();
      evt.target.blur();
    }
  });

  deleteTaskButton.addEventListener("click", () => {
    let allNewTasks = checkStorage();
    allNewTasks[folderIndex].tasks.splice(taskIndex, 1);
    setNewStorage(allNewTasks);
    singleTask.remove();
  });

  taskName.addEventListener("focusout", (evt) => {
    if (evt.target.textContent == "") {
      evt.target.textContent = "New Task";
      let allNewTasks = checkStorage();
      allNewTasks[folderIndex].tasks[taskIndex].taskName = evt.target.textContent;
      setNewStorage(allNewTasks);
    }
  });

  taskNotes.addEventListener("focusout", (evt) => {
    if (evt.target.textContent == "") {
      evt.target.textContent = "Notes...";
      let allNewTasks = checkStorage();
      allNewTasks[folderIndex].tasks[taskIndex].taskName = evt.target.textContent;
      setNewStorage(allNewTasks);
    }
  });

  return singleTask;

}

function deleteFolder(folderIndex) {
  let allTasks = checkStorage();

  allTasks.splice(folderIndex, 1);
  setNewStorage(allTasks);

  printNav(allTasks);
  selectFolder(folderIndex - 1);
}

function addHeading(folderIndex) {
  let allTasks = checkStorage();

  const headingSection = document.createElement("section");

  const folderHeading = document.createElement("h2");
  folderHeading.textContent = allTasks[folderIndex].foldername;

  const folderControls = document.createElement("div");

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task +";

  const deleteFolderButton = document.createElement("button");
  deleteFolderButton.textContent = "Delete Folder";

  deleteFolderButton.addEventListener("click", () => {
    deleteFolder(folderIndex);
  });

  if (folderIndex == 0) {
    folderControls.append(addTaskButton);
  } else {
    folderControls.append(addTaskButton, deleteFolderButton);
  }

  addTaskButton.addEventListener("click", () => {
    const defaultTask = {
      taskName: "New Task",
      taskDate: "New Date",
      taskNotes: "Notes...",
      completed: false
    }

    allTasks[folderIndex].tasks.push(defaultTask);
    setNewStorage(allTasks);

    const tasksSection = document.querySelector("main section:nth-child(2)");
    tasksSection.appendChild(addSingleTask(folderIndex, allTasks[folderIndex].tasks.length - 1));
  });

  headingSection.append(folderHeading, folderControls);

  return headingSection;
}

function addTasks(folderIndex) {
  let allTasks = checkStorage();

  const tasksSection = document.createElement("section");

  for (let i = 0; i < allTasks[folderIndex].tasks.length; i++) {
    tasksSection.appendChild(addSingleTask(folderIndex, i));
  }

  return tasksSection;

}

function printMain(folderIndex) {
  const main = document.querySelector("main");

  main.replaceChildren(addHeading(folderIndex), addTasks(folderIndex));

}

export default printMain;
