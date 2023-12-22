function checkStorage() {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [
      {
        foldername: "General",
        tasks: [
          {
            taskName: "Task Name, click to edit...",
            taskDate: "Date Here",
            taskNotes: "Task Notes, click to edit...",
            completed: false
          }
        ]
      }
    ];
  }
}

export default checkStorage;
