// // Завдання №1
// let usersName = ["Mike", "Bob", "Nikola"];
// let users = {};
// [users.mike, users.bob, users.nikola] = usersName;
// console.log(users);




// // Завдання 2
let salaries = {
  Mike: 1500,
  Bob: 1800,
  Nikola: 1700,
};

function maxSalaries(salaries) {
  let maxSalary = 0;
  let userName = '';
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      userName = name;
    }
  }
  return userName;
}
console.log(maxSalaries(salaries));

// // Завдання 3
// let users = { mike: "Mike", bob: "Bob", nikola: "Nikola" };
// let { mike: userMike, bob: userBob, nikola: userNikola } = users;
// console.log(userMike, userBob, userNikola);


// // Завдання 4 створив все як в інструкції

