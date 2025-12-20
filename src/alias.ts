type User={
    id: number,
    name: string,
    isActive: boolean
}


function user(userDetails: User):User{
    return userDetails;
}

const firstUser: User = {
        id:1,
        name:"Ram",
        isActive:true,
    }

console.log(user(firstUser))



// ADDITIONAL INFO:

type StringOrNumber = string | number;

let value : StringOrNumber

value = 'Hello';
value=123;




type Theme = 'light' | 'dark'
let theme: Theme

theme = 'dark'
theme = 'light'


function setTheme(t: Theme){
    theme = t;
}


setTheme('dark')



// CHALLENGES
type Employee={
    id: number,
    name: string,
    department:string
}

type Manager={
    id:number,
    name:string,
    employees: Employee []
}

type Staff= Employee | Manager


function printStaffDetails(staff: Staff){
    if('employees' in staff){
            console.log(`${staff.name} is an Manager`)
    }else{
        console.log(`${staff.name} is an employee in the ${staff.department}`)
    }
}


const alice:Employee = {
    id:1,
    name:"Prasiddha",
    department:'It'
}

const steve:Employee = {
    id:1,
    name:"Prasiddha",
    department:'Finance'
}

const bob:Manager = {
    id:1,
    name:"Prasiddha",
    employees:[alice,steve]
}





printStaffDetails(alice)
printStaffDetails(steve)
printStaffDetails(bob)
