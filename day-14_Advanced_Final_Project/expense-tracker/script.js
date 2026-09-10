let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let addExpenseBtn = document.getElementById("addExpenseBtn");
let expenseList = document.getElementById("expenseList");
let total = document.getElementById("total");


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


function saveExpenses() {

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}


function renderExpenses() {

    expenseList.innerHTML = "";

    let totalAmount = 0;

    expenses.forEach(function(expense, index) {

        let li = document.createElement("li");

        let name = document.createElement("span");

        name.textContent =
            `${expense.name} - $${expense.amount}`;

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function() {

            deleteExpense(index);

        });

        li.appendChild(name);
        li.appendChild(deleteBtn);

        expenseList.appendChild(li);

        totalAmount += Number(expense.amount);
    });

    total.textContent = totalAmount.toFixed(2);
}


function addExpense() {

    let name = expenseName.value;
    let amount = expenseAmount.value;

    if (name === "" || amount === "") {

        alert("Please enter expense name and amount.");

        return;
    }

    let expense = {
        name: name,
        amount: amount
    };

    expenses.push(expense);

    saveExpenses();

    renderExpenses();

    expenseName.value = "";
    expenseAmount.value = "";
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    saveExpenses();

    renderExpenses();
}


addExpenseBtn.addEventListener("click", addExpense);

renderExpenses();