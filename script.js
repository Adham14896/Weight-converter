const input = document.querySelector(".weight");
const grams = document.querySelector(".grams-card");
const kilos = document.querySelector(".kilos-card");
const onces = document.querySelector(".onces-card");

const getWeight = function (unit, num1, num2) {
  const result = (unit.innerHTML = num1 * num2);
  return Math.round(result);
};

input.addEventListener("input", function (e) {
  let pounds = input.value;
  getWeight(grams, pounds, 453.59);
  getWeight(kilos, pounds, 0.45);
  getWeight(onces, pounds, 16);
});
