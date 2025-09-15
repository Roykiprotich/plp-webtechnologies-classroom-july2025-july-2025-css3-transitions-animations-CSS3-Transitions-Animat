// 🎯 Part 2: Functions, Scope & Return

// Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Demonstrating local vs global scope
let globalMessage = "I am global!";

function scopeExample() {
  let localMessage = "I am local!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible here only
}
scopeExample();
// console.log(localMessage); ❌ Error

// 🎯 Part 3: Combine CSS & JS

// Animate box with JS
const animatedBox = document.querySelector(".animated-box");
document.getElementById("animateBtn").addEventListener("click", () => {
  animatedBox.classList.toggle("bounce");
});

// Modal logic
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Reusable function example
function changeBoxColor(element, color) {
  element.style.background = color;
}

document.getElementById("hoverBtn").addEventListener("click", () => {
  changeBoxColor(animatedBox, "lightgreen");
  console.log("Box area:", calculateArea(100, 100));
});
