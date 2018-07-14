# str-to-obj
Get an object from a string which is separated by some endpoints

## Example

### Code

```bash 

const stringToObject = require('str-to-obj');

const queryString = 'type:car,color:blue,year:2005';
const myObject = stringToObject(queryString, ',', ':');

console.log(myObject);

```

### Result

``` bash

{
    type: 'car',
    color: 'blue',
    year: '2005'
}

```