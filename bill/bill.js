const bill = document.getElementById("bill");
const nbPersons = document.getElementById("nbPersons");
const tipAmount = document.getElementById("tipAmount");
const result = document.getElementById("result");

var tip = 0;

function calculateBill() {
  var billValue = bill.valueAsNumber;
  var nbPersonsValue = nbPersons.valueAsNumber;
  if (nbPersonsValue != 0) {
    tipAmount.value = (billValue * tip) / nbPersonsValue;
    result.value = billValue / nbPersonsValue + tipAmount.valueAsNumber;
  } else alert("cannot have 0 persons");
}

function reset() {
  bill.value = "";
  nbPersons.value = "";
  tipAmount.value = "";
  result.value = "";
}

function setTip(t) {
  tip = t;
  calculateBill();
}

bill.addEventListener("change", calculateBill);
nbPersons.addEventListener("change", calculateBill);
