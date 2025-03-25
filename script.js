let firstColorInput = document.querySelector("#color1");
let secondColorInput = document.querySelector("#color2");
let gradientCode = document.querySelector("#gradientCode");

function generateGradient() {
  let firstColor = firstColorInput.value;
  let secondColor = secondColorInput.value;
  let gradentStyle = `linear-gradient(to right,${firstColor},${secondColor})`;
  document.body.style.background = gradentStyle;
  gradientCode.textContent = gradentStyle;
}

firstColorInput.addEventListener("input", generateGradient);
secondColorInput.addEventListener("input", generateGradient);
