// WHAT IF THERE WERE NO GENERIC

function createString(arg:string):string{
    return arg;
}


function createNumber(arg:number):number{
    return arg;
}



// AFTER GENERIC ......

function genericFucntion<T>(arg:T):T{
    return arg
}

const someStringValue = genericFucntion<String>('Hello World!');
const someNumberValue = genericFucntion<number>(1)


// WITH INTERFACE

interface GenericInterface<T>{
    value:T,
    getValue:()=>T,
}

const genericString: GenericInterface<string>={
    value:"Hello World",
    getValue() {
        return this.value
    },
}



// FOR ASYNC : async returns promise<T>
async function someFunc():Promise<string>{
    return 'Hello Word'
}
const result = someFunc()