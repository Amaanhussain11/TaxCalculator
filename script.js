function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);
  const extraIncome = parseFloat(document.getElementById("extraIncome").value);
  const deductions = parseFloat(document.getElementById("deductions").value);
  const age = document.getElementById("age").value;

  const taxableIncome = income + extraIncome - deductions;

  let tax = 0;
  if (taxableIncome <= 800000) {
    tax = 0;
  } else {
    const amountOverEightLakhs = taxableIncome - 800000;
    if (age === "<40") {
      tax = amountOverEightLakhs * 0.3;
    } else if (age === "40-60") {
      tax = amountOverEightLakhs * 0.4;
    } else if (age === "≥60") {
      tax = amountOverEightLakhs * 0.1;
    }
  }

  document.getElementById("result").innerText = `Tax Payable: ₹${tax.toFixed(
    2
  )}`;
}

function showModal() {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
const inputincome = document.querySelector("#income");
const inputextraincome = document.querySelector("#extraIncome");
const inputdeduction = document.querySelector("#deductions");

function allFillOrNot() {
  // console.log(inputField);
  if (
    inputincome.value.length === 0 ||
    inputextraincome.value.length === 0 ||
    inputdeduction.value.length === 0
  ) {
    alert("Please input all valid fields.");
  } else {
    calculateTax();
    showModal();
  }
}

function checkInteger() {
  const input = document.getElementById("income").value;
  const input2 = document.getElementById("extraIncome").value;
  const input3 = document.getElementById("deductions").value;

  const parsedInput = parseInt(input);
  const parsedInput2 = parseInt(input2);
  const parsedInput3 = parseInt(input3);
  const first = document.querySelector("#err1");
  const first2 = document.querySelector("#err2");
  const first3 = document.querySelector("#err3");
  var count = 0;
  var count2 =0 ;
  if (!isNaN(parsedInput) && Number.isInteger(parsedInput)) {
    first.style.display = "none";
    count=0;
  } else {
    first.style.display = "block";
    count=1;
  }

  if (!isNaN(parsedInput2) && Number.isInteger(parsedInput2) ) {
    first2.style.display = "none";
    count2 =0;
  } else if(count===0){
    first2.style.display = "block";
    count2 = 1;
  }

  if (!isNaN(parsedInput3) && Number.isInteger(parsedInput3) && count!=1) {
    first3.style.display = "none";
  } else if(count===0 && count2===0){
    first3.style.display = "block";
  }

  
}
