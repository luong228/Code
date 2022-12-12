const inputX = document.getElementById("x");
const inputY = document.getElementById("y");
const inputZ = document.getElementById("z");
const result = document.getElementById("result");
const btn = document.getElementById("get");

const listCoordinates = [
    [106.70347573315723,10.77702993539106,14.29],
    [106.70347231332602,10.777025818361656,14.29],
    [106.70348371272387,10.777015937484837,14.29],
    [106.70348713254471,10.777020120393427,14.29],


];

result.value = "";

listCoordinates.forEach((element, index) => {
  inputX.value = "";
  inputY.value = "";
  inputZ.value = "";

  inputX.value = element[0];
  inputY.value = element[1];
  inputZ.value = element[2];
  btn.click();
  setTimeout(() => {
  }, 2000);
});

const stringOuts = result.value;
const output = stringOuts.replaceAll("\n", "").split(",");

console.log(output);
console.log(3);