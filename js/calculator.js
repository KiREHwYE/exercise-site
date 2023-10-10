function containsOnlyNumbers(str) {
  return /^-?\d+$/.test(str);
}
function calculate() {

  let quantity_of_goods = document.getElementById("quantity_of_goods");
  let goods_type = document.getElementById("goods_type");
  let result_field = document.getElementById("result");

  let price_of_goods;

  if (quantity_of_goods.value === "") {
    result_field.innerHTML = "No value passed";
    return;
  }

  if (!containsOnlyNumbers(quantity_of_goods.value)){
    result_field.innerHTML = "Invalid input";
    return;
  }

  if (quantity_of_goods.value < 0) {
    result_field.innerHTML = "Enter a number greater than or equal to 0";
    return;
  }

  let goods = new Map([
    ["tomato", 55],
    ["cucumber", 46],
    ["zucchini", 87],
    ["onion", 29],
    ["garlic", 127]
  ]);

    result_field.innerHTML = (parseInt(quantity_of_goods.value) * goods.get(goods_type.value)).toString();
}

window.addEventListener(
  'DOMContentLoaded',
  function () {
            let b = document.getElementById("calculate_button");
            b.addEventListener("click", calculate);
          }
);
