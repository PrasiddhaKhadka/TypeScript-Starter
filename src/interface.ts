interface Computer{
    readonly id:number,
    brand:string,
    ram: number,
    storage?:string,
    upgradeRam(ramSize: number): number
}


const legion: Computer = {
    id:124,
    brand:'Acer',
    ram:10,
    storage:'1tb',
    upgradeRam(ramSize) {
        this.ram += ramSize;
        return ramSize;
    },
}


const updatedRam = legion.upgradeRam(16)

console.log('&&& &&& &&&');
console.log(updatedRam)
console.log('&&& &&& &&&');
console.log(legion)