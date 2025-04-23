let JSONObject = {
    product: [
        {"id":"1","name":"Switch","description":"A Switch owned by Nintendo.","category":"Console","stock":"10","price":"$249.99", "serial":""},
        {"id":"2","name":"Switch","description":"A Switch owned by Nintendo.","category":"Console","stock":"10","price":"$249.99", "serial":""},
        {"id":"3","name":"Switch","description":"A Switch owned by Nintendo.","category":"Console","stock":"10","price":"$249.99", "serial":""},
        {"id":"4","name":"Switch","description":"A Switch owned by Nintendo.","category":"Console","stock":"10","price":"$249.99", "serial":""},
        
        {"id":"5","name":"Mario Party","description":"A game by Nintendo.","category":"Game","stock":"10","price":"$70.00", "serial":""},
        {"id":"6","name":"Mario Party","description":"A game by Nintendo.","category":"Game","stock":"10","price":"$70.00", "serial":""},
        {"id":"7","name":"Mario Party","description":"A game by Nintendo.","category":"Game","stock":"10","price":"$70.00", "serial":""},
        {"id":"8","name":"Mario Party","description":"A game by Nintendo.","category":"Game","stock":"10","price":"$70.00", "serial":""},

        {"id":"9","name":"Remote","description":"A regular remote.","category":"Accessories","stock":"10","price":"$60.00", "serial":""},
        {"id":"10","name":"Remote","description":"A regular remote.","category":"Accessories","stock":"10","price":"$60.00", "serial":""},
        {"id":"11","name":"Remote","description":"A regular remote.","category":"Accessories","stock":"10","price":"$60.00", "serial":""},
        {"id":"12","name":"Remote","description":"A regular remote.","category":"Accessories","stock":"10","price":"$60.00", "serial":""},

        {"id":"13","name":"Pikachu","description":"A pokemon trading card.","category":"Trading Card","stock":"10","price":"$5.38", "serial":""},
        {"id":"14","name":"Pikachu","description":"A pokemon trading card.","category":"Trading Card","stock":"10","price":"$5.38", "serial":""},
        {"id":"15","name":"Pikachu","description":"A pokemon trading card.","category":"Trading Card","stock":"10","price":"$5.38", "serial":""},
        {"id":"16","name":"Pikachu","description":"A pokemon trading card.","category":"Trading Card","stock":"10","price":"$5.38", "serial":""},

        {"id":"17","name":"Random Item","description":"A rare collector's item.","category":"Collector's Item","stock":"10","price":"$1985.38", "serial":""},
        {"id":"18","name":"Random Item","description":"A rare collector's item.","category":"Collector's Item","stock":"10","price":"$1985.38", "serial":""},
        {"id":"19","name":"Random Item","description":"A rare collector's item.","category":"Collector's Item","stock":"10","price":"$1985.38", "serial":""},
        {"id":"20","name":"Random Item","description":"A rare collector's item.","category":"Collector's Item","stock":"10","price":"$1985.38", "serial":""},
    ]
  };
  
  // Save to local storage
  function saveToLocal() {
    localStorage.setItem("products", JSON.stringify(JSONObject.product));
  }
  
  // Load from local storage
  function loadFromLocal() {
    const saved = localStorage.getItem("products");
    if (saved) {
      JSONObject.product = JSON.parse(saved);
    }
  }
  
  // Add a product if ID and Serial are unique
  function addProduct(id, name, description, category, stock, price, serial) {
    if (!id || !name || !description || !category || !stock || !price) {
      alert("All fields except the serial number are required.");
      return;
    }
  
    // Check for existing ID or serial in description
    for (let i = 0; i < JSONObject.product.length; i++) {
      const p = JSONObject.product[i];
      if (p.id == id) {
        alert("A product with this ID already exists.");
        return;
      }
      if (serial && p.description.includes(`Serial: ${serial}`)) {
        alert("A product with this Serial Number already exists.");
        return;
      }
    }
  
    let newProduct = {
      id: id,
      name: name,
      description: description + (serial ? ` | Serial: ${serial}` : ""),
      category: category,
      stock: stock,
      price: price
    };
  
    JSONObject.product.push(newProduct);
    saveToLocal();
    alert(`${name} has been added with ID: ${id}`);
  }
  
  // Delete a product by ID and Serial
  function deleteProduct(id, serial) {
    for (let i = 0; i < JSONObject.product.length; i++) {
      const p = JSONObject.product[i];
      if (p.id == id && (!serial || p.description.includes(`Serial: ${serial}`))) {
        JSONObject.product.splice(i, 1);
        saveToLocal();
        alert(`Product with ID ${id} deleted.`);
        return;
      }
    }
    alert("No matching product found to delete.");
  }
  
  // Update product by ID
  function updateObject(id, name, description, category, stock, price, serial) {
    for (let i = 0; i < JSONObject.product.length; i++) {
      if (JSONObject.product[i].id == id) {
        JSONObject.product[i].name = name;
        JSONObject.product[i].description = description + (serial ? ` | Serial: ${serial}` : "");
        JSONObject.product[i].category = category;
        JSONObject.product[i].stock = stock;
        JSONObject.product[i].price = price;
        saveToLocal();
        alert(`Product with ID ${id} has been updated.`);
        return;
      }
    }
    alert("No product found with that ID to update.");
  }
  
  // Handles button click for Add
  function handleAdd() {
    const id = document.getElementById("product_id").value.trim();
    const name = document.getElementById("product_name").value.trim();
    const serial = document.getElementById("serial_number").value.trim();
    const description = document.getElementById("description").value.trim();
    const category = document.getElementById("category").value;
    const stock = document.getElementById("stock").value.trim();
    const price = document.getElementById("price").value.trim();
  
    addProduct(id, name, description, category, stock, price, serial);
  }
  
  // Handles button click for Delete
  function handleDelete() {
    const id = document.getElementById("product_id").value.trim();
    const serial = document.getElementById("serial_number").value.trim();
  
    if (!id) {
      alert("Product ID is required to delete.");
      return;
    }
  
    deleteProduct(id, serial);
  }
  
  // Handles button click for Update
  function handleUpdate() {
    const id = document.getElementById("product_id").value.trim();
    const name = document.getElementById("product_name").value.trim();
    const serial = document.getElementById("serial_number").value.trim();
    const description = document.getElementById("description").value.trim();
    const category = document.getElementById("category").value;
    const stock = document.getElementById("stock").value.trim();
    const price = document.getElementById("price").value.trim();
  
    if (!id || !name || !description || !category || !stock || !price) {
      alert("All fields except serial number are required for update.");
      return;
    }
  
    updateObject(id, name, description, category, stock, price, serial);
  }
  
  // Clears the form when the page is refreshed and loads data from local storage
  window.onload = function () {
    loadFromLocal();
    document.querySelector(".product-form").reset();
  };
  
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
  
  
  
  
