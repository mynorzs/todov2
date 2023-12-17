function checkStorage() {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [
      {
        foldername: "General",
        tasks: [
          {
            taskName: "Double click to see details and edit",
            taskDate: "Date Here",
            taskNotes: "Notes",
            completed: false
          }
        ]
      }
    ];
  }
}

export default checkStorage;
