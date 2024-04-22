#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo = [];
async function createtodo(todo) {
    do {
        let operation = await inquirer.prompt({
            type: "list",
            name: "opertor",
            message: (chalk.bgGreen.black)("what want todo?"),
            choices: ["add", "veiw", "update", "delete", "Exit"]
        });
        if (operation.opertor == "add") {
            let Add = await inquirer.prompt({
                name: "Add_items",
                type: "input",
                message: (chalk.bgBlue.white)("please add items")
            });
            todo.push(Add.Add_items);
            console.log(chalk.bgRed.white(todo));
        }
        if (operation.opertor == "veiw") {
            console.log(todo);
        }
        if (operation.opertor == "update") {
            let update = await inquirer.prompt({
                type: "list",
                name: "updateitems",
                message: (chalk.bgYellow.black)("whtat you want todo?"),
                choices: todo
            });
            let update2 = await inquirer.prompt({
                type: "input",
                name: "updateitems2",
                message: (chalk.bgRed.black)("update items")
            });
            let newtodo = todo.filter(val => val != update.update2);
            todo = [...newtodo, update2.updateitems2];
        }
        if (operation.opertor == "delete") {
            let remove = await inquirer.prompt({
                type: "list",
                name: "removeitems",
                message: (chalk.bgGreen.black)("select items to delete"),
                choices: todo
            });
            if (operation.opertor !== "Exit") {
                let exit = await inquirer.prompt({
                    type: "confirm",
                    name: "exit",
                    message: (chalk.bgRed.black)("Exit this...")
                });
                if (exit.exit) {
                    break;
                }
            }
        }
    } while (true);
}
createtodo(todo);
