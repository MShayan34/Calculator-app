// Get the display element from the HTML
let display = document.getElementById("display");

// This stores what the user types 
let currentInput = "";

/* ========== HANDLE NUMBER INPUT ========== */
function appendNumber(num) {
  // If the display is 0, replace it with the number
  if (display.innerText === "0") {
    currentInput = num;
  } else {
    // Otherwise, add the number to the input string
    currentInput += num;
  }
  updateDisplay(); // Show the updated input
}

/* ========== HANDLE OPERATORS (+, -, *, /) ========== */
function appendOperator(op) {
  // Prevent adding an operator if input is empty
  if (currentInput === "") return;

  // Get the last character of the input
  let lastChar = currentInput[currentInput.length - 1];

  // If last char is already an operator, replace it
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    // Otherwise, append the operator
    currentInput += op;
  }

  updateDisplay(); 
}

/* ========== CLEAR ALL INPUT ========== */
function clearDisplay() {
  currentInput = "";        
  updateDisplay("0");         
}

/* ========== DELETE LAST CHARACTER ========== */
function deleteLast() {
  // Remove the last character from input
  currentInput = currentInput.slice(0, -1);

  // Update the display or show 0 if empty
  updateDisplay(currentInput || "0");
}

/* ========== CALCULATE FINAL RESULT ========== */
function calculate() {
  try {
    // Use eval to calculate the math expression
    let result = eval(currentInput);

    // Show the result on screen
    updateDisplay(result);

    // Store result for continued calculations
    currentInput = result.toString();
  } catch {
    // If there's an error (e.g. 2++3), show "Error"
    updateDisplay("Error");
    currentInput = "";
  }
}

/* ========== UPDATE DISPLAY AREA ========== */
function updateDisplay(value = currentInput) {
  display.innerText = value;
}

/* ========== TOGGLE SCIENTIFIC MODE ========== */
function toggleScientific() {
  let sci = document.getElementById("scientific-buttons");
  let calc = document.querySelector(".calculator");
  let btn = document.getElementById("sci-btn");

  // Show or hide scientific section
  if (sci.style.display === "none") {
    sci.style.display = "grid";  
    calc.style.height = "auto";   // Expand calculator height
    btn.innerText = "Basic";
  } else {
    sci.style.display = "none";  
    calc.style.height = "auto";
    btn.innerText = "Sci"; 
}
}

/* ========== ADD SCIENTIFIC FUNCTIONS (sin, cos, etc.) ========== */
function appendFunction(func) {
  currentInput += func;
  updateDisplay();
}

/* ========== ADD BRACKETS FOR FUNCTIONS ========== */
function appendBracket(bracket) {
  currentInput += bracket;
  updateDisplay();
}
