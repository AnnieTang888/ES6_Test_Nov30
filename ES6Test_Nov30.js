
const heroes = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Magneto', family: 'Marvel', isEvil: true },
    { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Saruman', family: 'Tolkien', isEvil: true }
]

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes not evils
const notEvilHeroes = heroes.filter(hero => !hero.isEvil);
console.log("Non-evil heroes:", notEvilHeroes);

// b. Print Unique family names
const unique = [...new Set(heroes.map(hero => hero.family))];
console.log("Unique family names:", unique);

// c. Print Hero Names from given objects, and append sir in each of them before printing
const heroWSir = heroes.map(hero => `Sir ${hero.name}`);
console.log("Hero names with 'Sir':", heroWSir);

// d. Do we have any hero in Marvel Family who is not evil
const nonEvilM = heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log("Any non-evil hero in Marvel family:", nonEvilM);

// Original heroes array remains unchanged
console.log("Original heroes array:", heroes);

//---------------------------------------------------------------------------------------------------------------

//2. give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//creating a map
let emap = new map();

// setting values
emap.set('san jose', 66678);
emap.set('san diego', 56998);
emap.set('san francisco', 43123);

// getting values
console.log("zip code of san francisco:", emap.get('san francisco')); //output is 43123

// checking if a key exists
console.log("is san jose in the map?", emap.has('san jose')); //output is true
// deleting a key-value pair
emap.delete('san diego');

// clearing all key-value pairs
emap.clear();

// displaying the size of the map after clearing
console.log("size of the map after clearing:", emap.size); // output: size of the map after clearing: 0


//create a new set 
let fset = new set();

// adding values
fset.add('apple');
fset.add('orange');
fset.add('banana');

// checking if a value exists
console.log("is apple in the set?", fset.has('apple')); // output: is apple in the set? true

// deleting a value
fset.delete('apple'); //output : 0

// clearing all values
fset.clear();

// displaying the size of the set after clearing
console.log("size of the set after clearing:", fset.size); // output: size of the set after clearing: 0

//------------------------------------------------------------------------------------------------------------------------


//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        // Resolve the promise after two seconds
        resolve({
            ES6feature1: 'forIn_forOf',
            ES6feature2: 'promise',
            ES6feature3: 'destructuring',
            ES6feature4: 'map_and_set',
            ES6feature5: 'templateliteral',
        });
    }, 2000);

    // rejection after three seconds
    setTimeout(() => {

        reject(new Error('Promise rejected after three seconds'));
    }, 3000);
});

// Handling the promise
myPromise
    .then((features) => {
        console.log('ES6 Features:', features); // This will be called if the promise is resolved
    })
    .catch((error) => {
        console.error(error.message); // This will be called if the promise is rejected
    });

 //-------------------------------------------------------------------------------------------------------------------------------

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

function multiplyNumbers(...numbers) {

    const result = numbers.reduce((product, number) => product * number, 1);
    return result;
}

// Multiply numbers from 1 to 5
const result = multiplyNumbers(1, 2, 3, 4, 5);
console.log('Result:', result); // Output: Result: 120

// using spread to print students of a session
function printStudents(session, ...students) {
    console.log(`Students of ${session} session:`);
    students.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });
}

// Example: Print students of a JavaScript session
const jsSessionStudents = ['Annie', 'John', 'Joy', 'katie'];
printStudents('JavaScript', ...jsSessionStudents);

//-------------------------------------------------------------------------------------------------------------------------------------------------

//5. Print the last name through destructuring and add a contact number:9119119110 as well

const person = {
    userDetails: {
        first: "FirstName",
        last: "LastName"
    }
};

// Destructuring to get the last name
const { userDetails: { last }, contactNumber = "9119119110" } = person;

// Printing the last name and adding a contact number
console.log("Last Name:", last);
console.log("Contact Number:", contactNumber);

//---------------------------------------------------------------------------------------------------------------------------------------------------

//6. Give me an example of const data manipulation
const trainee = {
    name: "Annie",
    ID: 888
};

// Modifying internal properties of the object is allowed
trainee.ID = 666;
trainee.address = "San Jose";

console.log(trainee);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//7. What is the difference between for-of and for-in show with examples
//for-of
const flowers = ['Lily', 'Rose', 'Tulip'];

for (const type of flowers) {
    console.log(type);
}

//for-in
const student = {
    name: 'Annie',
    ID: 888,
    class: 'Mernstack'
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

//forin & forof difference:
//forin: iterates over the string properties of an object.
//forof: iterates over values of the iterable object.

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//8. Give me an example of bind and write its usage, comparison with arrow function
function course(name) {
    console.log(`Hi, ${name}!  ${this.name} is very interesting.`);
}

// Object to bind the function to
const subject = {
    name: 'Javascript',
};

// Using bind to create a new function with a specific context
const bindsubjectcourse = course.bind(subject);

// Calling the bound function
bindsubjectcourse('Annie');
// Output: Hello, Alice! My name is John.

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//9. Create an example showing usage of event loop in concurrent execution cycle
// Function to simulate an asynchronous operation
function asyncOp(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} completed after ${time} milliseconds`);
        }, time);
    });
}

// Concurrent execution using the event loop
async function concurrentExecutionCycle() {

    // First async operation
    const res1 = await asyncOp('step 1', 1500);
    console.log(res1);

    // Second async operation
    const res2 = await asyncOp('step 2', 2000);
    console.log(res2);

    // Third async operation
    const res3 = await asyncOp('step 3', 3000);
    console.log(res3);

    console.log('Complete');
}
concurrentExecutionCycle();

//----------------------------------------------------------------------------------------------------------------------------------------------

//10. create an example showing usage of short hand, default param and template literal.
function cat(name = 'Fat', age = 2, food = 'fish') {
    return {
        name,
        age,
        food,
        intro() {
            return `This is ${this.name}, she is ${this.age} years old, and she loves ${this.food}.`;
        },
    };
}

// default parameters
const cat1 = cat();
console.log(cat1.intro());

// customized parameters
const cat2 = cat('Furry', 3, 'salad');
console.log(cat2.intro());