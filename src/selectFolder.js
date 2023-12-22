import printMain from "./printMain.js";

function selectFolder(folderIndex) {
  const folders = document.querySelectorAll("nav section section div");

  for (let i = 0; i < folders.length; i++) {
    folders[i].classList.remove("folder-selected");
  }
  folders[folderIndex].classList.add("folder-selected");
  printMain(folderIndex);
}

export default selectFolder;
