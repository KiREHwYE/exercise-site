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

  if (goods_type.value === "tomato")
    price_of_goods = 55;

  else if (goods_type.value === "cucumber")
    price_of_goods = 46;

  else if (goods_type.value === "zucchini")
    price_of_goods = 87;

  else if (goods_type.value === "onion")
    price_of_goods = 29;

  else if (goods_type.value === "garlic")
    price_of_goods = 127;

  else
    price_of_goods = 193;


    result_field.innerHTML = (parseInt(quantity_of_goods.value) * parseInt(price_of_goods)).toString();
}

window.addEventListener(
  'DOMContentLoaded',
  function () {
            let b = document.getElementById("calculate_button");
            b.addEventListener("click", calculate);
          }
);
