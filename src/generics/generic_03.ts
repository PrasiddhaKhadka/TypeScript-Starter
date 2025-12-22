function createArray<T>(times:number, args:T):Array<T> {
    let tempArray:T[] = []

    for(let i=0; i<times; i++){
        tempArray.push(args)

    }
    return tempArray;
}


let helloWordlArray = createArray(10,'Hello World')
console.log(helloWordlArray)