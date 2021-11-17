// Utility Logic
function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}
function getNumberFromString(string) {
  let number = parseInt(string.replace(/\D/g, ""));
  return number;
}
// Business Logic
function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}
function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}
function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    if (word === textArray[i]) {
      return i;
    }
  }
  return -1;
}
function omitOffensiveWords(text) {
  let textArray = text.split(" ");
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  textArray.forEach(function(userWord) {
    offensiveWords.forEach(function(badWord) {
      if (badWord.toLowerCase() === userWord.toLowerCase()) {
        textArray.splice(textArray.indexOf(userWord), 1, "*CENSORED*");
      }
    });
  });
  return textArray.join(" ");
}
function mostCommonWords(text) {
  const textArray = text.split(" ");
  let wordCount = [];
  let uniqueWords = [];
  let wordCounter = 0;
  let result = ["0", "0", "0"];
  textArray.forEach(function(textItem) {
    if (!uniqueWords.includes(textItem)){
      uniqueWords.push(textItem);
    }
  });
  uniqueWords.forEach(function(element) {
    for (i = 0; i < textArray.length; i++) {
      if (element === textArray[i]) {
        wordCounter++
      }
    }
    wordCount.push(element + ": " + wordCounter);
    wordCounter = 0;
  });
  wordCount.forEach(function(element) {
    if (getNumberFromString(element) > getNumberFromString(result[0])) {
      result.splice(0, 1, element);
    } else if (getNumberFromString(element) > getNumberFromString(result[1]) && getNumberFromString(result[1]) !== getNumberFromString(result[0])) {
      result.splice(1, 1, element);
    } else if (getNumberFromString(element) > getNumberFromString(result[2]) && getNumberFromString(element) !== getNumberFromString(result[2])) {
      result.splice(2, 1, element);
    }
  });
  return result;
}
// UI Logic
// TODO update README and make boldPassage target just the parts of words that it targets not the whole word
function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}
function mostOccurences(text) {
  let htmlOpenTag = "<li>";
  let htmlFullTag = "";
  mostCommonWords(text).forEach(function(element) {
    htmlFullTag = htmlFullTag.concat(htmlOpenTag + element + "</li>");
  });
  return htmlFullTag;
}
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    let passage = $("#text-passage").val();
    passage = omitOffensiveWords(passage);
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#common-words").html(mostOccurences(passage));
  });
});