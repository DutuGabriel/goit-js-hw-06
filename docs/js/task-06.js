const validationInput = document.querySelector("valdidation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const reqLength = validationInput.dataset.length;

  if (inputLength === Number(reqLength)) {
    validationInput.className = "valid";
  } else validationInput.className = "invalid";
});
