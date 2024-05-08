//import classes from other files 

import inquirer from "inquirer"
import { Person } from "./person.js"
import { Student } from "./student.js"

//Create a class with method property
class Program {
    static async main(args: string[])
    {
        //use a try catch that prevent a error 

        //Giving prompt to user for getting answer
        try {
            let input = await inquirer.prompt({
                type: "input",
                name: "Answer",
                message: "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself"
            })

            //create a instance of Person class
            let myPerson = new Person() 
            myPerson.askQuestion(parseInt(input.Answer))
            console.log(`you are: ${myPerson.getPersonality()}`)

            let name = await inquirer.prompt({
                type: "input",
                name: "Name",
                message: "What is your Name"
            })

            // Create a instance of Student Class
            let myStudent = new Student()
            myStudent.Name = name.Name
            console.log(`Your Name is ${myStudent.Name} and your personality type is ${myStudent.getPersonality()}`)
        } catch (error) {
            console.log("Please enter a number value")
        }
       


    }    
}
Program.main([]);  //Invoking Method/Function with class
    