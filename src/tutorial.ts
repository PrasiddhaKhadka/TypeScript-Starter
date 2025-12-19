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
