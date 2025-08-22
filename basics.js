console.log("--------- var -----------");
let color = "red";
console.log("Before initializing the var, value of num1 is " + num1);
num1 = 4;
console.log("After initializing the var, value of num1 is " + num1);
var num1 = 2;
if (color == "red") {
  console.log(
    "Before Changing value, Within the If block value of num1 is " + num1
  );
  var num1 = 1;
  console.log(
    "After Changing value, Within the If block value of num1 is " + num1
  );
}
console.log("After If block, Value of num1 is " + num1);

console.log("--------- Let -----------");
console.log(
  "1. We can not Assign the value to any variable before declaring unlike var."
);
let num2 = 3;
console.log("value of let variable num2 before if block is " + num2);
if ((color = "red")) {
  let num2 = `"changed value"`;
  console.log("Value of let variable in If block is " + num2);
}
console.log("Value of let variable After If block is " + num2);

console.log("--------- Const -----------");
console.log("We can not change the value of constant");
const num3 = 0;
console.log("value of constant num3 is " + num3);

if ((color = "red")) {
  const num3 = `"change const value in If block"`;
  console.log("Value of let variable in If block is " + num3);
}
console.log("Value of let variable After If block is " + num3);
