// ===================== PRODUCT DATABASE ===================== //
const productsHierarchy = {
  "ARC SERIES": {
    "SINGLE PHASE": [
      { name: "ARC 200-IGOLD", img: "./images/product1.png", desc: "Powerful ARC welder" },
      { name: "ARC 250-IGOLD", img: "./images/product1.png", desc: "High duty cycle" },
      { name: "ARC 250 IJ-S", img: "./images/product1.png", desc: "Reliable & compact" },
      { name: "ARC 300 IJ-S", img: "./images/product1.png", desc: "Professional welding machine" }
    ],
    "1+2 PHASE": [
      { name: "ARC 200 ST", img: "./images/product1.png", desc: "Stable output performance" },
      { name: "ARC 250 ST", img: "./images/product1.png", desc: "Advanced cooling system" },
      { name: "ARC 300 ST", img: "./images/product1.png", desc: "Efficient welding output" }
    ],
    "1+2+3 PHASE": [
      { name: "ARC 400 ST", img: "./images/product1.png", desc: "Durable industrial welder" }
    ],
    "THREE PHASE": [
      { name: "ARC 300 IJ-T", img: "./images/product1.png", desc: "High performance" },
      { name: "ARC 400-ULTRA", img: "./images/product1.png", desc: "Heavy duty welding" },
      { name: "ARC 400-IJ", img: "./images/product1.png", desc: "Powerful arc control" },
      { name: "ARC 630-IJ", img: "./images/product1.png", desc: "Industrial welding capacity" }
    ]
  },

  "MIG SERIES": {
    "THREE PHASE": [
      { name: "MIG 300-IJ", img: "./images/product1.png", desc: "Efficient metal welding" },
      { name: "MIG 400-IJ", img: "./images/product1.png", desc: "Robust & stable" },
      { name: "MIG 630-IJ", img: "./images/product1.png", desc: "Heavy-duty MIG welding" }
    ]
  },

  "TIG SERIES": {
    "SINGLE PHASE": [
      { name: "TIG 250 IJ-S", img: "./images/product1.png", desc: "Excellent arc quality" },
      { name: "TIG 300 IJ-S", img: "./images/product1.png", desc: "High accuracy welding" }
    ],
    "THREE PHASE": [
      { name: "TIG 300 IJ-T", img: "./images/product1.png", desc: "Precision welding" },
      { name: "TIG 400-IJ", img: "./images/product1.png", desc: "Stable output arc" },
      { name: "TIG 630-IJ", img: "./images/product1.png", desc: "Industrial TIG welding" }
    ]
  },

  "CUT SERIES": {
    "THREE PHASE": [
      { name: "CUT-100 LGK", img: "./images/product1.png", desc: "Smooth Plasma Cutting" }
    ]
  }
};

// ----------------- DOM -----------------
const productGrid = document.getElementById("productGrid");

// Helper function to read text before span & arrow
function getText(el) {
  return el.childNodes[0].nodeValue.trim();
}

// ----------------- PRINT PRODUCTS -----------------
function showProducts(list) {
  productGrid.innerHTML = list.map(item => `
    <div class="product-box">
      <div class="product-top">
          <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="product-bottom">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <a href="./product-details.html" class="btn-view">View Details</a>
      </div>
    </div>
  `).join("");
}

// LEVEL 1 → SERIES CLICK
document.querySelectorAll(".has-dropdown").forEach(seriesItem => {
  seriesItem.addEventListener("click", e => {
    if (e.target.closest(".sub-category")) return;

    const seriesName = getText(seriesItem);
    let products = [];

    Object.values(productsHierarchy[seriesName]).forEach(arr => products.push(...arr));
    showProducts(products);
  });
});

// LEVEL 2 → SUBCATEGORY CLICK
document.querySelectorAll(".has-sub-dropdown").forEach(subItem => {
  subItem.addEventListener("click", e => {
    e.stopPropagation();

    const seriesName = getText(subItem.closest(".has-dropdown"));
    const subName = getText(subItem);

    showProducts(productsHierarchy[seriesName][subName]);
  });
});

// LEVEL 3 → MODEL CLICK
document.querySelectorAll(".sub-sub-category li").forEach(modelItem => {
  modelItem.addEventListener("click", e => {
    e.stopPropagation();

    const seriesName = getText(modelItem.closest(".has-dropdown"));
    const subName = getText(modelItem.closest(".has-sub-dropdown"));
    const modelName = modelItem.textContent.trim();
    const modelData = productsHierarchy[seriesName][subName].find(m => m.name === modelName);

    showProducts([modelData]);
  });
});

// -------------- SHOW DEFAULT ARC SERIES AT PAGE LOAD --------------
(function loadDefault() {
  const firstSeries = document.querySelector(".category-item.has-dropdown");
  firstSeries.classList.add("open", "active");

  let products = [];
  Object.values(productsHierarchy["ARC SERIES"]).forEach(arr => products.push(...arr));

  showProducts(products);
})();

// ----------- LEVEL 1 (MAIN DROPDOWN) -----------
document.querySelectorAll(".has-dropdown").forEach(item => {
  item.addEventListener("click", e => {

    // ignore subcategory clicks
    if (e.target.closest(".sub-category")) return;

    // close all other main dropdowns
    document.querySelectorAll(".has-dropdown").forEach(i => {
      if (i !== item) {
        i.classList.remove("open");

        // also close all inner sub dropdowns inside them
        i.querySelectorAll(".has-sub-dropdown").forEach(sub => sub.classList.remove("open"));
      }
    });

    // toggle current dropdown
    item.classList.toggle("open");

    // if closing current item => close its sub dropdowns too
    if (!item.classList.contains("open")) {
      item.querySelectorAll(".has-sub-dropdown").forEach(sub => sub.classList.remove("open"));
    }
  });
});

// ----------- LEVEL 2 (SUB DROPDOWN) -----------
document.querySelectorAll(".has-sub-dropdown").forEach(sub => {
  sub.addEventListener("click", e => {
    e.stopPropagation();

    // close other submenu items
    document.querySelectorAll(".has-sub-dropdown").forEach(i => {
      if (i !== sub) i.classList.remove("open");
    });

    // toggle current submenu
    sub.classList.toggle("open");
  });
});
