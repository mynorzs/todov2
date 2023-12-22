import selectFolder from "./selectFolder.js";
import checkStorage from "./checkStorage.js";
import setNewStorage from "./setNewStorage.js";

function createFolder(folderObject, folderIndex) {
  const folder = document.createElement("div");
  folder.textContent = folderObject.foldername;

  folder.addEventListener("click", () => {
    selectFolder(folderIndex);
  });

  if (folderIndex > 0) {
    folder.addEventListener("dblclick", (evt) => {
      evt.target.contentEditable = true;
      evt.target.focus();
      window.getSelection().selectAllChildren(evt.target);
    });

    folder.addEventListener("keypress", (evt) => {
      let tasksHeading = document.querySelector("main section:nth-child(1) h2");
      tasksHeading.textContent = evt.target.textContent;
      let allTasks = checkStorage();
      allTasks[folderIndex].foldername = evt.target.textContent;
      setNewStorage(allTasks);

      if (evt.key === "Enter") {
        evt.preventDefault();
        evt.target.blur();
        evt.target.contentEditable = false;
      }
    })

    folder.addEventListener("focusout", (evt) => {
      evt.target.contentEditable = false;
    });
  }

  return folder;
}

function printNav(tasks) {
  let allTasks = tasks;

  const folderSection = document.querySelector("nav section");

  const addFolderButton = document.createElement("button");
  addFolderButton.textContent = "Add Folder +";

  let newFolders = document.createElement("section");

  for (let i = 0; i < allTasks.length; i++) {
    newFolders.appendChild(createFolder(allTasks[i], i));
  }

  addFolderButton.addEventListener("click", () => {

    let allNewTasks = checkStorage();

    const defaultFolder = {
      foldername: "New Folder, double click to edit name...",
      tasks: []
    }

    allNewTasks.push(defaultFolder);
    setNewStorage(allNewTasks);

    newFolders.appendChild(createFolder(defaultFolder, allNewTasks.length - 1));
    selectFolder(allNewTasks.length - 1);
  });

  folderSection.replaceChildren(addFolderButton, newFolders);
}

export default printNav;
