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