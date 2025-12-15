const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

const team2 = { ...team1 };
team2.wins = 50;
team2.losses = 15;

/* 
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: Because objects are assigned by reference in JavaScript, team2 and team1 point to the same object in memory. Updating team2 mutates that shared object.

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/

console.log(team1.wins); // 45
console.log(team2.wins); // 50
