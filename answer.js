// Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space
/* <type of the value> | <truthy or falsy></truthy> */


function describeValue(value) {
    return `${typeof value} | ${(value == "false" || 0 || null || undefined || NaN || '') ? "falsy" : "truthy"}`;
    //  return `${typeof value} | ${(!value) ? "falsy" : "truthy"}`;
}





// Write a function getDayType that takes a day name and returns:

// Friday, Saturday	"Weekend"
// Sunday, Monday, Tuesday, Wednesday, Thursday	"Working Day"
// anything else	"Invalid Day"

function getDayType(day) {

    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("thursday"));






// Write a function validateUsername that takes a username and checks it against these rules, in this order:

// Shorter than 4 characters → return "Too Short"
// Contains a space → return "No Space Allowed"
// Contains the word admin anywhere, in any letter case → return "Reserved Word"
// Otherwise → return "Available"



function validateUsername(userName) {
    if (userName.length < 4) return "Too Short";
    else if (userName.includes(' ')) return "No Space Allowed";
    else if (userName.toLowerCase().includes('admin')) return "Reserved Word";
    else
        return "Available";
}


console.log(validateUsername("dhfjhdnkdAdmin"))









// Question 4: Dhaka CNG Fare Meter · 15 marks
// Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.

// Fare rules:

// The minimum fare is 50 taka, and it covers the first 2 km.
// Every km after the first 2 km costs 15 taka.
// Waiting charge: 2 taka for every waiting minute.
// At night, the driver adds 20% on the whole fare — that means on the distance charge and the waiting charge together.
// isNight should default to false and waitingMinutes should default to 0, so getCngFare(5) must work on its own


function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50 + (waitingMinutes * 2);
    if (distance > 2) {

        fare += (distance - 2) * 15;
    }
    if (isNight) {
        fare += fare * 0.2;
    }

    return fare;
}


console.log(getCngFare(5));