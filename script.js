let addBtn = document.getElementById("add");
let itemInput = document.getElementById("item-name-input");
let priceInput = document.getElementById("item-price-input");
let cartBody = document.getElementById("cart-body");
let totalEl = document.getElementById("total");

let grandTotal = 0;

addBtn.addEventListener("click", () => {
  let itemName = itemInput.value.trim();
  let itemPrice = parseFloat(priceInput.value);

  // Validate input
  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item name and positive price.");
    return;
  }

  // Insert new row above the total row
  let newRow = document.createElement("tr");

  let nameCell = document.createElement("td");
  nameCell.id = "item";
  nameCell.innerText = itemName;

  let priceCell = document.createElement("td");
  priceCell.id = "price";
  priceCell.innerText = itemPrice.toFixed(2);

  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);

  cartBody.insertBefore(newRow, cartBody.lastElementChild);

  // Update grand total
  grandTotal += itemPrice;
  totalEl.innerText = grandTotal.toFixed(2);

  // Clear input fields
  itemInput.value = "";
  priceInput.value = "";
});
