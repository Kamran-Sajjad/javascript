const label = document.querySelector("label");
const myForm = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");
const agreeCheckbox = document.getElementById("agree");

label.textContent = "Your Name";
label.style.color = "red";

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = msgInput.value.trim();
  const isAgreed = agreeCheckbox.checked;

  console.log("Form Submitted ✔");
  console.log("Name:", name || "N/A");
  console.log("Email:", email || "N/A");
  console.log("Message:", message || "N/A");
  console.log("Agreed to terms:", isAgreed);

  myForm.reset();
});
