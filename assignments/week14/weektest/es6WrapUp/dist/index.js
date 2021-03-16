"use strict";

var _person = _interopRequireDefault(require("./person.js"));

var _module = _interopRequireDefault(require("./module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ = require('lodash');

var personObj1 = new _person["default"]("Tony Stark", 30, "ironman@stark.com");
var personObj2 = new _person["default"]("Steve Rogers", 50, "steve@captainamerica.com");
console.log(personObj1.sayHello());
console.log(personObj2.sayHello());
console.log((0, _module["default"])([1, 3, 5, 7, 2, 4, 9, 6, 8]));
var users = [{
  "name": "Bruce",
  "age": 31
}, {
  "name": "Natasha",
  "age": 26
}, {
  "name": "Peter",
  "age": 18
}];

var age = function age(val) {
  return val.age < 30;
};

var filterArray = function filterArray(user) {
  return user.filter(age);
};

console.log(filterArray(users)); //Filter using lodash

var lodash_filter = _.filter(users, function (o) {
  return o.age < 30;
});

console.log(lodash_filter);