// Write a function validateUsername that takes a username and checks it against these rules, in this order:

// Shorter than 4 characters → return "Too Short"
// Contains a space → return "No Space Allowed"
// Contains the word admin anywhere, in any letter case → return "Reserved Word"
// Otherwise → return "Available"



function validateUsername(userName) {
    if (userName.length < 4) return "Too Short";
    else if (userName.includes(' ')) return "No Space Allowed";
    else if (userName.includes('admin')) return "Reserved Word";
    else
        return "Available";
}


console.log(validateUsername("dhfjhdnkd"))