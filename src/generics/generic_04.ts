// GENERIC MUTLIPLE TYPES

function pair<T,U>(param1:T, param2:U):[T,U]{
    return [param1,param2];
}

let result = pair(1,'Hello')
console.log(result);


// REACT : USESTATE HOOK IS ALSO A GENERIC
// const [name, setName] = useState('')
// const [products, setProducts] = useState<Product[]>([])



// LIMITING THE GENERICS
// the T must be only string
function processValue<T extends string>(param:T[]):Array<T>{
    return param ;  
}

// T extends Student(type) 
// T extends Vehicles(interface)




// DEFAULT TYPE

