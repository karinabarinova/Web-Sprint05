//building.js code
// module.exports = class Building {
//     constructor(floors, material, address) {
//         this.floors = floors;
//         this.material = material;
//         this.address = address;
//     }

//     toString() {
//         var elevator = "-";
//         if (this.hasElevator)
//             elevator = "+";
//         return [
//             `Floors: ${this.floors}`,
//             `Material: ${this.material}`,
//             `Address: ${this.address}`,
//             `Elevator: ${elevator}`,
//             `Arc reactor capacity: ${this.arcCapacity}`,
//             `Height: ${this.height}`,
//             `Floor height: ${this.getFloorHeight()}`,
//         ].join('\n');
//     }
// };


const Building = require('./building');

class Tower extends Building {
    constructor(floors, material, address, hasElevator = false, arcCapacity = 0, height = 0) {
        super(floors, material, address)
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }
    getFloorHeight() {
        return this.height / this.floors;
    }
}

module.exports = Tower;

// test.js code
// const Tower = require('./tower');
// const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
// starkTower.hasElevator= true;
// starkTower.arcCapacity= 70;
// starkTower.height= 1130;
// console.log(starkTower.toString());

