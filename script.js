const todoList = [];
let userAnswer = prompt("What do you want to do?").toLowerCase();

while (userAnswer !== "quit" && userAnswer !== "q") {
  userAnswer = prompt(`what would you like todo?`);
}

console.log(`OK QUIT THE APP`);
