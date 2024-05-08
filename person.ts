export class Person {
    //declare a field to represent personality
    private personality: string;

    constructor(){
        this.personality = "Mystery"
    }

    askQuestion(answer: number): void{
        if(answer == 1){
            this.personality = "Extravert"
        }else if(answer ==2){
            this.personality = "Introvert"
        }else{
            this.personality = "You are still a Mystery"
        }
    }

    //This return the value of personality
    getPersonality(){
        return this.personality
    }
}