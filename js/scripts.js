// Utility Logic
function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
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
    console.log(i);
    if (word === textArray[i]) {
      return i;
    }
  }
  return -1;
}
function omitOffensiveWords(text) {
  let textArray = text.split(" ");
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let textOutput = "";
  textArray.forEach(function(userWord) {
    offensiveWords.forEach(function(badWord) {
      if (badWord.toLowerCase() === userWord.toLowerCase()) {
        textArray.splice(textArray.indexOf(userWord), 1, "*CENSORED*");
      }
    });
  });
  textArray.forEach(function(element) {
    textOutput = textOutput + element + " "; 
  });
  return textOutput.trim();
}
function mostCommonWords(text) {
  const textArray = text.split(" ");
  let uniqueWords = [textArray[0]];
  // let wordCount = [];
  // let wordCounter = 0;
  textArray.forEach(function(textItem) {
  for (let i = 0; i < textArray.length; i++) {
    if (uniqueWords.includes(textItem)){
      break;
    } else {
      uniqueWords.push(textItem);
      break;
    }
    }
  });
  console.log(uniqueWords);
}
// UI Logic
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
    // New line of code below.
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});