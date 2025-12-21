let someValue: any = 'this is a string'

let strlength: number= (someValue as string).length


type Bird = {
    name: string;
}

type Dog={
    name:string,
    breed:string
}

let birdString = '{"name":"Eagle","family":"pred"}';
let dogString = '{"breed":"Poodle"}';


let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);


let bird = birdObject as Bird
console.log(bird.name) // but cannot access the family !!!


let dog = dogObject as Dog
console.log(dog.breed,dog.name); // name will be undefined
