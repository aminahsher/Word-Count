#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`your sentence word count ${words.length}`);
