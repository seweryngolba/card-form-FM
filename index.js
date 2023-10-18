// const confirmBtn = document.querySelector(".confirm-button");
// const formBox = document.querySelector(".form");
// const thanksBox = document.querySelector(".thank-you");

// const fields = {
//   name: {
//     input: document.querySelector(".input-name"),
//     display: document.querySelector(".display-name"),
//     defaultValue: "Jane Appleseed",
//     errorInfo: document.querySelector(".input-name + .error-info"),
//   },
//   cardNumber: {
//     input: document.querySelector(".input-card"),
//     display: document.querySelector(".card-display-number"),
//     defaultValue: "0000 0000 0000 0000",
//     errorInfo: document.querySelector(".input-card + .error-info"),
//   },
//   cvc: {
//     input: document.querySelector(".cvc-input"),
//     display: document.querySelector(".cvc-back"),
//     defaultValue: "000",
//     errorInfo: document.querySelector(".cvc-input + .error-info"),
//   },
//   month: {
//     input: document.querySelector(".month-input"),
//     display: document.querySelector(".display-month"),
//     defaultValue: "00",
//     errorInfo: document.querySelector(".exp-date + .error-info"),
//   },
//   year: {
//     input: document.querySelector(".year-input"),
//     display: document.querySelector(".display-year"),
//     defaultValue: "00",
//     errorInfo: document.querySelector(".exp-date + .error-info"),
//   },
// };

// function handleInput(event, field) {
//   const { input, display, defaultValue, errorInfo } = field;
//   let value = input.value;

//   if (field.input === fields.month.input || field.input === fields.year.input) {
//     value = value.padStart(2, "0");
//   }

//   if (field.input === fields.cardNumber.input) {
//     value = value.replace(/\s/g, "");
//     value = value.replace(/(\d{4})/g, "$1 ").trim();
//   }

//   if (isValidInput(field, value)) {
//     input.classList.remove("input-error");
//     errorInfo.style.visibility = "hidden";
//   } else {
//     input.classList.add("input-error");
//     errorInfo.style.visibility = "visible";
//   }

//   display.textContent = value || defaultValue;
// }

// function isValidInput(field, value) {
//   if (field.input === fields.cardNumber.input) {
//     return value.length === 19 && value.trim() !== "";
//   }
//   if (field.input === fields.name.input) {
//     return value.trim() !== "" && !/\d/.test(value);
//   }
//   if (field.input === fields.month.input) {
//     return value.trim() !== "" && /^\d+$/.test(value) && value <= 12;
//   }
//   if (field.input === fields.year.input) {
//     return value.trim() !== "" && /^\d+$/.test(value);
//   }
//   if (field.input === fields.cvc.input) {
//     return value.trim() !== "" && /^\d+$/.test(value);
//   }

//   return true;
// }

// for (const key in fields) {
//   const field = fields[key];
//   field.input.addEventListener("input", (event) => handleInput(event, field));
// }

// confirmBtn.addEventListener("click", function () {
//   formBox.style.display = "none";
//   thanksBox.style.display = "flex";
// });

const confirmBtn = document.querySelector(".confirm-button");
const formBox = document.querySelector(".form");
const thanksBox = document.querySelector(".thank-you");

const fields = {
  name: {
    input: document.querySelector(".input-name"),
    display: document.querySelector(".display-name"),
    defaultValue: "Jane Appleseed",
    errorInfo: document.querySelector(".input-name + .error-info"),
  },
  cardNumber: {
    input: document.querySelector(".input-card"),
    display: document.querySelector(".card-display-number"),
    defaultValue: "0000 0000 0000 0000",
    errorInfo: document.querySelector(".input-card + .error-info"),
  },
  cvc: {
    input: document.querySelector(".cvc-input"),
    display: document.querySelector(".cvc-back"),
    defaultValue: "000",
    errorInfo: document.querySelector(".cvc-input + .error-info"),
  },
  month: {
    input: document.querySelector(".month-input"),
    display: document.querySelector(".display-month"),
    defaultValue: "00",
    errorInfo: document.querySelector(".exp-date + .error-info"),
  },
  year: {
    input: document.querySelector(".year-input"),
    display: document.querySelector(".display-year"),
    defaultValue: "00",
    errorInfo: document.querySelector(".exp-date + .error-info"),
  },
};

function handleInput(event, field) {
  const { input, display, defaultValue, errorInfo } = field;
  let value = input.value;

  if (field.input === fields.month.input || field.input === fields.year.input) {
    value = value.padStart(2, "0");
  }

  if (field.input === fields.cardNumber.input) {
    value = value.replace(/\s/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();
  }

  if (isValidInput(field, value)) {
    input.classList.remove("input-error");
    errorInfo.style.visibility = "hidden";
  } else {
    input.classList.add("input-error");
    errorInfo.style.visibility = "visible";
  }

  display.textContent = value || defaultValue;
}

function isValidInput(field, value) {
  if (field.input === fields.cardNumber.input) {
    const cardNumber = value.replace(/[\s-]/g, "");
    return cardNumber.length === 16 && /^\d+$/.test(cardNumber);
  }
  if (field.input === fields.name.input) {
    return value.trim() !== "" && !/\d/.test(value);
  }
  if (field.input === fields.month.input) {
    return value.trim() !== "" && /^\d+$/.test(value) && value <= 12;
  }
  if (field.input === fields.year.input) {
    return value.trim() !== "" && /^\d+$/.test(value);
  }
  if (field.input === fields.cvc.input) {
    return value.trim() !== "" && /^\d+$/.test(value);
  }

  return true;
}

for (const key in fields) {
  const field = fields[key];
  field.input.addEventListener("input", (event) => handleInput(event, field));
}

function validateForm() {
  let isValid = true;

  for (const key in fields) {
    const field = fields[key];
    const value = field.input.value;
    if (!isValidInput(field, value)) {
      isValid = false;
      field.input.classList.add("input-error");
      field.errorInfo.style.visibility = "visible";
    }
  }

  return isValid;
}

confirmBtn.addEventListener("click", function () {
  if (validateForm()) {
    formBox.style.display = "none";
    thanksBox.style.display = "flex";
  } else {
  }
});
