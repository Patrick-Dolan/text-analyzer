# Tests

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