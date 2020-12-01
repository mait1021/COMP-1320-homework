// Observe the list of people below
const people = [{ name: "John Doe", age: 16 },
{ name: "Thomas Calls", age: 19 },
{ name: "Liam Smith", age: 20 },
{ name: "Jessy Pinkman", age: 18 }
];

// Observe the coffeeLovers list containing people who are coffee lovers
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

// use map, filter, and reduce to do the following:
/*
1. Filter all people above the age of 18 (use a function called ageAbove18)
2. Transform the people array so all people in the array who are in coffeeLovers have a property
   in their object called coffeeLover, set either to true or false. (Use a function called addCoffeeLoverProperty)
3. Get the total summed age of all people who are coffee lovers and above the age of 18 (Use a function called ageReducer)
*/

const ageAbove18 = (element, index, array) => {
    if (element.age >= 18) {
        return true;
    } else {
        return false
    }
};

const addCoffeeLoverProperty = (person) => {
    //check if a person's name is inside the coffeeLovers array
    let isCoffeeLover = coffeeLovers.includes(person.name);
    if (isCoffeeLover) {
        person.coffeeLover = true;
    } else {
        person.coffeeLover = false;
    }
    return person;
};

const ageReducer = (total, currentPerson) => {
    let isCoffeeLover = currentPerson.coffeeLover;
    if (isCoffeeLover) {
        return total + currentPerson.age;
    } else {
        return total;
    }
};

const coffeeLoversAbove18 = people.filter(ageAbove18).map(addCoffeeLoverProperty);

const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer,0);

console.log(totalAgeOfCoffeeLoversAbove18);
