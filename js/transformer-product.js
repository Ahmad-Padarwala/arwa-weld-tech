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
                            "src": "./images/product1.png",
                            "colors": [
                                { "name": "yellow", "image": "./images/product1.png" },
                                { "name": "blue", "image": "./images/product2.webp" }
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
                            "src": "./images/product2.png",
                            "colors": [
                                { "name": "red", "image": "./images/color-red.png" },
                                { "name": "green", "image": "./images/color-green.png" }
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
                            "src": "./images/product2.png",
                            "colors": [
                                { "name": "red", "image": "./images/color-red.png" },
                                { "name": "green", "image": "./images/color-green.png" }
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
                            "src": "./images/product1.png",
                            "colors": [
                                { "name": "yellow", "image": "./images/color-yellow.png" },
                                { "name": "blue", "image": "./images/color-blue.png" }
                            ]
                        },
                        {
                            "src": "./images/product2.webp",
                            "colors": [
                                { "name": "yellow", "image": "./images/color-yellow.png" },
                                { "name": "blue", "image": "./images/color-blue.png" }
                            ]
                        }
                    ]
                }
            ],
            "AST-200": [
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
            "AST-250": [
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
            "AST-300": [
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
            "AST-400": [
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

/* =================== TRANSFORMER UI SCRIPT =================== */

(() => {
    const tabContainer = document.querySelector('.tabs-transformar');
    const phaseContainer = document.querySelector('.tabs-phase-transformar');
    const modelContainer = document.querySelector('.tabs-two-transformar');
    const productListContainer = document.querySelector('.product-list-transformar');
    const mainDisplay = document.getElementById('main-image');
    const colorContainer = document.querySelector('.color-options');

    let currentCategory = "portable";
    let currentPhase = "";
    let currentModel = "";

    /* --------------- CATEGORY --------------- */
    function renderCategories() {
        tabContainer.innerHTML = Object.keys(TransformerData)
            .map((key, i) => `<button class="tab-transformar ${i === 0 ? 'active' : ''}" data-cat="${key}">${TransformerData[key].title}</button>`).join('');

        document.querySelectorAll('.tab-transformar').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-transformar').forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.cat;
                renderPhases(currentCategory);
            });
        });
    }

    /* --------------- PHASE --------------- */
    function renderPhases(cat) {
        const phases = TransformerData[cat].phases;
        phaseContainer.innerHTML = Object.keys(phases)
            .map((p, i) => `<button class="tab-phase-transformar ${i === 0 ? 'active' : ''}" data-phase="${p}">${phases[p].title}</button>`).join('');

        currentPhase = Object.keys(phases)[0];
        renderModels(cat, currentPhase);

        document.querySelectorAll('.tab-phase-transformar').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-phase-transformar').forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                currentPhase = btn.dataset.phase;
                renderModels(cat, currentPhase);
            });
        });
    }

    /* --------------- MODELS --------------- */
    function renderModels(cat, phase) {
        const models = TransformerData[cat].phases[phase].models;
        modelContainer.innerHTML = models.map((m, i) =>
            `<button class="tab-two-transformar ${i === 0 ? 'active' : ''}" data-model="${m}">${m}</button>`).join('');

        currentModel = models[0];
        renderProduct(cat, currentModel);

        document.querySelectorAll('.tab-two-transformar').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-two-transformar').forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                currentModel = btn.dataset.model;
                renderProduct(cat, currentModel);
            });
        });
    }

    /* --------------- PRODUCT + COLORS --------------- */
    function renderProduct(cat, model) {
        const body = TransformerData[cat].details[model][0];
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

    /* --------------- COLORS --------------- */
    function renderColors(colors = []) {
        if (!colors.length) { colorContainer.innerHTML = ''; return; }

        colorContainer.innerHTML = colors.map((c, i) =>
            `<span class="color-dot ${c.name} ${i === 0 ? 'active' : ''}" data-img="${c.image}"></span>`).join('');

        mainDisplay.src = colors[0].image;

        document.querySelectorAll('.color-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                mainDisplay.src = dot.dataset.img;
            });
        });
    }

    renderCategories();
    renderPhases(currentCategory);
})();