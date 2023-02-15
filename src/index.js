document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#to-do-form");
  const input = document.querySelector("#to-do-input");
  const list = document.querySelector("#to-do-list");
  const n = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const y = n.getFullYear();
  const m = month[n.getMonth()];
  const d = weekday[n.getDay()];
  const d2 = n.getDate();
  document.getElementById("date").innerHTML = d + " " + m + " " + d2 + "," + " " + y;

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
