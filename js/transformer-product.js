/* =================== TRANSFORMER BASED PRODUCT JSON DATA =================== */
const TransformerData = {

    /* ------------ (1) PORTABLE ARC SERIES ------------ */
    "portable": {
        "title": "PORTABLE ARC SERIES",

        "phases": {
            "single": { "title": "SINGLE PHASE", "models": ["APT-200", "APT-250"] },
            "12phase": { "title": "1+2 PHASE", "models": ["APT-250 H"] }
        },

        "details": {
            "APT-200": [
                {
                    "name": "Compact",
                    "images": [
                        {
                            "src": "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200.webp", },
                                { "name": "blue", "image": "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200.webp", }
                            ]
                        },
                        {
                            "src": "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200-front.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200-front.webp", },
                                { "name": "blue", "image": "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200-front.webp", }
                            ]
                        }
                    ]
                }
            ],
            "APT-250": [
                {
                    "name": "Standard",
                    "images": [
                        {
                            "src": "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250.webp",
                            "colors": [
                                { "name": "red", "image": "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250.webp", },
                                { "name": "green", "image": "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250.webp", }
                            ]
                        },
                        {
                            "src": "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250-front.webp",
                            "colors": [
                                { "name": "red", "image": "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250-front.webp", },
                                { "name": "green", "image": "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250-front.webp", }
                            ]
                        }
                    ]
                }
            ],
            "APT-250 H": [
                {
                    "name": "Standard",
                    "images": [
                        {
                            "src": "./images/top-range/portable-arc-series/1+2 phase/apt-250-h.webp",
                            "colors": [
                                { "name": "red", "image": "./images/top-range/portable-arc-series/1+2 phase/apt-250-h.webp" },
                                { "name": "green", "image": "./images/top-range/portable-arc-series/1+2 phase/apt-250-h.webp" }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ------------ (2) STUD ARC SERIES ------------ */
    "stud": {
        "title": "STUD ARC SERIES",

        "phases": {
            "single": { "title": "1+2 PHASE", "models": ["AST-150", "AST-200", "AST-250", "AST-300", "AST-400"] }
        },

        "details": {
            "AST-150": [
                {
                    "name": "Compact",
                    "images": [
                        {
                            "src": "./images/top-range/stud-arc-series/1+2 phase/ast-150.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-150.webp" },
                                { "name": "blue", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-150.webp" }
                            ]
                        },
                    ]
                }
            ],
            "AST-200": [
                {
                    "name": "Compact",
                    "images": [
                        {
                            "src": "./images/top-range/stud-arc-series/1+2 phase/ast-200.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-200.webp" },
                                { "name": "blue", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-200.webp" }
                            ]
                        }
                    ]
                }
            ],
            "AST-250": [
                {
                    "name": "Compact",
                    "images": [
                        {
                            "src": "./images/top-range/stud-arc-series/1+2 phase/ast-250.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-250.webp" },
                                { "name": "blue", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-250.webp" }
                            ]
                        }
                    ]
                }
            ],
            "AST-300": [
                {
                    "name": "Compact",
                    "images": [
                        {
                            "src": "./images/top-range/stud-arc-series/1+2 phase/ast-300.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-300.webp" },
                                { "name": "blue", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-300.webp" }
                            ]
                        }
                    ]
                }
            ],
            "AST-400": [
                {
                    "name": "Compact",
                    "images": [
                        {
                            "src": "./images/top-range/stud-arc-series/1+2 phase/ast-400.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-400.webp" },
                                { "name": "blue", "image": "./images/top-range/stud-arc-series/1+2 phase/ast-400.webp" }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ------------ (3) WELDING ACCESSORIES ------------ */
    "welding": {
        "title": "WELDING ACCESSORIES",

        "phases": {
            "single": { "title": "SINGLE PHASE", "models": ["TIG 250 IJ-S"] },
        },

        "details": {
        }
    }
};
/* ================= DOM SELECTORS ================= */
const transformerTabContainer = document.querySelector(".tabs-transformer");
const transformerPhaseContainer = document.querySelector(".tabs-phase-transformer");
const transformerModelContainer = document.querySelector(".tabs-two-transformer");
const transformerProductList = document.querySelector(".product-list-transformer");
const transformerMainImageBox = document.getElementById("mainImageBox-transformer");
const transformerColorContainer = document.querySelector(".product .color-options");
const transformerBtnContainer = document.getElementById("productBtn-transformer");

let transformerCurrentCategory = "portable";
let transformerCurrentPhase = "";
let transformerCurrentModel = "";

/* ================= UTILS ================= */
function transformerGenerateProductId(name) {
    return name.toUpperCase().replace(/\s+/g, "_").replace(/-+/g, "_");
}

function transformerRenderMainImage(src) {
    transformerMainImageBox.innerHTML = `<img src="${src}" alt="Transformer Product">`;
}

/* ================= CATEGORY ================= */
function transformerRenderCategories() {
    transformerTabContainer.innerHTML = Object.keys(TransformerData).map(key => `
        <button 
          class="tab ${key === transformerCurrentCategory ? "active" : ""}" 
          data-cat="${key}">
          ${TransformerData[key].title}
        </button>
    `).join("");

    transformerTabContainer.querySelectorAll(".tab").forEach(btn => {
        btn.onclick = () => {
            transformerTabContainer.querySelectorAll(".tab")
                .forEach(t => t.classList.remove("active"));

            btn.classList.add("active");
            transformerCurrentCategory = btn.dataset.cat;
            transformerRenderPhases(transformerCurrentCategory);
        };
    });
}

/* ================= PHASE ================= */
function transformerRenderPhases(cat) {
    const phases = TransformerData[cat].phases;
    const keys = Object.keys(phases);

    transformerCurrentPhase = keys[0];

    transformerPhaseContainer.innerHTML = keys.map((p, i) => `
        <button 
          class="tab-phase ${i === 0 ? "active" : ""}" 
          data-phase="${p}">
          ${phases[p].title}
        </button>
    `).join("");

    transformerRenderModels(cat, transformerCurrentPhase);

    transformerPhaseContainer.querySelectorAll(".tab-phase").forEach(btn => {
        btn.onclick = () => {
            transformerPhaseContainer.querySelectorAll(".tab-phase")
                .forEach(t => t.classList.remove("active"));

            btn.classList.add("active");
            transformerCurrentPhase = btn.dataset.phase;
            transformerRenderModels(cat, transformerCurrentPhase);
        };
    });
}

/* ================= MODELS ================= */
function transformerRenderModels(cat, phase) {
    const models = TransformerData[cat].phases[phase].models;

    transformerCurrentModel = models[0];

    transformerModelContainer.innerHTML = models.map((m, i) => `
        <button 
          class="tab-two ${i === 0 ? "active" : ""}" 
          data-model="${m}">
          ${m}
        </button>
    `).join("");

    transformerRenderProduct(cat, transformerCurrentModel);

    transformerModelContainer.querySelectorAll(".tab-two").forEach(btn => {
        btn.onclick = () => {
            transformerModelContainer.querySelectorAll(".tab-two")
                .forEach(t => t.classList.remove("active"));

            btn.classList.add("active");
            transformerCurrentModel = btn.dataset.model;
            transformerRenderProduct(cat, transformerCurrentModel);
        };
    });
}

/* ================= PRODUCT ================= */
function transformerRenderProduct(cat, model) {
    const product = TransformerData[cat].details[model];
    if (!product) return;

    const images = product[0].images;

    transformerProductList.innerHTML = images.map((img, i) => `
        <div class="thumb-box">
            <img 
              src="${img.src}" 
              class="small-img ${i === 0 ? "active" : ""}" 
              data-index="${i}">
        </div>
    `).join("");

    transformerRenderMainImage(images[0].src);
    transformerRenderColors(images[0].colors);
    transformerRenderGetNow(model);

    transformerProductList.querySelectorAll(".small-img").forEach(img => {
        img.onclick = () => {
            transformerProductList.querySelectorAll(".small-img")
                .forEach(i => i.classList.remove("active"));

            img.classList.add("active");

            const index = Number(img.dataset.index);
            transformerRenderMainImage(images[index].src);
            transformerRenderColors(images[index].colors);
        };
    });
}

/* ================= COLORS ================= */
function transformerRenderColors(colors = []) {
    transformerColorContainer.innerHTML = colors.map((c, i) => `
        <span 
          class="color-dot ${c.name} ${i === 0 ? "active" : ""}" 
          data-img="${c.image}">
        </span>
    `).join("");

    transformerColorContainer.querySelectorAll(".color-dot").forEach(dot => {
        dot.onclick = () => {
            transformerColorContainer.querySelectorAll(".color-dot")
                .forEach(d => d.classList.remove("active"));

            dot.classList.add("active");
            transformerRenderMainImage(dot.dataset.img);
        };
    });
}


/* ================= GET NOW ================= */
function transformerRenderGetNow(model) {
    transformerBtnContainer.innerHTML = `
        <a href="product-details.html?id=${transformerGenerateProductId(model)}"
           class="get-now-btn">
          Get Now
        </a>
    `;
}


/* ================= INIT ================= */
transformerRenderCategories();
transformerRenderPhases(transformerCurrentCategory);
