import "./style.css";
import checkStorage from "./checkStorage.js";
import printNav from "./printNav.js";
import selectFolder from "./selectFolder.js";

const allTasks = checkStorage();

printNav(allTasks);

selectFolder(0);

