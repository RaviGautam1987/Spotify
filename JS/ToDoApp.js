let todo = [];
let request = prompt("Enter your request.");

while (true) {
  if (request == "quit") {
    console.log("Quitting app");
    break;
  }
  if (request == "list") {
    console.log("-----------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i,todo[i]);
    }
    console.log("-----------------");
  } else if (request == "add") {
    let task = prompt("Please enter what you want to add task.");
    todo.push(task);
    console.log("task added");
  } else if (request == "delete") {
    let idx = prompt("Please enter index to delete a task");
    todo.splice(idx,1);
    console.log("task deleted");
  }
  request = prompt("Enter your request.");
}
