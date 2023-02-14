document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#to-do-form");
  const input = document.querySelector("#to-do-input");
  const list = document.querySelector("#to-do-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = input.value;
    input.value = "";
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    item.appendChild(checkbox);
    const label = document.createElement("label");
    label.textContent = task;
    item.appendChild(label);
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        item.remove();
      }
    });
    list.appendChild(item);
  });
});
