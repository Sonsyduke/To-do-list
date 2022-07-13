const todoList = ["Wash Rolly", "Walk Rolly"];
let userAnswer = prompt("What do you want to do?").toLowerCase();

while (userAnswer !== "quit" && userAnswer !== "q") {
  if (userAnswer === "list") {
    console.log(`*****************`);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i} : ${todoList[i]}`);
    }
    console.log(`*****************`);
  } else if (userAnswer === "new") {
    const newTodo = prompt(`What is the new todo?`);
    todoList.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (userAnswer === "delete") {
    const index = parseInt(prompt(`enter an index to delete: `));
    if (!Number.isNaN(index)) {
      const deleted = todoList.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  userAnswer = prompt(`what would you like todo?`);
}

console.log(`OK QUIT THE APP`);
