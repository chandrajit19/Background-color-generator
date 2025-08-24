const copyCode = document.querySelector("#copy-code");
// hex generator function start here
function hexGenerator() {
  const hexNum = "0123456789ABCDEF";
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hexNum[Math.floor(Math.random() * 16)];
  }
  return hexValue;
}
// hex generator function end here

const btn01 = document.querySelector("#btn-1");
const btn02 = document.querySelector("#btn-2");
const gradientCode = document.querySelector("#gradient-code");

let hexcode01 = "#132A3B";
let hexcode02 = "#122C3A";

// button first start here
btn01.addEventListener("click", function () {
  hexcode01 = hexGenerator();
  document.body.style.backgroundImage = `linear-gradient(to right, ${hexcode01}, ${hexcode02})`;

  btn01.textContent = `${hexcode01}`;

  gradientCode.innerHTML = `<span class="bimg"> background-image:</span> linear-gradient(to right, ${hexcode01}, ${hexcode02})`;
  copyCode.innerText = "Copy";
});
// button first end here

// button second start here
btn02.addEventListener("click", function () {
  hexcode02 = hexGenerator();
  document.body.style.backgroundImage = `linear-gradient(to right, ${hexcode01}, ${hexcode02})`;

  btn02.textContent = `${hexcode02}`;

  gradientCode.innerHTML = `<span class="bimg">background-image:</span> linear-gradient(to right, ${hexcode01}, ${hexcode02})`;
  copyCode.innerText = "Copy";
});
// button second end here

console.log(navigator);

copyCode.addEventListener("click", function () {
  navigator.clipboard.writeText(gradientCode.innerText);
  copyCode.innerText = "Copied !";
  //    alert("copied")
});
