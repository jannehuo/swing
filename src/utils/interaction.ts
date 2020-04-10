function getErrorInputs() {
  const inputs = document.querySelectorAll<HTMLElement>(
    '[aria-invalid="true"]'
  );
  return inputs;
}

export function focusOnFirstError() {
  const inputs = getErrorInputs();
  if (inputs.length > 0) {
    inputs[0].focus();
  }
}

export function shakeErrorElements() {
  const inputs = getErrorInputs();
  if (inputs.length > 0) {
    inputs.forEach(input => {
      input.classList.add("shake");
      input.addEventListener("animationend", () => {
        input.classList.remove("shake");
      });
    });
  }
}
