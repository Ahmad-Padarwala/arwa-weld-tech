// slider hero section
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  let activeIndex = 0;
  let slideInterval;

  function setActiveCard(index) {
    cards.forEach(c => c.classList.remove("active"));
    cards[index].classList.add("active");
    activeIndex = index;
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % cards.length;
      setActiveCard(nextIndex);
    }, 5000); // 5 seconds
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // Initialize
  setActiveCard(0);
  startAutoSlide();

  // Handle manual hover/click
  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      if (index === activeIndex) {
        return;
      }
      setActiveCard(index);
      resetAutoSlide();
    });

    card.addEventListener("click", () => {
      setActiveCard(index);
      resetAutoSlide();
    });
  });
});

// product tab json data 
const welderData = {
  "arc": {
    "title": "ARC Welder",
    "models": [
      {
        "name": "250 ST",
        "bodyTypes": [
          { "name": "Standard", "images": ["./images/Group 4.webp", "./images/product1.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/product1.png" },
          { "name": "blue", "image": "./images/Group 4.webp" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "250 IJ",
        "bodyTypes": [
          { "name": "Heavy Duty", "images": ["./images/product2.png", "./images/product3.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "400 IJ",
        "bodyTypes": [
          { "name": "Industrial", "images": ["./images/product3.png", "./images/product2.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "410 IJ",
        "bodyTypes": [
          { "name": "Compact", "images": ["./images/product1.png", "./images/product3.png", "./images/product2.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      }
    ]
  },

  "mig": {
    "title": "MIG Welder",
    "models": [
      {
        "name": "MIG-200",
        "bodyTypes": [
          { "name": "Compact", "images": ["./images/product1.png", "./images/product2.png", "./images/product3.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "MIG-300",
        "bodyTypes": [
          { "name": "Standard", "images": ["./images/product2.png", "./images/product3.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "MIG-400",
        "bodyTypes": [
          { "name": "Heavy Duty", "images": ["./images/product3.png", "./images/product2.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "MIG-500",
        "bodyTypes": [
          { "name": "Industrial", "images": ["./images/product1.png", "./images/product3.png", "./images/product2.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      }
    ]
  },

  "tig": {
    "title": "TIG Welder",
    "models": [
      {
        "name": "TIG-150",
        "bodyTypes": [
          { "name": "Compact", "images": ["./images/product1.png", "./images/product2.png", "./images/product3.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "TIG-200",
        "bodyTypes": [
          { "name": "Standard", "images": ["./images/product2.png", "./images/product3.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "TIG-300",
        "bodyTypes": [
          { "name": "Pro Body", "images": ["./images/product3.png", "./images/product1.png", "./images/product2.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "TIG-400",
        "bodyTypes": [
          { "name": "Industrial", "images": ["./images/product1.png", "./images/product3.png", "./images/product2.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      }
    ]
  },

  "transformer": {
    "title": "Transformer",
    "models": [
      {
        "name": "TX-250",
        "bodyTypes": [
          { "name": "Compact", "images": ["./images/product1.png", "./images/product2.png", "./images/product3.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "TX-400",
        "bodyTypes": [
          { "name": "Heavy Duty", "images": ["./images/product2.png", "./images/product3.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "TX-600",
        "bodyTypes": [
          { "name": "Industrial", "images": ["./images/product3.png", "./images/product2.png", "./images/product1.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      },
      {
        "name": "TX-800",
        "bodyTypes": [
          { "name": "Ultra", "images": ["./images/product1.png", "./images/product3.png", "./images/product2.png"] }
        ],
        "colors": [
          { "name": "yellow", "image": "./images/color-yellow.png" },
          { "name": "blue", "image": "./images/color-blue.png" },
          { "name": "red", "image": "./images/color-red.png" },
          { "name": "green", "image": "./images/color-green.png" }
        ]
      }
    ]
  }
};


// --- Get Elements ---
const tabContainer = document.querySelector('.tabs');
const modelContainer = document.querySelector('.tabs-two');
const productListContainer = document.querySelector('.product-list');
const mainDisplay = document.getElementById('main-image');
const colorContainer = document.querySelector('.color-options'); // <-- color container

// --- Render Tabs ---
tabContainer.innerHTML = Object.keys(welderData)
  .map((key, index) =>
    `<button class="tab ${index === 0 ? 'active' : ''}" data-tab="${key}">${welderData[key].title}</button>`
  )
  .join('');

// --- Initialize Default ---
let currentTab = 'arc';
renderModels(currentTab);

// --- Tab Click Events ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    renderModels(currentTab);
  });
});

// --- Render Models ---
function renderModels(tabKey) {
  const models = welderData[tabKey].models;
  modelContainer.innerHTML = models
    .map((m, i) => `<button class="tab-two ${i === 0 ? 'active' : ''}" data-model="${i}">${m.name}</button>`)
    .join('');

  renderBodyTypes(tabKey, 0);

  document.querySelectorAll('.tab-two').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-two').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderBodyTypes(tabKey, btn.dataset.model);
    });
  });
}

// --- Render Body Types + Colors ---
function renderBodyTypes(tabKey, modelIndex) {
  const model = welderData[tabKey].models[modelIndex];
  const body = model.bodyTypes[0];
  const images = body.images;
  const colors = model.colors || []; // if color data exists

  // --- Render Thumbnails ---
  productListContainer.innerHTML = images
    .map((img, i) =>
      `<div class="thumb-box">
          <img src="${img}" class="small-img ${i === 0 ? 'active' : ''}" data-big="${img}" alt="">
       </div>`
    )
    .join('');

  // --- Set Default Image ---
  mainDisplay.src = images[0];

  // --- Small Image Click ---
  document.querySelectorAll('.small-img').forEach(img => {
    img.addEventListener('click', () => {
      document.querySelectorAll('.small-img').forEach(i => i.classList.remove('active'));
      img.classList.add('active');
      mainDisplay.src = img.dataset.big;
    });
  });

  // --- Render Color Dots ---
  if (colorContainer) {
    colorContainer.innerHTML = colors
      .map(
        (color, i) =>
          `<span class="color-dot ${color.name} ${i === 0 ? 'active' : ''}" data-img="${color.image}"></span>`
      )
      .join('');

    // --- Default color image if available ---
    if (colors.length > 0) mainDisplay.src = colors[0].image;

    // --- Color Click Logic ---
    document.querySelectorAll('.color-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const colorImage = dot.dataset.img;
        mainDisplay.src = colorImage;
        document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
  }
}
