let JSONObject = {
  product: [],
};

// Test product that cannot be removed to ensure functionality
JSONObject.product.push(
  {
    id: "0000000",
    name: "Test Product",
    description: "This is a default test product",
    category: "misc",
    stock: "0",
    price: "$0.00",
    manufacturer: "N/A",
    weight: "0",
    image: "images/placeholder.png",
  },

  // Consoles
  {
    id: "1000001",
    name: "Nintendo Entertainment System (NES)",
    description: "Classic 8-bit Nintendo console from the 80s",
    category: "Console",
    stock: "6",
    price: "$129.99",
    manufacturer: "Nintendo",
    weight: "5",
    image: "images/placeholder.png",
  },
  {
    id: "1000002",
    name: "Super Nintendo Entertainment System (SNES)",
    description: "16-bit successor to the NES, a fan favorite",
    category: "Console",
    stock: "4",
    price: "$149.99",
    manufacturer: "Nintendo",
    weight: "5.5",
    image: "images/snes.jpg",
  },
  {
    id: "1000003",
    name: "Sega Genesis Model 2",
    description: "Sega’s best-selling 16-bit console",
    category: "Console",
    stock: "3",
    price: "$99.99",
    manufacturer: "Sega",
    weight: "4",
    image: "images/genesis.jpg",
  },
  {
    id: "1000004",
    name: "Sony PlayStation 2",
    description: "Best-selling home console of all time",
    category: "Console",
    stock: "8",
    price: "$109.99",
    manufacturer: "Sony",
    weight: "6",
    image: "images/ps2.jpg",
  },

  // Games
  {
    id: "2000001",
    name: "Super Mario Bros. 3",
    description: "Iconic NES platformer loved by millions",
    category: "Game",
    stock: "10",
    price: "$39.99",
    manufacturer: "Nintendo",
    weight: "0.2",
    image: "images/mario3.jpg",
  },
  {
    id: "2000002",
    name: "Chrono Trigger",
    description: "Legendary RPG for the SNES",
    category: "Game",
    stock: "2",
    price: "$129.99",
    manufacturer: "Square",
    weight: "0.25",
    image: "images/chrono.jpg",
  },
  {
    id: "2000003",
    name: "Sonic the Hedgehog 2",
    description: "Fast-paced platformer for Sega Genesis",
    category: "Game",
    stock: "6",
    price: "$34.99",
    manufacturer: "Sega",
    weight: "0.2",
    image: "images/sonic2.jpg",
  },
  {
    id: "2000004",
    name: "Final Fantasy X",
    description: "Epic PS2 RPG with a deep storyline",
    category: "Game",
    stock: "5",
    price: "$24.99",
    manufacturer: "Square Enix",
    weight: "0.3",
    image: "images/ffx.jpg",
  },

  // Accessories
  {
    id: "3000001",
    name: "NES Controller",
    description: "Original controller for the Nintendo Entertainment System",
    category: "Accessories",
    stock: "20",
    price: "$24.99",
    manufacturer: "Nintendo",
    weight: "0.4",
    image: "images/nes-controller.jpg",
  },
  {
    id: "3000002",
    name: "SNES Mouse",
    description: "Peripheral used for Mario Paint",
    category: "Accessories",
    stock: "8",
    price: "$29.99",
    manufacturer: "Nintendo",
    weight: "0.5",
    image: "images/snes-mouse.jpg",
  },
  {
    id: "3000003",
    name: "Genesis 6-Button Controller",
    description: "Improved Sega Genesis controller for fighting games",
    category: "Accessories",
    stock: "15",
    price: "$19.99",
    manufacturer: "Sega",
    weight: "0.4",
    image: "images/genesis-controller.jpg",
  },
  {
    id: "3000004",
    name: "PS2 Memory Card (8MB)",
    description: "Official memory card for saving PS2 games",
    category: "Accessories",
    stock: "30",
    price: "$14.99",
    manufacturer: "Sony",
    weight: "0.1",
    image: "images/ps2-memory.jpg",
  },

  // Trading Cards
  {
    id: "4000001",
    name: "Pokémon Base Set Charizard (Unlimited)",
    description: "One of the most iconic trading cards",
    category: "Trading Card",
    stock: "1",
    price: "$299.99",
    manufacturer: "Wizards of the Coast",
    weight: "0.05",
    image: "images/charizard.jpg",
  },
  {
    id: "4000002",
    name: "Yu-Gi-Oh! Blue-Eyes White Dragon",
    description: "Legendary card from the early Yu-Gi-Oh! era",
    category: "Trading Card",
    stock: "3",
    price: "$89.99",
    manufacturer: "Konami",
    weight: "0.05",
    image: "images/blue-eyes.jpg",
  },
  {
    id: "4000003",
    name: "Magic: The Gathering - Shivan Dragon",
    description: "Classic red card from early MTG sets",
    category: "Trading Card",
    stock: "4",
    price: "$29.99",
    manufacturer: "Wizards of the Coast",
    weight: "0.05",
    image: "images/shivan.jpg",
  },
  {
    id: "4000004",
    name: "Pokémon Trainer Card - Professor Oak",
    description: "Base set support card used in many decks",
    category: "Trading Card",
    stock: "10",
    price: "$4.99",
    manufacturer: "Wizards of the Coast",
    weight: "0.05",
    image: "images/prof-oak.jpg",
  },

  // Collector’s Items
  {
    id: "5000001",
    name: "Original Game Boy (DMG-01)",
    description: "The gray brick that started it all",
    category: "Collector’s Item",
    stock: "2",
    price: "$149.99",
    manufacturer: "Nintendo",
    weight: "1.2",
    image: "images/gameboy.jpg",
  },
  {
    id: "5000002",
    name: "Virtual Boy",
    description: "Nintendo’s rare and infamous 3D console",
    category: "Collector’s Item",
    stock: "1",
    price: "$499.99",
    manufacturer: "Nintendo",
    weight: "7",
    image: "images/virtual-boy.jpg",
  },
  {
    id: "5000003",
    name: "EarthBound (Complete in Box)",
    description: "Cult classic SNES RPG with box and manual",
    category: "Collector’s Item",
    stock: "1",
    price: "$999.99",
    manufacturer: "Nintendo",
    weight: "1.5",
    image: "images/earthbound.jpg",
  },
  {
    id: "5000004",
    name: "Atari 2600 Heavy Sixer",
    description: "First production model of the Atari 2600",
    category: "Collector’s Item",
    stock: "1",
    price: "$349.99",
    manufacturer: "Atari",
    weight: "6.5",
    image: "images/atari.jpg",
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
      "update_weight",
    ].forEach((id) => {
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
    "update_weight",
  ];

  if (match.id === "0000000") {
    updateFields.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.disabled = true;
    });
  } else {
    updateFields.forEach((id) => {
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
