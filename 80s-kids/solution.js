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
// #2 - Help ALF find his spaceship
// -----------------------------------------------
function findSpaceship(map) {
  if (!map) return 'Spaceship lost forever.';
  const split = map.split('\n').reverse();
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      if (split[i][j] === 'X') return [j, i];
    }
  }
  return 'Spaceship lost forever.';
}

// -----------------------------------------------
// #3 - Punky Brewster's Socks
// -----------------------------------------------
function getSocks(name, socks) {
  const sockPair = [socks[0]];
  let currentSockIndex = 1;
  const addSock = () => {
    if (name === 'Punky') {
      for (let i = currentSockIndex; i < socks.length; i++) {
        if (socks[i] !== sockPair[0]) {
          sockPair.push(socks[i]);
          break;
        }
      }
    } else {
      for (let i = currentSockIndex; i < socks.length; i++) {
        if (socks[i] === sockPair[0]) {
          sockPair.push(socks[i]);
          break;
        }
      }
    }
  };
  while (sockPair.length < 2 && currentSockIndex < socks.length) {
    addSock();
    if(sockPair.length < 2) sockPair[0] = socks[currentSockIndex];
    currentSockIndex++;
  }
  if (sockPair.length < 2) {
    return [];
  }
  return sockPair;
}

// -----------------------------------------------
// #4 -
// -----------------------------------------------
function markSpot(n) {
  if (n === 1) return 'X\n';
  if (n%2 === 0 || typeof n !== 'number' || n < 0) return '?';
  const x = Array(n).fill(0);
  const lineLength = n * 2 - 3;
  const mid = Math.ceil(x.length / 2);
  for (let i = 0; i < mid; i++) {
    let middle = lineLength - (4 * i);
    middle = middle < 0 ? 0 : middle;
    if (i === mid - 1) {
      x[i] = x[n - i - 1] = `${' '.repeat(i * 2)}X\n`
    } else {
      x[i] = x[n - i - 1] = `${' '.repeat(i * 2)}X${' '.repeat(middle)}X\n`
    }
  }
  return x.join('');
}

// -----------------------------------------------
// #5 -
// -----------------------------------------------


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