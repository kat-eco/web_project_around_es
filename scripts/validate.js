export function disableBtn(form, button) {
  button.disabled = !form.checkValidity();

  form.addEventListener("input", () => {
    if (!form.checkValidity()) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}
