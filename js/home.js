// Slider Service Section
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

// Product Tab JSON Data
// OEM Manufacturing Excellence start
const welderData = {

  /* -------------- (1) ARC SERIES ------------ */
  "arc": {
    "title": "ARC SERIES",

    "phases": {
      "single":
        { "title": "SINGLE PHASE", "models": ["ARC 200-IGOLD", "ARC 250-IGOLD", "ARC 250 IJ-S", "ARC 300 IJ-S"] },
      "12phase": { "title": "1+2 PHASE", "models": ["ARC 200 ST", "ARC 250 ST", "ARC 300 ST"] },
      "123phase": { "title": "1+2+3 PHASE", "models": ["ARC 400 ST"] },
      "three": { "title": "THREE PHASE", "models": ["ARC 300 IJ-T", "ARC 400-ULTRA", "ARC 400-IJ", "ARC 630-IJ"] }
    },

    "details": {
      "ARC 200-IGOLD": [
        {
          "name": "Compact",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/product1.png" },
                { "name": "blue", "image": "./images/product2.webp" }
              ]
            },
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/product1.png" },
                { "name": "blue", "image": "./images/product2.webp" }
              ]
            },
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" }
              ]
            },
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" }
              ]
            }
          ]
        }
      ],
      "ARC 250-IGOLD": [
        {
          "name": "Standard",
          "images": [
            {
              "src": "./images/product2.png",
              "colors": [
                { "name": "red", "image": "./images/color-red.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ],
      "ARC 250 IJ-S": [
        {
          "name": "Heavy Duty",
          "images": [
            {
              "src": "./images/product3.png",
              "colors": [
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "yellow", "image": "./images/color-yellow.png" }
              ]
            }
          ]
        }
      ],
      "ARC 300 IJ-S": [
        {
          "name": "Industrial",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "green", "image": "./images/color-green.png" },
                { "name": "red", "image": "./images/color-red.png" }
              ]
            }
          ]
        }
      ],
      "ARC 200 ST": [
        {
          "name": "Compact",
          "images": [
            {
              "src": "./images/product2.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "red", "image": "./images/color-red.png" }
              ]
            }
          ]
        }
      ],
      "ARC 250 ST": [
        {
          "name": "Standard",
          "images": [
            {
              "src": "./images/product3.png",
              "colors": [
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ],
      "ARC 300 ST": [
        {
          "name": "Heavy Duty",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" }
              ]
            }
          ]
        }
      ],
      "ARC 400 ST": [
        {
          "name": "Ultra Industrial",
          "images": [
            {
              "src": "./images/product3.png",
              "colors": [
                { "name": "red", "image": "./images/color-red.png" },
                { "name": "yellow", "image": "./images/color-yellow.png" }
              ]
            }
          ]
        }
      ],
      "ARC 300 IJ-T": [
        {
          "name": "Three Phase Compact",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "red", "image": "./images/color-red.png" }
              ]
            }
          ]
        }
      ],
      "ARC 400-ULTRA": [
        {
          "name": "Ultra Heavy",
          "images": [
            {
              "src": "./images/product2.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ],
      "ARC 400-IJ": [
        {
          "name": "Industrial",
          "images": [
            {
              "src": "./images/product3.png",
              "colors": [
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "yellow", "image": "./images/color-yellow.png" }
              ]
            }
          ]
        }
      ],
      "ARC 630-IJ": [
        {
          "name": "Ultra Industrial Pro",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "green", "image": "./images/color-green.png" },
                { "name": "red", "image": "./images/color-red.png" }
              ]
            }
          ]
        }
      ]
    },
  },

  /* -------------- (2) MIG SERIES ------------ */
  "mig": {
    "title": "MIG SERIES",

    "phases": {
      "single": { "title": "THREE PHASE", "models": ["MIG 300-IJ", "MIG 400-IJ", "MIG 630-IJ"] },
    },

    "details": {
      "MIG 300-IJ": [
        {
          "name": "Compact",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" }
              ]
            },
          ]
        }
      ],
      "MIG 400-IJ": [
        {
          "name": "Standard",
          "images": [
            {
              "src": "./images/product2.png",
              "colors": [
                { "name": "red", "image": "./images/color-red.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ],
      "MIG 630-IJ": [
        {
          "name": "Heavy Duty",
          "images": [
            {
              "src": "./images/product3.png",
              "colors": [
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "yellow", "image": "./images/color-yellow.png" }
              ]
            }
          ]
        }
      ],
    }
  },

  /* -------------- (3) TIG SERIES ------------ */
  "tig": {
    "title": "TIG SERIES",

    "phases": {
      "single": { "title": "SINGLE PHASE", "models": ["TIG 250 IJ-S", "TIG 300 IJ-S"] },
      "12phase": { "title": "THREE PHASE", "models": ["TIG 300 IJ-T", "TIG 400-IJ", "TIG 630-IJ"] },
    },

    "details": {
      "TIG 250 IJ-S": [
        {
          "name": "Compact",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" }
              ]
            }
          ]
        }
      ],
      "TIG 300 IJ-S": [
        {
          "name": "Standard",
          "images": [
            {
              "src": "./images/product2.png",
              "colors": [
                { "name": "red", "image": "./images/color-red.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ],
      "TIG 300 IJ-T": [
        {
          "name": "Three Phase Compact",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "yellow", "image": "./images/color-yellow.png" }
              ]
            }
          ]
        }
      ],

      "TIG 400-IJ": [
        {
          "name": "Industrial",
          "images": [
            {
              "src": "./images/product3.png",
              "colors": [
                { "name": "red", "image": "./images/color-red.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ],

      "TIG 630-IJ": [
        {
          "name": "Ultra Heavy Duty",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" },
                { "name": "green", "image": "./images/color-green.png" }
              ]
            }
          ]
        }
      ]
    }
  },

  /* -------------- (4) CUT SERIES ------------ */
  "cut": {
    "title": "CUT SERIES",

    "phases": {
      "single": { "title": "THREE PHASE", "models": ["CUT-100 LGK"] },
    },

    "details": {
      "CUT-100 LGK": [
        {
          "name": "Compact",
          "images": [
            {
              "src": "./images/product1.png",
              "colors": [
                { "name": "yellow", "image": "./images/color-yellow.png" },
                { "name": "blue", "image": "./images/color-blue.png" }
              ]
            }
          ]
        }
      ],
    }
  }

};

/* --------------- DOM SELECTORS --------------- */
const tabContainer = document.querySelector('.tabs');
const phaseContainer = document.querySelector('.tabs-phase');
const modelContainer = document.querySelector('.tabs-two');
const productListContainer = document.querySelector('.product-list');
const mainDisplay = document.getElementById('main-image');
const colorContainer = document.querySelector('.color-options');

let currentCategory = "arc";
let currentPhase = "";
let currentModel = "";

/* --------------- RENDER CATEGORY --------------- */
function renderCategories() {
  tabContainer.innerHTML = Object.keys(welderData)
    .map((key, i) => `<button class="tab ${i === 0 ? 'active' : ''}" data-cat="${key}">${welderData[key].title}</button>`).join('');

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      renderPhases(currentCategory);
    });
  });
}

/* --------------- RENDER PHASES --------------- */
function renderPhases(cat) {
  const phases = welderData[cat].phases;
  phaseContainer.innerHTML = Object.keys(phases)
    .map((p, i) => `<button class="tab-phase ${i === 0 ? 'active' : ''}" data-phase="${p}">${phases[p].title}</button>`).join('');

  currentPhase = Object.keys(phases)[0];
  renderModels(cat, currentPhase);

  document.querySelectorAll('.tab-phase').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-phase').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentPhase = btn.dataset.phase;
      renderModels(cat, currentPhase);
    });
  });
}

/* --------------- RENDER MODELS --------------- */
function renderModels(cat, phase) {
  const models = welderData[cat].phases[phase].models;
  modelContainer.innerHTML = models.map((m, i) => `<button class="tab-two ${i === 0 ? 'active' : ''}" data-model="${m}">${m}</button>`).join('');

  currentModel = models[0];
  renderProduct(cat, currentModel);

  document.querySelectorAll('.tab-two').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-two').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentModel = btn.dataset.model;
      renderProduct(cat, currentModel);
    });
  });
}

/* --------------- RENDER PRODUCT (IMAGES + COLORS) --------------- */
function renderProduct(cat, model) {
  const body = welderData[cat].details[model][0];
  const images = body.images;

  productListContainer.innerHTML = images
    .map((img, i) => `<div class="thumb-box"><img src="${img.src}" class="small-img ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');

  mainDisplay.src = images[0].src;
  renderColors(images[0].colors);

  document.querySelectorAll('.small-img').forEach(img => {
    img.addEventListener('click', () => {
      document.querySelectorAll('.small-img').forEach(t => t.classList.remove('active'));
      img.classList.add('active');
      const index = img.dataset.index;
      mainDisplay.src = images[index].src;
      renderColors(images[index].colors);
    });
  });
}

/* --------------- RENDER COLORS --------------- */
function renderColors(colors = []) {
  if (colors.length === 0) { colorContainer.innerHTML = ''; return; }
  colorContainer.innerHTML = colors.map((c, i) => `<span class="color-dot ${c.name} ${i === 0 ? 'active' : ''}" data-img="${c.image}"></span>`).join('');
  mainDisplay.src = colors[0].image;

  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      mainDisplay.src = dot.dataset.img;
    });
  });
}

/* --------------- INITIAL AUTO LOAD --------------- */
renderCategories();
renderPhases(currentCategory);

