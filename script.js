let addBtn = document.getElementById("add");
let itemInput = document.getElementById("item-name-input");
let qtyInput = document.getElementById("item-qty-input");
let priceInput = document.getElementById("item-price-input");
let cartBody = document.getElementById("cart-body");
let totalEl = document.getElementById("total");

let grandTotal = 0;

addBtn.addEventListener("click", () => {
  let itemName = itemInput.value.trim();
  let itemQty = parseInt(qtyInput.value);
  let itemPrice = parseFloat(priceInput.value);

  // Validate input
  if (itemName === "" || isNaN(itemQty) || itemQty <= 0 || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item, quantity and positive price.");
    return;
  }

  let rowTotal = itemQty * itemPrice;

  // Create a new row
  let newRow = document.createElement("tr");

  let nameCell = document.createElement("td");
  nameCell.id = "item";
  nameCell.innerText = itemName;

  let qtyCell = document.createElement("td");
  qtyCell.id = "qty";
  qtyCell.innerText = itemQty;

  let priceCell = document.createElement("td");
  priceCell.id = "price";
  priceCell.innerText = itemPrice.toFixed(2);

  let rowTotalCell = document.createElement("td");
  rowTotalCell.innerText = rowTotal.toFixed(2);

  newRow.appendChild(nameCell);
  newRow.appendChild(qtyCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(rowTotalCell);

  // Insert above the grand total row
  cartBody.insertBefore(newRow, cartBody.lastElementChild);

  // Update grand total
  grandTotal += rowTotal;
  totalEl.innerText = grandTotal.toFixed(2);

  // Clear input fields
  itemInput.value = "";
  qtyInput.value = "";
  priceInput.value = "";
});
