// =========>> Slider Service Section <<============
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

// ==============>> Product Tab JSON Data <<=============
// OEM Manufacturing Excellence start
const params = new URLSearchParams(window.location.search);
const selectedProductId = params.get("id");

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
              "src": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold.webp" },
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold.webp" }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-left.webp" },
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-left.webp" }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-front.webp" },
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-front.webp" }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-back.webp", },
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-back.webp", }
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
              "src": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-left.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-left.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-front.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-front.webp" },
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-front.webp", }
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
              "src": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-left.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-left.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-front.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-front.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-back.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-back.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-back.webp", }
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
              "src": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-left.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-left.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-front.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-front.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-back.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-back.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-back.webp", }
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
              "src": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-left.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-front.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-back.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-back.webp", }
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
              "src": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-left.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-left.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-front.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-front.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-front.webp", }
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
              "src": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st.webp", },
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-left.webp", },
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-front.webp", },
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-back.webp", },
                { "name": "blue", "image": "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-back.webp", }
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
              "src": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-left.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-left.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-front.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-front.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-back.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-back.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-back.webp", }
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
              "src": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-left.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-left.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-front.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-front.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-back.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-back.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-back.webp", }
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
              "src": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-left.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-front.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-back.webp", },
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-back.webp", }
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
              "src": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-left.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-left.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-front.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-front.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-back.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-back.webp", },
                { "name": "yellow", "image": "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-back.webp", }
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
              "src": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-left.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-left.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-front.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-front.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-back.webp",
              "colors": [
                { "name": "green", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-back.webp", },
                { "name": "red", "image": "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-back.webp", }
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
              "src": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij.webp", },
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-left.webp", },
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-front.webp", },
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-back.webp", },
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-back.webp", }
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
              "src": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij.webp", },
                { "name": "green", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-left.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-left.webp", },
                { "name": "green", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-front.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-front.webp", },
                { "name": "green", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-back.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-back.webp", },
                { "name": "green", "image": "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-back.webp", }
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
              "src": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij.webp", },
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-left.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-left.webp", },
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-front.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-front.webp", },
                { "name": "yellow", "image": "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-front.webp", }
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
              "src": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-left.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-front.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-back.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-back.webp", }
              ]
            },
          ]
        }
      ],
      "TIG 300 IJ-S": [
        {
          "name": "Standard",
          "images": [
            {
              "src": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-left.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-left.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-front.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-front.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-back.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-back.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-back.webp", }
              ]
            },
          ]
        }
      ],
      "TIG 300 IJ-T": [
        {
          "name": "Three Phase Compact",
          "images": [
            {
              "src": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt.webp", },
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-left.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-left.webp", },
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-front.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-front.webp", },
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-back.webp",
              "colors": [
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-back.webp", },
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-back.webp", }
              ]
            },
          ]
        }
      ],

      "TIG 400-IJ": [
        {
          "name": "Industrial",
          "images": [
            {
              "src": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp" },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp" }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-left.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp" },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp" }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-front.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-front.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-back.webp",
              "colors": [
                { "name": "red", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp" },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp" }
              ]
            },
          ]
        }
      ],

      "TIG 630-IJ": [
        {
          "name": "Ultra Heavy Duty",
          "images": [
            {
              "src": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-left.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-left.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-front.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-front.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-back.webp", },
                { "name": "blue", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-back.webp", },
                { "name": "green", "image": "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-back.webp", }
              ]
            },
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
              "src": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk.webp", },
                { "name": "blue", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk.webp", }
              ]
            },
            {
              "src": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-left.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-left.webp", },
                { "name": "blue", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-left.webp", }
              ]
            },
            {
              "src": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-front.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-front.webp", },
                { "name": "blue", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-front.webp", }
              ]
            },
            {
              "src": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-back.webp",
              "colors": [
                { "name": "yellow", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-back.webp", },
                { "name": "blue", "image": "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-back.webp", }
              ]
            },
          ]
        }
      ],
    }
  }

};

/* --------------- DOM SELECTORS --------------- */
const tabContainer = document.querySelector(".tabs");
const phaseContainer = document.querySelector(".tabs-phase");
const modelContainer = document.querySelector(".tabs-two");
const productListContainer = document.querySelector(".product-list");
const mainImageBox = document.getElementById("mainImageBox");
const colorContainer = document.querySelector(".color-options");
const productBtnContainer = document.getElementById("productBtn");

let currentCategory = "arc";
let currentPhase = "";
let currentModel = "";

function generateProductId(name) {
  return name.toUpperCase().replace(/\s+/g, "_").replace(/-+/g, "_");
}

function renderMainImage(src) {
  mainImageBox.innerHTML = `<img src="${src}" alt="Product">`;
}

/* --------------- RENDER CATEGORY --------------- */
function renderCategories() {
  tabContainer.innerHTML = Object.keys(welderData).map(
    (key, i) => `<button class="tab ${i === 0 ? "active" : ""}" data-cat="${key}">
      ${welderData[key].title}
    </button>`
  ).join("");

  document.querySelectorAll(".tab").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      renderPhases(currentCategory);
    };
  });
}

/* --------------- RENDER PHASES --------------- */
function renderPhases(cat) {
  const phases = welderData[cat].phases;
  const keys = Object.keys(phases);

  phaseContainer.innerHTML = keys.map(
    (p, i) => `<button class="tab-phase ${i === 0 ? "active" : ""}" data-phase="${p}">
      ${phases[p].title}
    </button>`
  ).join("");

  currentPhase = keys[0];
  renderModels(cat, currentPhase);

  document.querySelectorAll(".tab-phase").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tab-phase").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      renderModels(cat, btn.dataset.phase);
    };
  });
}

/* --------------- RENDER MODELS --------------- */
function renderModels(cat, phase) {
  const models = welderData[cat].phases[phase].models;

  modelContainer.innerHTML = models.map(
    (m, i) => `<button class="tab-two ${i === 0 ? "active" : ""}" data-model="${m}">
      ${m}
    </button>`
  ).join("");

  currentModel = models[0];
  renderProduct(cat, currentModel);

  document.querySelectorAll(".tab-two").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tab-two").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      renderProduct(cat, btn.dataset.model);
    };
  });
}

/* --------------- RENDER PRODUCT (IMAGES + COLORS) --------------- */
function renderProduct(cat, model) {
  const images = welderData[cat].details[model][0].images;

  /* SIDE THUMBS */
  productListContainer.innerHTML = images.map(
    (img, i) => `<div class="thumb-box">
      <img src="${img.src}" class="small-img ${i === 0 ? "active" : ""}" data-index="${i}">
    </div>`
  ).join("");

  renderMainImage(images[0].src);

  renderColors(images[0].colors);
  renderGetNowButton(model);

  document.querySelectorAll(".small-img").forEach(img => {
    img.onclick = () => {
      document.querySelectorAll(".small-img").forEach(i => i.classList.remove("active"));
      img.classList.add("active");

      const index = img.dataset.index;
      renderMainImage(images[index].src);
      renderColors(images[index].colors);
    };
  });
}

/* --------------- RENDER COLORS --------------- */
function renderColors(colors = []) {
  colorContainer.innerHTML = colors.map(
    (c, i) => `<span class="color-dot ${c.name} ${i === 0 ? "active" : ""}" data-img="${c.image}"></span>`
  ).join("");

  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.onclick = () => {
      document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      renderMainImage(dot.dataset.img);
    };
  });
}

// RENDER GET NOW BUTTON
function renderGetNowButton(model) {
  productBtnContainer.innerHTML = `
    <a href="product-details.html?id=${generateProductId(model)}" class="get-now-btn">
      Get Now
    </a>
  `;
}

/* --------------- INITIAL AUTO LOAD --------------- */
renderCategories();
renderPhases(currentCategory);

