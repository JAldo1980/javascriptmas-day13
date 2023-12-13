const outputEl = document.getElementById("output-el");
const addItem = document.getElementById("add-item");

let xmasGifts = [
  "guitar 🎸",
  "skates ⛸️",
  "bear 🧸",
  "magnet 🧲",
  "laptop 💻",
  "games console 🎮",
  "jewellery 💍",
  "kite 🪁",
];

addItem.addEventListener("click", function () {
  let inputText =
    document.getElementById("input-text").value.toLowerCase().trim() + " 🎁";

  if (inputText.trim() === "🎁") {
    alert("Please add a value");
  } else {
    xmasGifts.push(inputText);
  }

  outputEl.innerHTML = ``;
  xmasGifts.forEach((item) => {
    outputEl.innerHTML += `<p>${item}</p>`;
  });

  clearValue();
});

// *************
// SORT FUNCTIONS
// *************

let reversedXmasGifts = [];

// SORT ITEMS ALPHABETICALLY

const sortItems = document.getElementById("sort-items");
sortItems.addEventListener("click", function () {
  document.querySelector(".output-box-el").classList.remove("reverse");
  document.querySelector(".output-box-el").classList.add("sort");
  xmasGifts.sort();
  outputEl.innerHTML = ``;
  xmasGifts.forEach((item) => {
    outputEl.innerHTML += `
      <p>${item}</p>
      `;
  });
});

// REVERSE ITEMS ALPHABETICALLY

const reverseItems = document.getElementById("reverse-items");
reverseItems.addEventListener("click", function () {
  document.querySelector(".output-box-el").classList.remove("sort");
  document.querySelector(".output-box-el").classList.add("reverse");
  reversedXmasGifts = xmasGifts.slice().sort().reverse();
  outputEl.innerHTML = ``;
  reversedXmasGifts.forEach((item) => {
    outputEl.innerHTML += `<p>${item}</p>`;
  });
});

// CLEAR VALUE FUNCTION

function clearValue() {
  let inputTextClear = document.getElementById("input-text");

  inputTextClear.value = "";
}
