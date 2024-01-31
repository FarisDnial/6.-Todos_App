const tasks = [];

function addTasks() {
  const task = prompt("Enter a new task: ");
  // when we got the answer from the user, we add it to the array. but first we need to get through the conditionals first.
  // if the user enters nothing, then the alert will pop up, ask the user to enter the task..
  //if the user enters a task, the task then will be added to the array by using the push method.
  if (task === "") {
    alert("Please add task!")
  } else {
      tasks.push(task);
      alert("Task added!");
    }
  }

function viewTasks() {
  let tasklist = "Tasks:\n";
  for (const task of tasks) {
    tasklist += `- ${task}\n`; //tasklist = ("Tasks:\n + - ${task}\n")
  }
  alert(tasklist);
}


