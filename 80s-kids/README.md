## 80's Kids #1: How Many Licks Does it Take?

#### Link:
http://www.codewars.com/kata/566091b73e119a073100003a

#### Problem Domain:
How many licks does it take to get to the tootsie roll center of a tootsie pop?

A group of engineering students from Purdue University reported that its licking machine, modeled after a human tongue, took an average of 364 licks to get to the center of a Tootsie Pop. Twenty of the group's volunteers assumed the licking challenge-unassisted by machinery-and averaged 252 licks each to the center.

Your task, if you choose to accept it, is to write a function that will return the number of licks it took to get to the tootsie roll center of a tootsie pop, given some environmental variables.

Everyone knows it's harder to lick a tootsie pop in cold weather but it's easier if the sun is out. You will be given an object of environmental conditions for each trial paired with a value that will increase or decrease the number of licks. The environmental conditions all apply to the same trial.

Assuming that it would normally take 252 licks to get to the tootsie roll center of a tootsie pop, return the new total of licks along with the condition that proved to be most challenging (causing the most added licks) in that trial.

Other cases: If there are no challenges, the toughest challenge sentence should be omitted. If there are multiple challenges with the highest toughest amount, the first one presented will be the toughest. If an environment variable is present, it will be either a positive or negative integer. No need to validate.

#### Example:

    totalLicks({ "freezing temps": 10, "clear skies": -2 });
    Should return:
    
    "It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps."


## 80's Kids #2: Help ALF find his spaceship

#### Link:
http://www.codewars.com/kata/5660aa3d5e011dfd6e000063

#### Problem Domain:
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to it's location.

The map will be given in the form of a string with `\n` separating new lines. The bottom left of the map is `[0, 0]`. X is ALF's spaceship.

#### Example:

Given a map:

    ..........
    ..........
    ..........
    .......X..
    ..........
    ..........

    findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

    "Spaceship lost forever."

Can you help ALF?

## 80's Kids #3: Punky Brewster's Socks

#### Link:
http://www.codewars.com/kata/5662292ee7e2da24e900012f

#### Problem Domain:
Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

#### Examples:

    getSocks('Punky', ['red','blue','blue','green']) //=> ['red', 'blue']
    getSocks('Henry', ['red','blue','blue','green']) //=> ['blue', 'blue']

Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.


## 80's Kids #4: Legends of the Hidden Temple

#### Link:
http://www.codewars.com/kata/80-s-kids-number-4-legends-of-the-hidden-temple

#### Problem Domain:
You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.

With your last movements, you've decided to draw an "X" marks the spot for the next archaeologist.

Given an odd number, `n`, draw an X for the next crew. Follow the example below.

#### Examples:

    markSpot(5) ->
    
    X       X
      X   X
        X
      X   X
    X       X

For a clearer understanding of the output, let `.` represent a space and `\n` the newline.

    X.......X\n
    ..X...X\n
    ....X\n
    ..X...X\n
    X.......X\n

    markSpot(3) ->
    
    X   X
      X
    X   X


If `n = 1` return `X\n` and if you're given an even number or invalid input, return `'?'`.

The output should be a string with no spaces after the final X on each line, but a `\n` to indicate a new line.


## 80's Kids #5: You Can't Do That on Television

#### Link:
http://www.codewars.com/kata/80-s-kids-number-5-you-cant-do-that-on-television

#### Problem Domain:
There are just some things you can't do on television. In this case, you've just come back from having a "delicious" Barth burger and you're set to give an interview. The Barth burger has made you queasy, and you've forgotten some of the import rules of the "You Can't Do That on Television" set.

If you say any of the following words a large bucket of "water" will be dumped on you: `"water"`, `"wet"`, `"wash"` This is true for any form of those words, like `"washing"`, `"watered"`, etc.

If you say any of the following phrases you will be doused in "slime": `"I don't know"`, `"slime"`

If you say both in one sentence, a combination of water and slime, `"sludge"`, will be dumped on you.

Write a function, `bucketOf(str)`, that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with `"air"`. The words should be tested regardless of case.

#### Examples:
    
    bucketOf("What is that, WATER?!?") -> "water"
    bucketOf("I don't know if I'm doing this right.") -> "slime"
    bucketOf("You won't get me!") -> "air"


## 80's Kids #6: Rock 'Em, Sock 'Em Robots

#### Link:
https://www.codewars.com/kata/566b490c8b164e03f8000002

#### Problem Domain:
You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

Your job is to decide who wins.

#### Example:

     robot1 = {
      "name": "Rocky",
      "health": 100,
      "speed": 20,
      "tactics": ["punch", "punch", "laser", "missile"]
     }
     robot2 = {
       "name": "Missile Bob",
       "health": 100,
       "speed": 21,
       "tactics": ["missile", "missile", "missile", "missile"]
     }
     tactics = {
       "punch": 20,
       "laser": 30,
       "missile": 35
     }

     fight(robot1, robot2, tactics) //=> "Missile Bob has won the fight."
robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

##### Rules

- A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
- Robots alternate turns attacking. Tactics are used in order.
- A fight is over when a robot has 0 or less health or both robots have run out of tactics.
- A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
- If both robots run out of tactics, whoever has the most health wins. Return the message `"(name) has won the fight."`
- If both robots run out of tactics and are tied for health, the fight is a draw. Return `"The fight was a draw."`