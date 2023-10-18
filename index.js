const displayNumber = document.querySelector(".card-display-number");
const displayName = document.querySelector(".display-name");
const displayMonth = document.querySelector(".display-month");
const displayYear = document.querySelector(".display-year");
const displayCVC = document.querySelector(".cvc-back");
const nameInput = document.querySelector(".input-name");
const cardNumberInput = document.querySelector(".input-card");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvcInput = document.querySelector(".cvc-input");
const confirmBtn = document.querySelector(".confirm-button");

nameInput.addEventListener("input", function () {
  nameValue = nameInput.value;
  displayName.textContent = nameValue;
  if (displayName.textContent === "") {
    displayName.textContent = "Jane Appleseed";
  }
});

cardNumberInput.addEventListener("input", function () {
  cardValue = cardNumberInput.value;
  displayNumber.textContent = cardValue;
  if (displayNumber.textContent === "") {
    displayNumber.textContent = `0000 0000 0000 0000`;
  }
});

cvcInput.addEventListener("input", function () {
  cvcValue = cvcInput.value;
  displayCVC.textContent = cvcValue;
  if (displayCVC.textContent === "") {
    displayCVC.textContent = `000`;
  }
});

monthInput.addEventListener("input", function () {
  monthValue = monthInput.value;
  displayMonth.textContent = monthValue;
  if (displayMonth.textContent === "") {
    displayMonth.textContent = `00`;
  }
});

yearInput.addEventListener("input", function () {
  yearValue = yearInput.value;
  displayYear.textContent = yearValue;
  if (displayYear.textContent === "") {
    displayYear.textContent = `00`;
  }
});
