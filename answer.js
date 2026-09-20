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



// Question 5: Run Chase Commentator · 15 marks
// Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

// Steps:

// runsNeeded = target - scored

// If runsNeeded is 0 or less, the match is already won → return "Won"

// Otherwise, if ballsLeft is 0 or less, there is no ball left to score → return "Lost"

// Otherwise, work out the required run rate:

// requiredRate = (runsNeeded / ballsLeft) * 6
// Pick the verdict from the rate:

// Required rate	Verdict
// 6 or less	"Comfortable"
// more than 6, up to 12	"Tough"
// more than 12	"Almost Impossible"
// Return this exact sentence:

// Need <runsNeeded> runs in <ballsLeft> balls | <verdict></verdict>




const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    if (runsNeeded <= 0) return "Won";
    else if (ballsLeft <= 0) return "Lost";
    else {
        requiredRate = (runsNeeded / ballsLeft) * 6;
        if (requiredRate <= 6) return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
        else if (requiredRate > 6 && requiredRate < 12) return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
        else return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }

}


console.log(getChaseVerdict(200, 190, 0));