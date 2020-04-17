class Vehicle {
    constructor (public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
// vehicle.honk();

class Car extends Vehicle {
    private drive(): void {
        console.log('vroom');   
    }

    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const ladaCar = new Car();
// ladaCar.drive();
// ladaCar.honk();
