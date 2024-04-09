#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000;
let myPin = 335545;
console.log(chalk.green("Welcome to Mudasir Ali ATM"));
let pinAns = await inquirer.prompt([
    {
        message: "Enter your pin code",
        type: "number",
        name: "pin",
    },
]);
if (pinAns.pin === myPin) {
    console.log(chalk.yellowBright("Correct pin code"));
    let operator = await inquirer.prompt([
        {
            message: "Select operator to perform operation",
            name: "Operator",
            type: "list",
            choices: ["Withdraw", "check Balance", "FastCash", "Exit"],
        },
    ]);
    if (operator.Operator === "Withdraw") {
        let payment = await inquirer.prompt([
            {
                message: "Enter your amount",
                name: "amount",
                type: "number",
            },
        ]);
        if (payment.amount <= myBalance) {
            myBalance -= payment.amount;
            console.log(chalk.greenBright(`Your remaining balance is ${myBalance}`));
        }
        else {
            console.log(chalk.redBright(`Insufficient Balanace`));
        }
    }
    else if (operator.Operator === "check Balance") {
        console.log(chalk.green(`Your current balance is ${myBalance}`));
    }
    else if (operator.Operator === "FastCash") {
        let Select = await inquirer.prompt([
            {
                name: "fast",
                type: "rawlist",
                message: "Select your amount:",
                choices: [1000, 5000, 10000, 15000],
            },
        ]);
        myBalance -= Select.fast;
        console.log(chalk.yellowBright(`Your reamining balance is ${myBalance}`));
    }
    else if (operator.Operator === "Exit") {
        console.log(chalk.blueBright(` Ok bro duaon me yaad rakhna Allah Hafiz.`));
    }
}
else {
    console.log(chalk.red("Incorrect pin code"));
}
