let firstColorInput = document.querySelector("#color1");
let secondColorInput = document.querySelector("#color2");
let gradientCode = document.querySelector("#gradientCode");
let directionInputs = document.querySelectorAll(
  "input[name='gradientDirection']"
);
// Function to generate gradient
function generateGradient() {
  let firstColor = firstColorInput.value;
  let secondColor = secondColorInput.value;

  // Find the checked direction
  let selectedDirection = document.querySelector(
    "input[name='gradientDirection']:checked"
  ).value;

  // Create gradient style
  let gradientStyle = `linear-gradient(${selectedDirection}, ${firstColor}, ${secondColor})`;

  // Apply gradient to the body
  document.body.style.background = gradientStyle;

  // Display gradient CSS code
  gradientCode.textContent = gradientStyle;
}

// Add event listeners to inputs
firstColorInput.addEventListener("input", generateGradient);
secondColorInput.addEventListener("input", generateGradient);
directionInputs.forEach((input) =>
  input.addEventListener("change", generateGradient)
);

// Initial gradient update on page load
generateGradient();

function copyText() {
  let textElement = document.getElementById("gradientCode");

  /* Create a temporary input field */
  let tempInput = document.createElement("input");
  tempInput.value = textElement.innerText;
  document.body.appendChild(tempInput);

  /* Select and copy text */
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(tempInput.value);

  /* Remove the temporary input */
  document.body.removeChild(tempInput);

  alert("Copied to clipboard!");
}
