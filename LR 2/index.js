const input_1 = document.querySelector(".first-number");
const input_2 = document.querySelector(".second-number");
const bt = document.querySelector(".bt-count");

bt.addEventListener("click", () => {
  if (!isNaN(input_1.value) && !isNaN(input_2.value)) {
    alert(`Сума чисел дорівнює: ${Number(input_1.value) + Number(input_2.value)}`);
  } else {
    alert(`Одне з введених чисел не є числом!`);
  }
});
