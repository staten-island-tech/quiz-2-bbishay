let scoreJohn = [890, 120, 103];
let scoreMike = [116, 94, 123];
//score 89 was changed to 890
let averageJohn = (scoreJohn[0] + scoreJohn[1] + scoreJohn[2]) / 3;
let averageMike = (scoreMike[0] + scoreMike[1] + scoreMike[2]) / 3;

averageJohn > averageMike ? console.log(`John wins with an average of ${averageJohn} points!`) : console.log(`Mike wins with an average of ${averageMike} points!`);