// ABOUT FUNCTION IS TS

function calculatePrice(
    price:number, 
    discount?:number
):number {
    // discount?: number -> OPTIONAL
    return price - (discount || 0);
    // discount not null then discount else 0;
}

const totalPrice = calculatePrice(100,20)

console.log(totalPrice)



// DEFAULT PARAMETERES
function calculateScore(
    initialScore:number, 
    penaltyPoints:number= 100
):number{
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(150);
console.log(scoreAfterPenalty)



// REST PARAMETERS
function sum(messgae:string, ...numbers:number[]):string{
    const doubled = numbers.map((num)=> num*2);
    console.log(doubled);

    let total = numbers.reduce((previous,current)=>{
        return previous + current;
    },0);


    return `${messgae}${total}`

}

let result = sum('The total is: ', 1,2,3,4,5)
console.log(result)




// VOID RETURN TYPE IN JS 
function logMessages(messages: string):void{
    console.log(messages);
}

console.log(logMessages('Unauthenticated Error!!'))



// CHALLENGE
function processInput(parameter: string | number) {
    if(typeof(parameter) === 'number'){
        console.log('It is a number')
        console.log(parameter * 2)
    }
    else if( typeof(parameter) === 'string'){
        console.log('It is a string')
        console.log(parameter.toUpperCase())

    }
    // console.log(typeof(parameter))
}

console.log(processInput('Hello Process Input'))



// OBJECT AS PARAMETERS CHALLENGES

function processedData(input: string | number , 
    config:{reverese:boolean}={reverese: false}
): number | string {
    if(typeof(input) === 'number'){
        return input ** 2
    }
    else{
        return config.reverese? 
        input.toUpperCase().split(' ').reverse().join(' '):
        input.toUpperCase();
    }
}


console.log(processedData('Hello World',{
    reverese:true
}));