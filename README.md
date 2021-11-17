# _Text Analyzer_

#### By _**Patrick Dolan**_

#### _An application that takes a passage and analyzes it giving you information on total word count, replaces "bad" words, and can tell you the number of times a specific word occurs in the passage._

## Github Pages Link

[Github Pages](https://patrick-dolan.github.io/text-analyzer/)

## Technologies Used

* _HTML_
* _CSS and Bootstrap_
* _Javascript and jQuery_

## Description

_This is a text-analyzer that takes a passage from the user and runs a series of operations on it. You can enter a word to count the number of times it occurs in the passage. Once you hit submit it takes in the passage and replaces all the "bad words" with \*CENSORED\*._  
<br>
Once it replaces the bad words it will show you the total word count, the count of the user selected word, and it shows all those words in bold.  
<br>
Bad words:  
* zoinks
* muppeteer
* loopdaloop
* biffaroni  

## Setup/Installation Requirements

* _Clone Repository down to a directory on your computer._
* _Open text-analyzer directory and double-click index.html to launch program._


## Known Bugs

* _Optional word counter will include any word that includes that word._
Example:  
Passage: I want to hold that ant.  
targeted word: ant  
selected word count: 2 (want and ant)  

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2021_ _Patrick Dolan_

## Tests

_**Describe: wordCounter()**_

**Test:** "It should return 1 if a passage has just one word."  
**Code:**  
const text = "hello";  
wordCounter(text);  
**Expected Output:** 1  
<br>
**Test:** "It should return 2 if a passage has two words."  
**Code:**  
const text = "hello there";  
wordCounter(text);  
**Expected Output:** 2  
<br>
**Test:** "It should return 0 for an empty string."  
**Code:**  
wordCounter("");  
**Expected Output:** 0  
<br>
**Test:** "It should not count numbers as words."  
**Code:**  
wordCounter("hi there 77 19");  
**Expected Output:** 2  
<br>

_**Describe: numberOfOccurrencesInText()**_

**Test:** "It should return 0 occurrences of a word for an empty string."  
**Code:**  
const text = "";  
const word = "red";  
numberOfOccurrencesInText(word, text);  
**Expected Output:** 0  
<br>
**Test:** "It should return 1 occurrence of a word when the word and the text are the same."  
**Code:**    
const text = "red";  
const word = "red";  
numberOfOccurrencesInText(word, text);  
**Expected Output:** 1  
<br>
**Test:** "It should return 0 occurrences of a word when the word and the text are different."  
**Code:**    
const text = "red";  
const word = "blue";  
numberOfOccurrencesInText(word, text);  
**Expected Output:** 0  
<br>
**Test:** "It should return the number of occurrences of a word."  
**Code:**   
const text = "red blue red red red green";  
const word = "red";  
numberOfOccurrencesInText(word, text);  
**Expected Output:** 4  
<br>
**Test:** "It should return a word match regardless of case."  
**Code:**    
const text = "red RED Red green Green GREEN";  
const word = "Red";  
numberOfOccurrencesInText(word, text);  
**Expected Output:** 3  
<br>
**Test:** "It should return a word match regardless of punctuation."  
**Code:**    
const text = "Red! Red. I like red, green, and yellow.";  
const word = "Red";  
numberOfOccurrencesInText(word, text);  
**Expected Output:** 3  
<br>
**Test:** "If an empty string is passed in as a word, it should return 0."  
**Code:**    
const word = "";  
const text = "red RED Red!";  
wordCounter(word, text);  
**Expected Output:** 0  
<br>  

_**Describe: boldPassage()**_

**Test:** "It should return a non-matching word in a p tag."  
**Code:**    
const word = "hello";  
const text = "yo";  
boldPassage(word, text);  
**Expected Output:** "\<p>yo\</p>"  
<br>
**Test:** "It should return a matching word in a b tag."  
**Code:**   
const word = "hello";  
const text = "hello";  
boldPassage(word, text);  
**Expected Output:** "\<p>\<b>hello\</b>\</p>"  
<br>
**Test:** "It should wrap words that match in `b` tags but not words that don't."  
**Code:**   
const word = "hello";  
const text = "hello there";  
boldPassage(word, text);  
**Expected Output:** "\<p>\<b>hello\</b> there\</p>"  

_**Describe: omitOffensiveWords()**_

**Test:** "It should remove a single word from a string and return it"  
**Code:**  
const text = "Zoinks thats so crazy";  
omitOffensiveWords(text);  
**Expected Output:** "thats so crazy"  

**Test:** "It should replace the targeted word with \*CENSORED\*"  
**Code:**  
const text = "Zoinks thats so crazy";  
omitOffensiveWords(text);  
**Expected Output:** "*CENSORED thats so crazy"  

**Test:** "It should replace the words zoinks, muppeteer, biffaroni, and loopdaloop with \*CENSORED\*"  
**Code:**  
const text = "Zoinks thats so crazy I should do a loopdaloop but I dont want to biffaroni like a muppeteer";  
omitOffensiveWords(text);  
**Expected Output:** "*CENSORED* thats so crazy I should do a *CENSORED* but I dont want to *CENSORED* like a *CENSORED*"  

_**Describe: mostCommonWords()**_  

**Test:** "It should return an array consisting of unique words from the passage"  
**Code:**  
const text = "hi there hey yo hi hi yay yo whoa there whoa yay";  
mostCommonWords(text);
**Expected Output:** "hi, there, hey, yo, yay, whoa"  
<br>
**Test:** "It should count the number of instances of each unique word in the user given passage and provide a "
**Code:**
const text = "hi there hey yo hi hi yay yo whoa there whoa yay";  
mostCommonWords(text);  
**Expected Output:** "hi: 3, there: 2, hey: 1, yo: 2, yay: 2, whoa: 2"  
<br>
**Test:** "It should sort the three highest occurences from highest to lowest in an array"  
**Code:**  
const text = "hi there hey yo hi hi yay yo whoa there whoa yay";  
mostCommonWords(text);  
**Expected Output:** "hi: 3, there: 2, yo: 2""  