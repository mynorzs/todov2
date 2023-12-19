import checkStorage from "./checkStorage";
import printNav from "./printNav.js";
import selectFolder from "./selectFolder";
import setNewStorage from "./setNewStorage.js";

function addSingleTask(folderIndex, taskIndex) {
  let allTasks = checkStorage();

  const accordion = document.createElement("details");
  const summary = document.createElement("summary");
  accordion.appendChild(summary);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (allTasks[folderIndex].tasks[taskIndex].completed == true) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  const taskName = document.createElement("p");
  taskName.textContent = allTasks[folderIndex].tasks[taskIndex].taskName;

  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Delete Task";

  summary.append(checkbox, taskName, deleteTaskButton);

  const taskDate = document.createElement("p");
  taskDate.textContent = allTasks[folderIndex].tasks[taskIndex].taskDate;

  const taskNotes = document.createElement("p");
  taskNotes.textContent = allTasks[folderIndex].tasks[taskIndex].taskNotes;

  accordion.append(taskDate, taskNotes);

  if (accordion.open == false) {
    accordion.addEventListener("click", (evt) => {
      evt.preventDefault();
    });

    taskName.addEventListener("dblclick", () => {
      accordion.open = true;
      taskName.contentEditable = true;
      taskNotes.contentEditable = true;
      taskName.focus();
    });
  }

  deleteTaskButton.addEventListener("click", () => {
    let allNewTasks = checkStorage();
    allNewTasks[folderIndex].tasks.splice(taskIndex, 1);
    setNewStorage(allNewTasks);
    accordion.remove();
  });

  taskName.addEventListener("keypress", (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      evt.target.blur();
      taskNotes.focus();
    }
  });

  taskNotes.addEventListener("keypress", (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      evt.target.blur();
    }
  });

  taskName.addEventListener("focusout", () => {
    let allNewTasks = checkStorage();
    allNewTasks[folderIndex].tasks[taskIndex].taskName = taskName.textContent;
    setNewStorage(allNewTasks);
  });

  taskNotes.addEventListener("focusout", () => {
    let allNewTasks = checkStorage();
    allNewTasks[folderIndex].tasks[taskIndex].taskNotes = taskNotes.textContent;
    setNewStorage(allNewTasks);
  });

  return accordion;

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
      taskNotes: "Notes",
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
