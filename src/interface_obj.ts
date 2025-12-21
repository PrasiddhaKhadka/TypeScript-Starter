// // MERGING AND EXTENDING 

// //1. MERGING
// interface Person{
//     id:number,
//     name:string,
//     getPersonDetails():string
// }


// interface DogOwner{
//     dog_id:number,
//     dogName:string,
//     getDogDetails():string
// }

// // --> MERGING IN HERE <--
// interface Person{
//     age: number,
// }


// const person: Person = {
//     id:1,
//     name:'Ram',
//     age:40,
//     getPersonDetails() {
//         return `${this.name} is ${this.age} years old`;
//     },
// }

// console.log(person)
// const personDetails = person.getPersonDetails()
// console.log(personDetails)



// // 2. EXTENDING

// interface Employee{
//     name:string,
//     age:number
// }

// interface Employee extends Person{
//     employee_id: number
// }


// const employee:Employee ={
//     id:1,
//     name:'jane',
//     age:28,
//     employee_id:1,
//     getPersonDetails() {
//         return ``
//     },
// }



// CHALLENGES!!
interface Person{
    name: string
}

interface DogOwner extends Person{
    dogname:string
}

interface Manager extends Person{
    managePeople():void;
    delegateTasks():void;
}


const getEmployee=():(Person | DogOwner | Manager) =>{
    const randomNumber = Math.random();

    const personObj: Person ={
        name:"Ram"
    }

    const dogObj: DogOwner ={
        dogname:'Bruce',
        name:'Wayne'
    }

    const manager: Manager ={
        managePeople() {
            console.log("Managing the people....")
        },
        delegateTasks() {
            console.log('Delegating the tasks....')
        },
        name:'Prasiddha'
    }

    if(randomNumber < 0.33){
        return personObj
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66){
        return dogObj;
    }else{
        return manager;
    }
}


const employee: Person | DogOwner | Manager = getEmployee()

console.log(employee)