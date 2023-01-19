// Business Logic
function wordPuzzle(text) {
  console.log(text)
  let textSplit = Array.from(text);
  console.log(textSplit)
  for (i = 0; i <= textSplit.length - 1; i++) {
    // Checks if the current index is equal to a vowl
    if (textSplit[i].toLowerCase() === "a" || textSplit[i].toLowerCase() === "e" || textSplit[i].toLowerCase() === "i" || textSplit[i].toLowerCase() === "o" || textSplit[i].toLowerCase() === "u") {
      textSplit[i] = "-";
    };
  };
  let completeSentence = textSplit.join('');
  return completeSentence
};

// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value.replace(/\r\n/g,'\n');
  // wordPuzzle(passage);
  const finishedPuzzle = wordPuzzle(passage);
  document.getElementById("puzzle").innertext = passage;
  document.getElementById("final-puzzle").innerText = finishedPuzzle;
};

window.addEventListener("load", function(){
  document.querySelector("form#word-scrambler").addEventListener("submit", handleFormSubmission);
});

