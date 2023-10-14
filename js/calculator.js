function isItNumber(str) {
  return /^-?\d+([.,](\d)+)?$/.test(str);
}
function calculate() {

  let quantity_of_goods = document.getElementById("quantity_of_goods");
  let goods_type = document.getElementById("goods_type");
  let result_field = document.getElementById("result");

  let aubergine_options = document.getElementById("aubergine_options");
  let loan_options = document.getElementById("loan_options");
  let loan_options_type = document.getElementsByName("loan_options_type");

  let result = 0;
  let aubergine_options_result = 0;
  let loan_options_result = 0;


  if (quantity_of_goods.value === "") {
    result_field.innerHTML = "No value passed";
    return;
  }

  if (!isItNumber(quantity_of_goods.value)){
    result_field.innerHTML = "Invalid input";
    return;
  }
  else {
    quantity_of_goods.value = quantity_of_goods.value.replace(',', '.');
  }

  if (quantity_of_goods.value < 0) {
    result_field.innerHTML = "Enter a number greater than or equal to 0";
    return;
  }

  let loan_prices = new Map ([
    ["long_support", 10000],
    ["grandson_too", 250000]
  ]);

  let aubergine_freshness = new Map ([
    ["fresh", 100],
    ["not_fresh", 320]
  ]);

  if (aubergine_options.style.display == "block")
      aubergine_options_result += aubergine_freshness.get(aubergine_options.value)
  else
    aubergine_options_result = 0

  if (loan_options.style.display == "block"){
    for (i = 0; i < loan_options_type.length; i++){
      if (loan_options_type[i].checked)
        loan_options_result += loan_prices.get(loan_options_type[i].value)
    }
  }
  else
    loan_options_result = 0

  let goods = new Map([
    ["tomato", 55],
    ["cucumber", 46],
    ["zucchini", 87],
    ["onion", 29],
    ["garlic", 127],
    ["ginger", 279]
  ]);

  result += parseFloat(quantity_of_goods.value) * goods.get(goods_type.value) + aubergine_options_result + loan_options_result;

  result_field.innerHTML = (result).toString();
}

function showDependOnRadioButton(){
  let radio_button_service_types = document.getElementsByName("service_type");
  let aubergine_options = document.getElementById("aubergine_options");
  let loan_options = document.getElementById("loan_options");

  for (i = 0; i < radio_button_service_types.length; i++){

    if (radio_button_service_types[i].checked){

      if (radio_button_service_types[i].value == "Flowers"){
        aubergine_options.style.display = "none";
        loan_options.style.display = "none";
      }
      else if (radio_button_service_types[i].value == "Loans"){
        loan_options.style.display = "block";
        aubergine_options.style.display = "none"
      }
      else {
        aubergine_options.style.display = "block"
        loan_options.style.display = "none"
      }
    }
  }
}

window.addEventListener(
  'DOMContentLoaded',
  function () {
            let b = document.getElementById("calculate_button");
            b.addEventListener("click", calculate);
          }
);

let radio_default = document.getElementById("radio_button_checked_by_default")
radio_default.checked = true

window.addEventListener(
  'DOMContentLoaded',
  function () {
    let radio_button_service_types = document.getElementsByName("service_type");
    for(i = 0; i < radio_button_service_types.length; i++){
      radio_button_service_types[i].addEventListener("change", showDependOnRadioButton)
    }
  }
)

