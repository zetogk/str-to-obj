'use strict';

const stringToObject = require('./index');

const queryString = 'type:car,color:blue,year:2005';
const myObject = stringToObject(queryString, ',', ':');

console.log(myObject);
