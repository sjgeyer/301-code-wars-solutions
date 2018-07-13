// -----------------------------------------------
// #1 - How many Licks Does it Take?
// -----------------------------------------------
function totalLicks(env) {
  let baseLicks = 252;
  const envVariables = Object.keys(env).sort((a, b) => env[b] - env[a]);
  envVariables.forEach(condition => {
    baseLicks = baseLicks + env[condition];
  });
  if (env[envVariables[0]] > 0) {
    return `It took ${baseLicks} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${envVariables[0]}.`;
  }
  return `It took ${baseLicks} licks to get to the tootsie roll center of a tootsie pop.`;
}

// -----------------------------------------------
// #6 - Rock 'em Sock 'em Robots
// -----------------------------------------------
function fight(robot1, robot2, tactics) {
  let player1, player2;
  if (robot1.speed < robot2.speed) {
    player1 = robot2;
    player2 = robot1;
  } else {
    player1 = robot1;
    player2 = robot2;
  }
  let player1Index = player2Index = 0;
  while (player1.health > 0 && player2.health > 0 && (player1Index < player1.tactics.length || player2Index < player2.tactics.length)) {
    if(player1.tactics[player1Index]) {
      player2.health = player2.health - tactics[player1.tactics[player1Index]];
      player1Index++;
    }
    if (player2.health <= 0) break;
    if(player2.tactics[player2Index]) {
      player1.health = player1.health - tactics[player2.tactics[player2Index]];
      player2Index++;
    }
  }
  if (player1.health === player2.health) {
    return 'The fight was a draw.'
  } else if (player1.health > player2.health) {
    return `${player1.name} has won the fight.`
  }
  return `${player2.name} has won the fight.`;
}