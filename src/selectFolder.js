import printMain from "./printMain.js";
import checkStorage from "./checkStorage.js";

function selectFolder(folderIndex) {
  const folders = document.querySelectorAll("nav section section div");

  for (let i = 0; i < folders.length; i++) {
    folders[i].classList.remove("folder-selected");
  }
  folders[folderIndex].classList.add("folder-selected");
  printMain(folderIndex);

  let allTasks = checkStorage();
}

export default selectFolder;
