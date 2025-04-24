let JSONObject = {
  product: [],
};

//A test product 
JSONObject.product.push({
  id: "0000000",
  name: "Test Product",
  description: "This is a default test product",
  category: "misc",
  stock: "0",
  price: "$0.00",
  manufacturer: "N/A",
  weight: "0"
});


// Save data
function saveToLocal() {
  localStorage.setItem("products", JSON.stringify(JSONObject.product));
}

function resetAllProductForms() {
  // Clear create form
  const createForm = document.querySelector("#new_product .product-form");
  if (createForm) createForm.reset();

  // Clear update form
  const updateForm = document.querySelector("#update_fields .product-form");
  if (updateForm) {
    updateForm.reset();
    [
      "update_product_id",
      "update_product_name",
      "update_serial_number",
      "update_description",
      "update_category",
      "update_stock",
      "update_price",
      "update_manufacturer",
      "update_weight"
    ].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.disabled = false;
    });
  }

  // Clear delete form
  const deleteForm = document.querySelector("#delete_fields .product-form");
  if (deleteForm) deleteForm.reset();

  // Clear search fields
  const searchUpdate = document.getElementById("search_product");
  const searchDelete = document.getElementById("search_delete_input");
  if (searchUpdate) searchUpdate.value = "";
  if (searchDelete) searchDelete.value = "";

  // Hide update and delete results
  document.getElementById("update_fields").style.display = "none";
  document.getElementById("update_button_container").style.display = "none";
  document.getElementById("update_divider").style.display = "none";
  document.getElementById("delete_fields").style.display = "none";
}

// Load data
function loadFromLocal() {
  const saved = localStorage.getItem("products");
  if (saved) {
    JSONObject.product = JSON.parse(saved);
  }
}

// Add new product after validation
function addProduct(
  id,
  name,
  description,
  category,
  stock,
  price,
  serial,
  manufacturer,
  weight
) {
  for (let i = 0; i < JSONObject.product.length; i++) {
    const p = JSONObject.product[i];
    if (p.id === id) {
      alert("A product with this ID already exists.");
      return;
    }
    if (serial && p.description.includes(`Serial: ${serial}`)) {
      alert("A product with this Serial Number already exists.");
      return;
    }
  }

  let newProduct = {
    id,
    name,
    description: description + (serial ? ` | Serial: ${serial}` : ""),
    category,
    stock,
    price,
    manufacturer,
    weight,
  };

  JSONObject.product.push(newProduct);
  saveToLocal();
  alert(`${name} has been added with ID: ${id}`);
}

// Submit add form
function handleAdd() {
  const id = document.getElementById("product_id").value.trim();
  const name = document.getElementById("product_name").value.trim();
  const serial = document.getElementById("serial_number").value.trim();
  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value;
  const stock = document.getElementById("stock").value.trim();
  const price = document.getElementById("price").value.trim();
  const manufacturer = document.getElementById("manufacturer").value.trim();
  const weight = document.getElementById("weight").value.trim();

  // Validation
  if (!/^\d{7,}$/.test(id)) {
    alert("Product ID must be at least 7 digits and only numbers.");
    return;
  }
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
    alert("Product name can only contain letters and numbers.");
    return;
  }
  if (stock === "" || isNaN(stock) || Number(stock) < 0) {
    alert("Stock must be a non-negative number.");
    return;
  }
  if (!/^\$\d+(\.\d{2})?$/.test(price)) {
    alert("Price must be in USD format like $12.99.");
    return;
  }
  if (weight === "" || isNaN(weight) || Number(weight) < 0) {
    alert("Weight must be a non-negative number.");
    return;
  }
  if (!manufacturer.match(/^[a-zA-Z0-9 .\-]+$/)) {
    alert("Manufacturer should be a valid string.");
    return;
  }

  addProduct(
    id,
    name,
    description,
    category,
    stock,
    price,
    serial,
    manufacturer,
    weight
  );
}

// Load data and reset forms
window.onload = function () {
  loadFromLocal();

  const productForm = document.querySelector("#new_product .product-form");
  const updateForm = document.querySelector("#update_fields .product-form");
  const searchInput = document.getElementById("search_product");
  const deleteSearch = document.getElementById("search_delete_input");

  if (productForm) productForm.reset();
  if (updateForm) updateForm.reset();
  if (searchInput) searchInput.value = "";
  if (deleteSearch) deleteSearch.value = "";

  if (productForm) {
    productForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handleAdd();
    });
  }

  // Auto-add $ prefix
  ["price", "update_price"].forEach((id) => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener("focus", () => {
        if (!field.value.startsWith("$")) field.value = "$" + field.value;
      });
      field.addEventListener("blur", () => {
        if (field.value.trim() === "$") field.value = "";
      });
    }
  });
};

// Export data
function downloadJSON() {
  const dataStr = JSON.stringify(JSONObject.product, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "products.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Search product for update
function searchProduct() {
  document.getElementById("update_product").style.display = "block";

  const input = document
    .getElementById("search_product")
    .value.trim()
    .toLowerCase();
  const match = JSONObject.product.find(
    (p) => p.id.toLowerCase() === input || p.name.toLowerCase() === input
  );

  if (!match) {
    alert("No product found.");
    document.getElementById("update_fields").style.display = "none";
    document.getElementById("update_divider").style.display = "none";
    document.getElementById("update_button_container").style.display = "none";
    return;
  }

  document.getElementById("update_fields").style.display = "block";
  document.getElementById("update_divider").style.display = "block";
  document.getElementById("update_button_container").style.display = "block";

  const serialMatch = match.description.match(/Serial:\s*(.+)$/);
  const serial = serialMatch ? serialMatch[1] : "";

  document.getElementById("update_product_id").value = match.id;
  document.getElementById("update_product_name").value = match.name;
  document.getElementById("update_serial_number").value = serial;
  document.getElementById("update_description").value =
    match.description.replace(/ \| Serial: .+$/, "");
  document.getElementById("update_category").value = match.category || "";
  document.getElementById("update_stock").value = match.stock || "";
  document.getElementById("update_price").value = match.price || "";
  document.getElementById("update_manufacturer").value =
    match.manufacturer || "";
  document.getElementById("update_weight").value = match.weight || "";

// Lock test object
const updateFields = [
  "update_product_id",
  "update_product_name",
  "update_serial_number",
  "update_description",
  "update_category",
  "update_stock",
  "update_price",
  "update_manufacturer",
  "update_weight"
];

if (match.id === "0000000") {
  updateFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
} else {
  updateFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = false;
  });
}
}

// Save updates
function handleUpdate() {
  const id = document.getElementById("update_product_id").value.trim();
  if (id === "0000000") {
    alert("You do not have permission to edit the test product.");
    return;
  }
  const name = document.getElementById("update_product_name").value.trim();
  const serial = document.getElementById("update_serial_number").value.trim();
  const description = document
    .getElementById("update_description")
    .value.trim();
  const category = document.getElementById("update_category").value;
  const stock = document.getElementById("update_stock").value.trim();
  const price = document.getElementById("update_price").value.trim();
  const manufacturer = document
    .getElementById("update_manufacturer")
    .value.trim();
  const weight = document.getElementById("update_weight").value.trim();

  // Validation
  if (!/^\d{7,}$/.test(id)) {
    alert("Product ID must be at least 7 digits and only numbers.");
    return;
  }
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
    alert("Product name can only contain letters and numbers.");
    return;
  }
  if (stock === "" || isNaN(stock) || Number(stock) < 0) {
    alert("Stock must be a non-negative number.");
    return;
  }
  if (!/^\$\d+(\.\d{2})?$/.test(price)) {
    alert("Price must be in USD format like $12.99.");
    return;
  }
  if (weight === "" || isNaN(weight) || Number(weight) < 0) {
    alert("Weight must be a non-negative number.");
    return;
  }
  if (!manufacturer.match(/^[a-zA-Z0-9 .\-]+$/)) {
    alert("Manufacturer should be a valid string.");
    return;
  }

  const index = JSONObject.product.findIndex((p) => p.id === id);
  if (index === -1) {
    alert("Product not found.");
    return;
  }

  // Check serial is not used by another product
  for (let i = 0; i < JSONObject.product.length; i++) {
    if (
      i !== index &&
      serial &&
      JSONObject.product[i].description.includes(`Serial: ${serial}`)
    ) {
      alert("Another product already uses this Serial Number.");
      return;
    }
  }

  JSONObject.product[index] = {
    id,
    name,
    description: description + (serial ? ` | Serial: ${serial}` : ""),
    category,
    stock,
    price,
    manufacturer,
    weight,
  };

  saveToLocal();
  alert(`Product ${id} updated.`);
}


// Search for deletion
function searchProductToDelete() {
  const input = document
    .getElementById("search_delete_input")
    .value.trim()
    .toLowerCase();
  const match = JSONObject.product.find(
    (p) => p.id.toLowerCase() === input || p.name.toLowerCase() === input
  );

  if (!match) {
    alert("No product found.");
    document.getElementById("delete_fields").style.display = "none";
    return;
  }

  document.getElementById("delete_fields").style.display = "block";

  const serialMatch = match.description.match(/Serial:\s*(.+)$/);
  const serial = serialMatch ? serialMatch[1] : "";

  document.getElementById("delete_product_id").value = match.id || "";
  document.getElementById("delete_product_name").value = match.name || "";
  document.getElementById("delete_serial_number").value = serial || "";
  document.getElementById("delete_description").value =
    match.description.replace(/ \| Serial: .+$/, "") || "";
  document.getElementById("delete_category").value = match.category || "";
  document.getElementById("delete_stock").value = match.stock || "";
  document.getElementById("delete_price").value = match.price || "";
  document.getElementById("delete_manufacturer").value =
    match.manufacturer || "";
  document.getElementById("delete_weight").value = match.weight || "";

  [
    "delete_product_id",
    "delete_product_name",
    "delete_serial_number",
    "delete_description",
    "delete_category",
    "delete_stock",
    "delete_price",
    "delete_manufacturer",
    "delete_weight",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
}

// Confirm and delete product
function handleDelete() {
  const id = document.getElementById("delete_product_id").value.trim();
  if (id === "0000000") {
    alert("You do not have permission to delete the test product.");
    return;
  }
  
  const serial = document.getElementById("delete_serial_number").value.trim();

  if (!id) {
    alert("No product ID found to delete.");
    return;
  }

  const confirmDelete = confirm(
    "Are you sure you want to delete this product? This action cannot be undone."
  );
  if (!confirmDelete) return;

  const index = JSONObject.product.findIndex((p) => {
    const serialMatch = p.description.includes(`Serial: ${serial}`);
    return p.id === id && (!serial || serialMatch);
  });

  if (index === -1) {
    alert("Matching product not found.");
    return;
  }

  JSONObject.product.splice(index, 1);
  saveToLocal();
  alert(`Product with ID ${id} deleted.`);

  document.getElementById("delete_fields").style.display = "none";
  document.getElementById("search_delete_input").value = "";
}
