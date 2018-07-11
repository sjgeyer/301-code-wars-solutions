# 1
#### Link:
https://www.codewars.com/kata/57fae964d80daa229d000126

#### Problem Domain:
Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

#### Examples:

    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi!!"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi! Hi"
    remove("Hi") === "Hi"

# 2
#### Link:
https://www.codewars.com/kata/57faece99610ced690000165

#### Problem Domain:
Description:
Remove all exclamation marks from the end of sentence.

#### Examples:

    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi"
    remove("!Hi") === "!Hi"
    remove("Hi! Hi!") === "Hi! Hi"

# 3
#### Link:
https://www.codewars.com/kata/57faefc42b531482d5000123

#### Problem Domain:
Description:
Remove all exclamation marks from sentence except at the end.

#### Examples:

    remove("Hi!") == "Hi!"
    remove("Hi!!!") == "Hi!!!"
    remove("!Hi") == "Hi"
    remove("Hi! Hi!") == "Hi Hi!"

# 4
#### Link:
https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

#### Problem Domain:
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

#### Examples:

    remove("Hi!!!") === "Hi!"
    remove("!Hi") === "Hi!"
    remove("Hi! Hi!") === "Hi Hi!"
    remove("Hi") === "Hi!"

# 5
#### Link:
https://www.codewars.com/kata/57faf32df815ebd49e000117

#### Problem Domain:
Description:
Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.

#### Examples:

    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi"
    remove("!Hi") === "!Hi"
    remove("Hi! Hi!") === "Hi Hi"

# 6
#### Link:
https://www.codewars.com/kata/57faf7275c991027af000679

#### Problem Domain:
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

#### Examples:

    remove("Hi!!!",1) === "Hi!!"
    remove("Hi!!!",100) === "Hi"
    remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"

# 7
#### Link:
https://www.codewars.com/kata/57fafb6d2b5314c839000195

#### Problem Domain:
Description:
Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.

#### Examples:

    remove("Hi!") === ""
    remove("Hi Hi! Hi!") === "Hi"
    remove("Hi! Hi!! Hi!") === "Hi!!"
    remove("Hi! !Hi! Hi!") === "!Hi!"

# 8
#### Link:
https://www.codewars.com/kata/57fafd0ed80daac48800019f

#### Problem Domain:
Description:
Move all exclamation marks to the end of the sentence

#### Examples:

    remove("Hi!") === "Hi!"
    remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"

# 9
#### Link:
https://www.codewars.com/kata/57fb017d9610ce369a0006ac

#### Problem Domain:
Description:
Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

#### Examples:

    removeOrAdd("Hi!") === "Hi"
    removeOrAdd("Hi! Hi") === "Hi Hi!"
    removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"

# 10
#### Link:
https://www.codewars.com/kata/57fb04649610ce369a0006b8

#### Problem Domain:
Description:
Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word. Words are separated by spaces in the sentence. Please note: only can remove, can not append.

#### Examples:

    remove("Hi!") === "Hi"
    remove("!Hi! Hi!") === "!Hi! Hi"
    remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
    remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
    
# 11
#### Link:
https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

#### Problem Domain:
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

#### Examples

    replace("Hi!") === "H!!"
    replace("!Hi! Hi!") === "!H!! H!!"
    replace("aeiou") === "!!!!!"
    replace("ABCDE") === "!BCD!"