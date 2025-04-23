let JSONObject = {
    "product": {
        "id": "input",
        "name": "input"
        "description": "input", //Includes Serial Number if available. There will be no seperate spot for serial number since we might not always have it.
        "category": "input", //Consoles, Games, Accessories, Trading Cards, Collectors Items
        "stock": "input",
        "price": "input",
    }
};

function addProduct(name, description, category, stock, price) {
        let addingProduct = (
          "id": (JSONObject.product.length + 1),
          "name": name,
          "description": description,
          "category": category,
          "stock": stock,
          "price": price,
        );
        JSONObject.product.push(addingProduct);
        alert(name + " has been added under Id: " + JSONObject.product.length);
}'

function deleteProduct(id) {
  for (let i = 0; i < JSONObject.product.length; i++) {
      if (JSONObject.product[i].id == id) { //== since input might be a string
          JSONObject.shopper.splice(i, 1); 
          alert("Product with the id " + id + " has been deleted.");
          break; //To stop the loop since (Hopefully) there should only be one product with that id.
      }
  }
  alert("Nothing was deleted.");
}

function updateObject(id, name, description, category, stock, price) {
   for (let i = 0; i < JSONObject.product.length; i++) {
      if (JSONObject.product[i].id == id) { 
          JSONOBJECT.product[i].name = name;
          JSONOBJECT.product[i].description = description;
          JSONOBJECT.product[i].category = category;
          JSONOBJECT.product[i].stock = stock;
          JSONOBJECT.product[i].price = price;
          alert("Product with the id " + id + " has been updated.");
          break;
      }
  }
  alert("Nothing was updated.");
}
