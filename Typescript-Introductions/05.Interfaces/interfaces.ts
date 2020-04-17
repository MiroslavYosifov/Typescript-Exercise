interface Vehicle2 {
    name: string,
    year: Date,
    broken: boolean,
    
}

interface Testing {
    summary(): string;
}



const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name ${this.name}`
    }
};

const coffe = {
    color: 'brown',
    year: new Date(),
    useful: false,
    summary(): string {
        return `Name ${this.color}`
    }
}

const printVehicle = (vehicle: Vehicle2): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
    
};

const test = (vehicle: Testing): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
test(coffe);