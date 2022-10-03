const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const inputs = document.querySelectorAll("input:not([type=submit])");
let hasAlert = false;

const createUser = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible main-form-alert" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
  const btn = document.querySelector("#liveAlertPlaceholder .btn-close");
  btn.addEventListener("click", () => {
    hasAlert = false;
  });
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    if (!hasAlert && validadeInputs()) {
      createUser(`Usuário Cadastrado com <b>Sucesso</b>`, "success");
      inputs.forEach((input) => {
        input.value = "";
      });
      hasAlert = true;
    }
  });
}

function validadeInputs() {
  let valueBoolean = true;
  inputs.forEach((input) => {
    input.value ? "" : (valueBoolean = false);
  });
  return valueBoolean;
}
