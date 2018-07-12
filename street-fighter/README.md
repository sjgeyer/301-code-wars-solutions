# Street Fighter 2 - Character Selection

#### Link:
https://www.codewars.com/kata/5853213063adbd1b9b0000be

#### Problem Domain:
Short Intro

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

The Kata

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:


    | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
    | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
##### INPUT
1. the list of game characters in a 2x6 grid
2. the initial position of the selection cursor (top-left is (0,0))
3. a list of moves of the selection cursor (which are up, down, left, right)

##### Output
- the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

##### Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice : changing some of the input data might not help you.

#### Examples


    fighters = [
        ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
        ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['up', 'left', 'right', 'left', 'left']

then I should get:

    ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

    
    fighters = [
        ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
        ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:

    ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

## Street Fighter 2 - Character Selection - Part 2

#### Link:
https://www.codewars.com/kata/58583922c1d5b415b00000ff

#### Problem Domain:
This is the rightful continuation to this easier Kata here and some rules are the same with few substantial alterations.

This time we have to deal with a situation like Super Street Fighter 2 Selection Screen:

    |        | Ryu    | E.Honda  | Blanka  | Guile   |         |
    | Balrog | Ken    | Chun Li  | Zangief | Dhalsim | Sagat   |
    | Vega   | T.Hawk | Fei Long | Deejay  | Cammy   | M.Bison |

As you may see, we now have 16 characters on 3 rows. You might think: let's make an array of 3 arrays! But that's not enough.

The first character of the first row (Ryu) is not aligned with the first of the second row (Balrog) but with the second (Ken) and the same goes with the other side; therefore we need to introduce something new, like an offset: the Empty Space.

The empty space, represented as empty string "", will allow us to keep the grid aligned and rectangular, with spaces that won't be selectable. In this case we need 2 empty spaces (3 rows x 6 columns = 18 slots, 18 slots - 16 characters = 2 empty spaces).

The moves of the selection cursor are the same as before: rotate horizontally but stop vertically. When you find empty spaces (1 or more) you need to skip them if you approach them horizontally and get to the next selectable slot with the next fighter on the left or right; and if you approach them vertically you need to just stop and stay where you are.

Example: if you are on Ryu and move left, you must get to Guile; if you are on Balrog and move up, you must stay on Balrog.

##### Notice: I might put empty spaces right in the middle and the rectangular grids can be any size, not only 3x6, deal with this too.

WHAT'S NEW

So, let's resume what are the new issues in this harder version of the Kata:

- The initial position might be any non-empty slot in the grid (given as input).
- The characters grid (also given as input) might have any rectangular layout, not only 3 rows.
- The grid might contain empty spaces, both on the borders or right in the middle.

##### INPUT

1. Fighters grid
2. Initial position
3. List of moves

The third input parameter is still the list of moves (all valid ones: left, right, up or down).

##### OUTPUT

The output is the same as before: the list of characters that have been hovered by the selection cursor after each move, successful or not.