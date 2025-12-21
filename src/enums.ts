// enum ServerResponseStatus {
//     Success,
//     Error,
// }

type ServerResponseStatus= 'Success'| 'Error'

interface ServerResponse{
    status:ServerResponseStatus,
    data:string[]
}

function getServerResponse():ServerResponse{
    return{
        status:'Success',
        data:['first item','second item']
    }
}

const response:ServerResponse = getServerResponse()

console.log(response)



// CHALLANGES 


type UserRoles='Admin'|'Manager'|'Employee'

type User = {
    id:number,
    name:string,
    role: UserRoles
    contacts:[email:string,phone:string]
}

function createUser(user: User): User{
    return user;
}

const ram:User = {
        id:1,
        name:'Ram',
        role:'Admin',
        contacts:['ram@gmail.com','9807712221']
    }

const userValues = createUser(ram)
console.log(userValues)