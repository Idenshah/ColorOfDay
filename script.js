const body = document.querySelector("body");
const form = document.createElement("form");
form.classList.add("form");

const input = document.createElement("input");
input.classList.add("dateInput");
input.name = "insertDate";
input.type = "date";
input.setAttribute("aria-label", "date");

const selectButton = document.createElement("button");
selectButton.textContent = "Select Date";
selectButton.classList.add("dateBtn");
selectButton.type = "submit";

const clearButton = document.createElement("button");
clearButton.textContent = "Clear History";
clearButton.classList.add("clrBtn");
clearButton.type = "button";

form.append(input, selectButton, clearButton);
const errorBox = document.createElement('div')
errorBox.classList.add('errorMsg')
const container = document.createElement("div");
container.classList.add("container");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const date = form.elements.insertDate.value;
  
  if (!date) {
    errorBox.textContent = "Please Select a Date!";
    return;
  }

  try {
    errorBox.textContent = ""
    const response = await fetch(
      `https://colors.zoodinkers.com/api?date=${date}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const json = await response.json();

    const colorBox = document.createElement("div");
    colorBox.classList.add("box");
    const selectedDate = document.createElement("div");
    selectedDate.classList.add("selectedDate");
    selectedDate.textContent = `Date: ${json.date}`;
    const color = document.createElement("div");
    color.classList.add("color");
    color.textContent = `Color: ${json.hex}`;
    colorBox.append(selectedDate, color);
    colorBox.style.background = json.hex;

    let data = JSON.parse(localStorage.getItem("data")) || []; 
    data.push({
      date: json.date,
      color: json.hex,
    });
    localStorage.setItem("data", JSON.stringify(data));
    container.append(colorBox);
  } catch (error) {
    console.error(error);
  }
});

clearButton.addEventListener("click", function () {
  localStorage.removeItem("data")
  container.innerHTML = '' 
  errorBox.textContent = ""
});

function displayStoredData() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach(item => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("box");
    const selectedDate = document.createElement("div");
    selectedDate.classList.add("selectedDate");
    selectedDate.textContent = `Date: ${item.date}`;
    const color = document.createElement("div");
    color.classList.add("color");
    color.textContent = `Color: ${item.color}`;
    colorBox.append(selectedDate, color);
    colorBox.style.background = item.color;
    container.append(colorBox);
  });
}

displayStoredData();

body.append(form,errorBox, container);