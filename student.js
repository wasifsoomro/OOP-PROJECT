import { Person } from "./person.js";
// Here we can either write or read data to this class
export class Student extends Person {
    //Private field (Backing field ) hold any data assigned name property
    _name;
    constructor() {
        super();
        this._name = " ";
    }
    //This is the name property
    //use get accesor to read a data from a class 
    get Name() {
        return this._name;
    }
    //The value property of set accessor is automatically created by the compiler
    set Name(value) {
        this._name = value;
    }
}
