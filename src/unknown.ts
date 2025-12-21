
let unknownValue: unknown

unknownValue = 'Hello World'
unknownValue = true
unknownValue = 93.569999


// to check the type 
if(typeof unknownValue === 'number'){
   unknownValue.toFixed(2)    
}


//      BASICS 

try {

    // if the case is like this
    throw 'something went wrong' /// can not get error.message in catch(error) block 👌🏼

    // will be initated by 
    throw new Error(' WILL BE INITATING THE {error.message in herer}')
    
} catch (error) {
    // error is unknown in here !!
    console.log(error);

    // error.message
}




// MORE ADVANCED 

function runSomeCode(){
    const randomVal = Math.random()
    if(randomVal > 0.5){
        throw new Error('SOMETHING IS WRONG')
    }
    else{
        throw 'something is wrong in!!'
    }
}


try {
    runSomeCode()
} catch (error) {
    if(error instanceof Error){
        // throw new Error('SOMETHING IS WRONG')
        console.log(error.message);
    }
    else{
        // throw 'something is wrong in!!'
        console.log(error);
        
    }
}