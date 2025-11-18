// Top Seller Products start 
const productsData = {
  all: [
    { name: "ARC 250 ST", desc: "Professional Welding Equipment", img: "./images/product1.png" },
    { name: "MIG 300", desc: "Professional Welding Equipment", img: "./images/product1.png" },
    { name: "TIG 200 Pro", desc: "Professional Welding Equipment", img: "./images/product1.png" },
    { name: "Transformer TX-250", desc: "Professional Welding Equipment", img: "./images/product1.png" },
    { name: "MIG 500", desc: "Professional Welding Equipment", img: "./images/product1.png" },
    { name: "TIG 400 Ultra", desc: "Professional Welding Equipment", img: "./images/product1.png" }
  ],

  arc: [
    { name: "ARC 200X", desc: "Strong Performance", img: "./images/product1.png" },
    { name: "ARC 250 Pro", desc: "Compact Welding Machine", img: "./images/product1.png" },
    { name: "ARC 200X", desc: "Strong Performance", img: "./images/product1.png" },
    { name: "ARC 250 Pro", desc: "Compact Welding Machine", img: "./images/product1.png" }
  ],

  mig: [
    { name: "MIG 300X", desc: "High Efficiency Welding", img: "./images/product2.webp" },
    { name: "MIG 500X", desc: "Heavy Duty Welding", img: "./images/product2.webp" },
    { name: "MIG 300X", desc: "High Efficiency Welding", img: "./images/product2.webp" },
    { name: "MIG 500X", desc: "Heavy Duty Welding", img: "./images/product2.webp" }
  ],

  tig: [
    { name: "TIG 200 Lite", desc: "Smooth Welding Output", img: "./images/product1.png" },
    { name: "TIG 400 Max", desc: "Professional TIG Machine", img: "./images/product1.png" },
    { name: "TIG 400 Max", desc: "Professional TIG Machine", img: "./images/product1.png" }
  ],

  transformer: [
    { name: "TX 200 Basic", desc: "Reliable Transformer Welder", img: "./images/trans1.png" }
  ],

  accessories: [
    { name: "Welding Helmet", desc: "Safety First", img: "./images/product1.png" },
    { name: "Welding Gloves", desc: "Heat Resistant", img: "./images/product1.png" },
    { name: "Welding Helmet", desc: "Safety First", img: "./images/product1.png" },
    { name: "Welding Gloves", desc: "Heat Resistant", img: "./images/product1.png" }
  ]
};

// -------- FUNCTIONS -------------
const productGrid = document.getElementById("productGrid");
const categoryTabs = document.querySelectorAll("#categoryTabs .category-item");

// Render Products
function renderProducts(category) {
  const items = productsData[category] || [];

  productGrid.innerHTML = items.map(product => `
        <div class="product-box">
            <div class="product-top">
                <span class="badge">Top Seller</span>
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-bottom">
                <h4>${product.name}</h4>
                <p>${product.desc}</p>
                <a href="#" class="btn-view">View Details</a>
            </div>
        </div>
    `).join("");
}

// ------------------------------
// CATEGORY CLICK EVENTS
// ------------------------------
categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".category-item.active").classList.remove("active");
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");
    renderProducts(category);
  });
});

// Load default
renderProducts("all");



