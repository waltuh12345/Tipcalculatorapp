const sec1 = document.querySelector(".sec1");
const body = document.querySelector("body");

let billInput = "";
let tipInput = "";
let countInput = "";

const displayText = (elem, value) => {
  console.log(isNaN(value));

  if (isNaN(value)) {
    elem.innerHTML = "$0.00";
  } else {
    elem.innerHTML = `$${value}`;
  }
};

const buttons = Array.from(sec1.querySelector(".btn-wrapper").children);

const tipElem = document.querySelector("#tip-display");
const totalElem = document.querySelector("#total-display");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let target = e.target;

    const check = (n) => target === buttons[n];

    if (target === buttons[0]) {
      tipInput = 15;
    } else if (check(1)) {
      tipInput = 10;
    } else if (check(2)) {
      tipInput = 15;
    } else if (check(3)) {
      tipInput = 25;
    } else if (check(4)) {
      tipInput = 50;
    }

    const billAmount = parseFloat(billInput);
    const tipAmount = parseFloat(tipInput) / 100;
    const peopleCount = parseInt(countInput);

    let tipAmountPerPerson = (billAmount * tipAmount) / peopleCount;
    let totalAmountPerPerson = billAmount / peopleCount + tipAmountPerPerson;

    displayText(tipElem, tipAmountPerPerson);
    displayText(totalElem, totalAmountPerPerson);
  });
});

sec1.addEventListener("input", (e) => {
  const target = e.target;

  if (target.matches("#bill")) {
    billInput = target.value;
  } else if (target.matches("#tip")) {
    tipInput = target.value;
  } else if (target.matches("#number-of-people")) {
    countInput = target.value;
  }

  const billAmount = parseFloat(billInput);
  const tipAmount = parseFloat(tipInput) / 100;
  const peopleCount = parseInt(countInput);

  let tipAmountPerPerson = (billAmount * tipAmount) / peopleCount;
  let totalAmountPerPerson = billAmount / peopleCount + tipAmountPerPerson;

  displayText(tipElem, tipAmountPerPerson);
  displayText(totalElem, totalAmountPerPerson);
});

const resetBtn = document
  .querySelector("#reset-btn")
  .addEventListener("click", (e) => {
    const inputs = sec1.querySelectorAll("input");

    inputs.forEach((input) => {
      input.value = "";
    });

    billInput = "";
    tipInput = "";
    countInput = "";

    tipElem.innerHTML = `$0.00`;
    totalElem.innerHTML = `$0.00`;
  });
