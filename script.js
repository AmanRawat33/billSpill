let calculateBill = (tipPercent = 0) => {
  console.log("HI");
  let billAmount = Number(document.querySelector("#bill-input").value);
  let totalPeople = Number(document.querySelector("#total-people-input").value);
  let tipAmount = (tipPercent / 100) * billAmount;
  let tipPerPerson = tipAmount / totalPeople;
  billAmount += tipAmount;
  let billPerPerson = billAmount / totalPeople;
  document.querySelector(
    "#right-total-div-value"
  ).innerHTML = `₹ ${billPerPerson.toFixed(2)}`;
  document.querySelector(
    "#right-tip-div-value"
  ).innerHTML = `₹ ${tipPerPerson.toFixed(2)}`;
};

const reset = () => {
  document.querySelector("#total-people-input").value = 0;
  document.querySelector("#bill-input").value = 0;
  document.querySelector("#right-total-div-value").innerHTML = `₹ 0`;
  document.querySelector("#right-tip-div-value").innerHTML = `₹ 0`;
};
