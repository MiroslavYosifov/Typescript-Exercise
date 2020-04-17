const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// First way
type Drink = [string, boolean, number];
const cola: Drink = ['brown', true, 40];

// Second way
// order is specific
const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';
pepsi[0] = "brown";
pepsi[2] = 40;