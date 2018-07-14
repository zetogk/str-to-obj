'use strict';

exports.stringToObject = (str, propertySeparator, valueSeparator) => {

    const objectToReturn = {};

    str.split(propertySeparator).forEach(propertyValueStr => {

        const propertyValueArr = propertyValueStr.split(valueSeparator);
        objectToReturn[propertyValueArr[0]] = propertyValueArr[1] || null;

    });

    return objectToReturn;

};
