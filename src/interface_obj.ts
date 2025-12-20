// MERGING AND EXTENDING 

//1. MERGING
interface Person{
    id:number,
    name:string,
    getPersonDetails():string
}


interface DogOwner{
    dog_id:number,
    dogName:string,
    getDogDetails():string
}

// --> MERGING IN HERE <--
interface Person{
    age: number,
}


const person: Person = {
    id:1,
    name:'Ram',
    age:40,
    getPersonDetails() {
        return `${this.name} is ${this.age} years old`;
    },
}

console.log(person)
const personDetails = person.getPersonDetails()
console.log(personDetails)



// 2. EXTENDING

interface Employee{
    name:string,
    age:number
}

interface Employee extends Person{
    employee_id: number
}


const employee:Employee ={
    id:1,
    name:'jane',
    age:28,
    employee_id:1,
    getPersonDetails() {
        return ``
    },
}



// CHALLENGES!!


