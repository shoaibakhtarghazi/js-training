const employees = [
    { id: 1, name: "Ali", dept: "Dev", salary: 80000 },
    { id: 2, name: "Sara", dept: "Design", salary: 70000 },
    { id: 3, name: "Bilal", dept: "Dev", salary: 90000 },
    { id: 4, name: "Ahmed", dept: "QA", salary: 60000 },
    { id: 5, name: "Hina", dept: "Dev", salary: 85000 }
];


// 1. map() - sirf employees ke names
const names=employees.map(n=>n.name);
console.log("1.employees ke names:",names);

// 2. filter() - sirf Dev department
const devEmployees = employees.filter(employee => employee.dept === "Dev");

console.log("2. Dev Employees:", devEmployees);


// 3. reduce() - total salary
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("3. Total Salary:", totalSalary);


// 4. find() - id = 3 wala employee
const employee = employees.find(employee => employee.id === 3);

console.log("4. ID 3 Employee:", employee);


// 5. some() - koi employee 90000+ salary pe hai?
const highSalary = employees.some(employee => employee.salary >= 90000);

console.log("5. Any salary 90000+:", highSalary);


// 6. every() - sab ki salary 50000 se zyada hai?
const allAbove50000 = employees.every(employee => employee.salary > 50000);

console.log("6. All salary > 50000:", allAbove50000);


// 7. sort() - highest to lowest salary
const sortedEmployees = employees.sort(
    (a, b) => b.salary - a.salary
);

console.log("7. Highest to Lowest:", sortedEmployees);


// 8. names ko join(', ') se single string
const namesString = employees
    .map(employee => employee.name)
    .join(", ");

console.log("8. Names String:", namesString);