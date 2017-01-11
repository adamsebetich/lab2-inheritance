class Car {
    //attributes
    //private color: string; have only one, either this or just input it below to have the same effect
    private price: number;
    private features: string[] = ["transmission", "power steering", "whatever"];

    constructor(private color:string, thePrice:number = 10000) { // having equals makes set price
        // this.color = theColor;
        this.price = thePrice;
    }
    drive() :void { // we do not need :void cuz it will imply that it will not reply something 
        console.log('The ${this.color} car drives.');
        //console.log("The "+this.color+" car drives.");
    }

    listFeatures() { // for each does not change the array, map changes the array
        this.features.forEach((feature) => { //this arrow function is essential to help the forEach to work
            console.log("Includes: "+feature+" at "+this.price);
        })
    }
}

let redCar:Car = new Car("red", 12000);
let blueCar:Car = new Car("blue", 13000)

redCar.drive();
redCar.listFeatures();
blueCar.drive();