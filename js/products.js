let currentFilteredProducts = []

function toggleFilter() {
    const sidebar = document.getElementById("filterSidebar")
    sidebar.classList.toggle("hidden")
}

window.onload = () => {
    // Load all products except test
    currentFilteredProducts = JSONObject.product.filter(p => p.id !== "0000000")
    renderProducts(currentFilteredProducts)

    // Apply category filter from URL if present
    const params = new URLSearchParams(window.location.search)
    const categoryFromURL = params.get("category")
    if (categoryFromURL) {
        const checkbox = document.querySelector(`.filterForm input[value="${categoryFromURL.toLowerCase()}"]`)
        if (checkbox) {
            checkbox.checked = true
            applyFilters()
        }
    }
}

// Render all visible products
function renderProducts(products) {
    const container = document.getElementById("productList")
    container.innerHTML = ""

    products.forEach(product => {
        if (product.id === "0000000") return

        const card = document.createElement("div")
        const categoryClass = product.category.toLowerCase().replace(/ /g, "")
        card.className = `productCard ${categoryClass}`
        card.onclick = () =>
            showProductDetail(
                product.id,
                product.name,
                product.description,
                "../" + product.image,
                product.price,
                product.category,
                product.manufacturer,
                product.stock,
                product.weight,
                product.serial
            )

        card.innerHTML = `
      <img src="../${product.image}" alt="${product.name}">
      <div class="productName">${product.name}</div>
      <div class="productDesc">${product.description}</div>
      <div class="price">${product.price}</div>
    `
        container.appendChild(card)
    })
}

// Filter based on checkbox + search (name or ID)
function applyFilters() {
    const searchText = document.getElementById("searchInputTop").value.toLowerCase()
    const checkboxes = document.querySelectorAll('.filterForm input[type="checkbox"]:checked')
    const selectedCategories = Array.from(checkboxes).map(cb => cb.value.toLowerCase())

    currentFilteredProducts = JSONObject.product.filter(product => {
        if (product.id === "0000000") return false

        const nameMatch = product.name.toLowerCase().includes(searchText)
        const idMatch = product.id.toLowerCase().includes(searchText)
        const matchesSearch = nameMatch || idMatch

        const category = product.category.toLowerCase().replace(/ /g, "")
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category)

        return matchesSearch && matchesCategory
    })

    renderProducts(currentFilteredProducts)
}

// Reset everything
function resetView() {
    document.getElementById("searchInputTop").value = ""
    document.querySelectorAll('.filterForm input[type="checkbox"]').forEach(cb => (cb.checked = false))
    currentFilteredProducts = JSONObject.product.filter(p => p.id !== "0000000")
    renderProducts(currentFilteredProducts)
    document.getElementById("productList").classList.remove("hidden")
    document.getElementById("filterSidebar").classList.remove("hidden")
    document.getElementById("productDetailView").style.display = "none"
}

// Show full product details
function showProductDetail(id, name, description, image, price, category, manufacturer, stock, weight, serial = null) {
    const detail = document.getElementById("productDetailView")
    detail.innerHTML = `
    <div class="productDetailContainer">
      <div class="productDetailImage">
        <img src="${image}" alt="${name}">
      </div>
      <div class="productDetailInfo">
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Manufacturer:</strong> ${manufacturer}</p>
        <p><strong>Stock:</strong> ${stock}</p>
        <p><strong>Weight:</strong> ${weight} lbs</p>
        ${serial ? `<p><strong>Serial Number:</strong> ${serial}</p>` : ""}
        <button onclick="resetView()">Back</button>
      </div>
    </div>
  `
    document.getElementById("productList").classList.add("hidden")
    document.getElementById("filterSidebar").classList.add("hidden")
    document.getElementById("searchInputTop").style.display = "none"
    detail.style.display = "block"
}
