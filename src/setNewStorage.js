function setNewStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default setNewStorage;
