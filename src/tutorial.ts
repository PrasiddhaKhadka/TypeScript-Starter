let awesome:string = 'shakeandbake';
awesome = 'something';
awesome = awesome.toUpperCase()
console.log(awesome)

let amount: number = 20
amount = 12-1
console.log(amount)

let isAwesome:boolean = true
console.log(isAwesome)


//  #challenges

let name: string = 'Prasiddha'
const changeName = ()=>{
    name = 'Prasiddha Khadka'
    return name;
}
console.log(changeName())


// #UNION TYPES
let tax: Number | string = 100
tax = '$100'
console.log(tax)


let requestSuccess: 'pending' | 'success' | 'error' = 'pending';
requestSuccess= 'error'
requestSuccess='pending'
requestSuccess= "success"



// 
const bookList = ['1984','Brave new world','Fahrenhit']
console.log(bookList.length)

for (let i of bookList){
    if(i === '1984'){
        console.log('FOUND IT!')
        break;
    }
}



// Functions
function sayHello(name:string){
    console.log(`Hello !!! ${name}`)
}


function calculateDiscount(price:number):number{
    return price* 0.9;
}

sayHello('Ram')
const discountedPrice:number = calculateDiscount(111)
console.log(discountedPrice);


// ARRAYS IN TYPESCRIPT:
const names:string[] = ['Ram','Sam','Hari','Gita','Babita']
// let isExist:boolean = false;

function nameExist(searchName: string): boolean {
    for (let name of names) {
        if (name === searchName) {
            return true;
        }
    }
    return false;
}

// function nameExist(searchName: string): boolean {
//     return names.includes(searchName);
// }



console.log(names);
const existName = nameExist('Ram')

console.log("*** **** *****")
console.log(existName)
console.log("*** **** *****")


console.log("^^^^^^ ^^^^^^ ^^^^^^")
const existNameNew = nameExist('vnvnvvn')
console.log(existNameNew)
console.log("*** **** *****")