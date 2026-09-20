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