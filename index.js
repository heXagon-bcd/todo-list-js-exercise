function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  }
  return task
}

//print out task details
function logTask(task) {
  let text = "";
  if (task.complete === false) {
    text = "not been completed"
  } else {
    text ="been completed"
  }
  console.log(`Hello. the ${task.title} has ${text}`)
}

function markComplete(task) {
  task.complete = true;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks);
markComplete(task1);
logTask(task1);
