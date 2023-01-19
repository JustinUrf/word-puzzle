// Business Logic
function wordPuzzle(text) {
  console.log(text)
  let textSplit = Array.from(text);
  console.log(textSplit)
  for (i = 0; i <= textSplit.length - 1; i++) {
    console.log("This for loop is being called");
    // Checks if the current index is equal to a vowl
    if (textSplit[i].toLowerCase() === "a" || textSplit[i].toLowerCase() === "e" || textSplit[i].toLowerCase() === "i" || textSplit[i].toLowerCase() === "o" || textSplit[i].toLowerCase() === "u") {
      textSplit[i] = "-";
    };
  };
};



// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value.replace(/\r\n/g,'\n');
  // wordPuzzle(passage);
  wordPuzzle(passage);
};

window.addEventListener("load", function(){
  document.querySelector("form#word-scrambler").addEventListener("submit", handleFormSubmission);
});

