// Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space
/* <type of the value> | <truthy or falsy></truthy> */


function describeValue(value) {
    return `${typeof value} | ${(value == "false" || 0 || null || undefined || NaN || '') ? "falsy" : "truthy"}`;
    //  return `${typeof value} | ${(!value) ? "falsy" : "truthy"}`;
}


console.log(describeValue("sjhfsbf"));