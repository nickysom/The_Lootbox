let JSONObject = {
  product: [],
};

//Test product that cannot be removed to ensure functionality.
JSONObject.product.push({
  id: "0000000",
  name: "Test Product",
  description: "This is a default test product",
  category: "misc",
  stock: "0",
  price: "$0.00",
  manufacturer: "N/A",
  weight: "0"
},
{
  id: "0000001”,
  name: “Split Console",
  description: “This console plays sports.”,
  category: “Console”,
  stock: “5”,
  price: "$259.99”,
  manufacturer: "N/A",
  weight: “8”
},
{
  id: "0000002”,
  name: “Round Console”,
  description: “This console can roll.”,
  category: “Console”,
  stock: “5”,
  price: "$159.99”,
  manufacturer: "N/A",
  weight: “5”
},
{
  id: "0000003”,
  name: “Upside Down Console”,
  description: “This console randomly flips upside down. (Can break easily)”,
  category: “Console”,
  stock: “5”,
  price: "$549.99”,
  manufacturer: "N/A",
  weight: “15”
},
{
  id: "0000004”,
  name: “Floating Console”,
  description: “This console can float through the power of magnetism.”,
  category: “Console”,
  stock: “2”,
  price: "$839.98”,
  manufacturer: "N/A",
  weight: “12”
},
{
  id: "0000005”,
  name: “Football”,
  description: “A great console game.”,
  category: “Game”,
  stock: “200”,
  price: "$80.00”,
  manufacturer: "N/A",
  weight: “2”
},
{
  id: "0000006”,
  name: “Running”,
  description: “A Floating Console only game that results in the console orbiting around you.”,
  category: “Game”,
  stock: “200”,
  price: "$80.00”,
  manufacturer: "N/A",
  weight: “2”
},
{
  id: "0000007”,
  name: “Rotate”,
  description: “A round console only game that results in the console rotating at high velocity into the nearest wall.”,
  category: “Game”,
  stock: “200”,
  price: "$80.00”,
  manufacturer: "N/A",
  weight: “2”
},
{
  id: "0000008”,
  name: “Split”,
  description: “A split console only game that enables any game to be two player.”,
  category: “Game”,
  stock: “200”,
  price: "$80.00”,
  manufacturer: "N/A",
  weight: “2”
},
{
  id: "0000009”,
  name: “Universal Remote”,
  description: “A wireless remote that works for any console.”,
  category: “Accessories”,
  stock: “100”,
  price: "$60.00”,
  manufacturer: "N/A",
  weight: “3”
},
{
  id: "0000010”,
  name: “Do Nothing Remote”,
  description: “A remote that has hundreds of buttons that have no function.”,
  category: “Accessories”,
  stock: “100”,
  price: "$510.00”,
  manufacturer: "N/A",
  weight: “52”
},
{
  id: "0000011”,
  name: “Motion Tracker”,
  description: “A motion tracking device to assist consoles in tracking the user for specific games.”,
  category: “Accessories”,
  stock: “50”,
  price: "$100.00”,
  manufacturer: "N/A",
  weight: “1”
},
{
  id: "0000012”,
  name: “Sphere”,
  description: “When played in conjunction with running on the floating console, will result in the console having a secondary orbit from this accessory. Resulting in a moon.”,
  category: “Accessories”,
  stock: “10”,
  price: "$800.00”,
  manufacturer: "N/A",
  weight: “20”
},
{
  id: "0000013”,
  name: “Orbit?”,
  description: “You have successfully created a representation of our planetary orbit by using 3 of our products in a specific way.”,
  category: “Trading Card”,
  stock: “10”,
  price: "$200.00”,
  manufacturer: "N/A",
  weight: “1”
},
{
  id: "0000014”,
  name: “Just keep Spinning”,
  description: “You have successfully made the round console start rotating. Good luck stopping it.”,
  category: “Trading Card”,
  stock: “10”,
  price: "$200.00”,
  manufacturer: "N/A",
  weight: “1”
},
{
  id: "0000015”,
  name: “You broke your console.”,
  description: “The most common trading card. These consoles are very fragile.”,
  category: “Trading Card”,
  stock: “100”,
  price: "$10.00”,
  manufacturer: "N/A",
  weight: “1”
},
{
  id: "0000016”,
  name: “How?!”,
  description: “You somehow got your console to play football. Congrats?”,
  category: “Trading Card”,
  stock: “10”,
  price: "$200.00”,
  manufacturer: "N/A",
  weight: “1”
},
{
  id: "0000017”,
  name: “Meteorite”,
  description: “One of a kind accessory that can be using in conjunction with the floating console, running, and sphere. This results in an asteroid belt forming. Can get in the way of the users’ line of sight.”,
  category: “Collector’s Item”,
  stock: “1”,
  price: "$8000.00”,
  manufacturer: "N/A",
  weight: “500”
},
{
  id: "0000018”,
  name: “Do Something Remote”,
  description: “A remote that does something. Nobody knows what though.”,
  category: “Collector’s Item”,
  stock: “1”,
  price: "$5000.00”,
  manufacturer: "N/A",
  weight: “5”
},
{
  id: "0000019”,
  name: “Stop”,
  description: “A one of a kind item that can stop the round console once it has begun rotating.”,
  category: “Collector’s Item”,
  stock: “1”,
  price: "$3000.00”,
  manufacturer: "N/A",
  weight: “7”
},
{
  id: "0000020”,
  name: “Fix”,
  description: “Turns the console into a normal console. Nobody has bought this yet.”,
  category: “Collector’s Item”,
  stock: “1”,
  price: "$5.00”,
  manufacturer: "N/A",
  weight: “10”
}
);

// Saves data locally to be accessed more easily.
function saveToLocal() {
  localStorage.setItem("products", JSON.stringify(JSONObject.product));
}

//Reset form inputs for a clean look.
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

// Loads the local data saved in saveToLocal function.
function loadFromLocal() {
  const saved = localStorage.getItem("products");
  if (saved) {
    JSONObject.product = JSON.parse(saved);
  }
}

// Add new product after validation.
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

// Validation and submits addProduct function.
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

// Load data and reset forms.
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

  // Auto-add $ prefix.
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

// Export data to downloadable file.
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

// Search product for update.
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

// Lock test object.
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

// Save updates.
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


// Search for deletion.
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

// Confirm and delete product.
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
