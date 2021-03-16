import Person from "./person.js"
import sort from "./module.js"

const _ = require('lodash');

let personObj1 = new Person("Tony Stark", 30, "ironman@stark.com");
let personObj2 = new Person("Steve Rogers", 50, "steve@captainamerica.com");

console.log(personObj1.sayHello());
console.log(personObj2.sayHello());


console.log(sort([1, 3, 5, 7, 2, 4, 9, 6, 8]));

let users = [
  {
    "name": "Bruce",
    "age": 31
  }, 
  {
    "name": "Natasha",
    "age": 26
  }, 
  {
    "name": "Peter",
    "age": 18
  }
];

const age = (val) => val.age < 30;

const filterArray = (user) => {
  return user.filter(age);
} 
console.log(filterArray(users));

//Filter using lodash
const lodash_filter = _.filter(users, function(o) {
  return o.age < 30;
});
console.log(lodash_filter);
