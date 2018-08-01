const fruit = (reels, spin) => {
  const scoring = {
    wild: { all: 100, score: 0 },
    star: { all: 90, score: 0 },
    bell: { all: 80, score: 0 },
    shell: { all: 70, score: 0 },
    seven: { all: 60, score: 0 },
    cherry: { all: 50, score: 0 },
    bar: { all: 40, score: 0 },
    king: { all: 30, score: 0 },
    queen: { all: 20, score: 0 },
    jack: { all: 10, score: 0 },
  };

  const results = [reels[0][spin[0]], reels[1][spin[1]], reels[2][spin[2]]];

  results.forEach((result) => {
    scoring[result.toLowerCase()].score++;
  });

  let score = 0;

  Object.keys(scoring).forEach((item) => {
    const currItem = scoring[item];
    if (currItem.score === 3) score = currItem.all;
    else if (currItem.score === 2) {
      score = currItem.all / 10;
      if (item !== 'wild' && scoring.wild.score) {
        score = currItem.all / 5;
      }
    }
  });
  return score;
};
