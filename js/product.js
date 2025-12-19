// ===================== Product Section JSON Data ===================== //
const urlParams = new URLSearchParams(window.location.search);
const selectedSeries = urlParams.get("series");

const productsHierarchy = {
  "ARC SERIES": {
    "SINGLE PHASE": [
      {
        id: "ARC_200_IGOLD",
        name: "ARC 200-IGOLD",
        img: "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold.webp",
        desc: "200 ARC WELDING MACHINE FOR FABRICATION"
      },
      {
        id: "ARC_250_IGOLD",
        name: "ARC 250-IGOLD",
        img: "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp",
        desc: "HIGH-PERFORMANCE 250 ARC WELDING MACHINE"
      },
      {
        id: "ARC_250_IJ_S",
        name: "ARC 250 IJ-S",
        img: "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp",
        desc: "HEAVY DUTY 250 ARC WELDING MACHINE"
      },
      {
        id: "ARC_300_IJ_S",
        name: "ARC 300 IJ-S",
        img: "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp",
        desc: "COMPACT HEAVY DUTY 300A SINGLE PHASE WELDING MACHINE"
      }
    ],

    "1+2 PHASE": [
      {
        id: "ARC_200_ST",
        name: "ARC 200 ST",
        img: "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st.webp",
        desc: "SINGLE TWO-PHASE ARC 200 WELDING MACHINE"
      },
      {
        id: "ARC_250_ST",
        name: "ARC 250 ST",
        img: "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st.webp",
        desc: "COMPACT SINGLE TWO PHASE WELDING MACHINE"
      },
      {
        id: "ARC_300_ST",
        name: "ARC 300 ST",
        img: "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st.webp",
        desc: "SINGLE TWO PHASE COMPACT 300 ARC WELDING MACHINE"
      }
    ],

    "1+2+3 PHASE": [
      {
        id: "ARC_400_ST",
        name: "ARC 400 ST",
        img: "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st.webp",
        desc: "SINGLE TWO PHASE COMPACT 400 ARC WELDING MACHINE"
      }
    ],

    "THREE PHASE": [
      {
        id: "ARC_300_IJ_T",
        name: "ARC 300 IJ-T",
        img: "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt.webp",
        desc: "HEAVY DUTY THREE PHASE 300 ARC WELDING MACHINE"
      },
      {
        id: "ARC_400_ULTRA",
        name: "ARC 400-ULTRA",
        img: "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra.webp",
        desc: "POWERFULL ARC 400A WELDING MACHINE FOR INDUSTRIAL USE"
      },
      {
        id: "ARC_400_IJ",
        name: "ARC 400-IJ",
        img: "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij.webp",
        desc: "HEAVY DUTY 400 ARC INDUSTRIAL WELDING MACHINE"
      },
      {
        id: "ARC_630_IJ",
        name: "ARC 630-IJ",
        img: "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij.webp",
        desc: "HEAVY DUTY INDUSTRIAL ARC 630 WELDING MACHINE"
      }
    ]
  },

  "MIG SERIES": {
    "THREE PHASE": [
      {
        id: "MIG_300_IJ",
        name: "MIG 300-IJ",
        img: "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij.webp",
        desc: "PROFESSIONAL MIG 300A WELDING MACHINE"
      },
      {
        id: "MIG_400_IJ",
        name: "MIG 400-IJ",
        img: "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij.webp",
        desc: "HIGH QUALITY MIG 400A WELDING MACHINE"
      },
      {
        id: "MIG_630_IJ",
        name: "MIG 630-IJ",
        img: "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij.webp",
        desc: " HEAVY DUTY INDUSTRIAL MIG WELDING MACHINE"
      }
    ]
  },

  "TIG SERIES": {
    "SINGLE PHASE": [
      {
        id: "TIG_250_IJ_S",
        name: "TIG 250 IJ-S",
        img: "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs.webp",
        desc: "HIGH PRECISION, SINGLE PHASE 250A TIG WELDING MACHINE"
      },
      {
        id: "TIG_300_IJ_S",
        name: "TIG 300 IJ-S",
        img: "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs.webp",
        desc: "HIGH POWER, SINGLE PHASE 300A TIG WELDING MACHINE"
      }
    ],

    "THREE PHASE": [
      {
        id: "TIG_300_IJ_T",
        name: "TIG 300 IJ-T",
        img: "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt.webp",
        desc: "INDSUTRIAL THREE PHASE 300A TIG WELDING MACHINE"
      },
      {
        id: "TIG_400_IJ",
        name: "TIG 400-IJ",
        img: "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp",
        desc: "HEAVY DUTY THREE PHASE 400A TIG WELDING MACHINE"
      },
      {
        id: "TIG_630_IJ",
        name: "TIG 630-IJ",
        img: "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp",
        desc: "INDUSTRIAL 630A TIG WELDING MACHINE"
      }
    ]
  },

  "CUT SERIES": {
    "THREE PHASE": [
      {
        id: "CUT_100_LGK",
        name: "CUT-100 LGK",
        img: "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk.webp",
        desc: "POWERFUL THREE PHASE PLASMA CUTTING MACHINE"
      }
    ]
  },

  "PORTABLE ARC SERIES": {
    "SINGLE PHASE": [
      {
        id: "APT_200",
        name: "APT-200",
        img: "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200.webp",
        desc: "EXCELLENT ARC QUALITY"
      },
      {
        id: "APT_250",
        name: "APT-250",
        img: "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250.webp",
        desc: "HIGH ACCURACY WELDING"
      }
    ],

    "1+2 PHASE": [
      {
        id: "APT_250_H",
        name: "APT-250 H",
        img: "./images/top-range/portable-arc-series/1+2 phase/apt-250-h.webp",
        desc: "EXCELLENT ARC QUALITY"
      },
    ]
  },

  "STUD ARC SERIES": {
    "1+2 PHASE": [
      {
        id: "AST_150",
        name: "AST-150",
        img: "./images/top-range/stud-arc-series/1+2 phase/ast-150.webp",
        desc: "Excellent arc quality"
      },
      {
        id: "AST_200",
        name: "AST-200",
        img: "./images/top-range/stud-arc-series/1+2 phase/ast-200.webp",
        desc: "High accuracy welding"
      },
      {
        id: "AST_250",
        name: "AST-250",
        img: "./images/top-range/stud-arc-series/1+2 phase/ast-250.webp",
        desc: "High accuracy welding"
      },
      {
        id: "AST_300",
        name: "AST-300",
        img: "./images/top-range/stud-arc-series/1+2 phase/ast-300.webp",
        desc: "High accuracy welding"
      },
      {
        id: "AST_400",
        name: "AST-400",
        img: "./images/top-range/stud-arc-series/1+2 phase/ast-400.webp",
        desc: "High accuracy welding"
      }
    ],
  },

  "WELDING ACCESSORIES": {
    "CONNECTOR": [
      {
        id: "CON-101",
        name: "Welding Connector ",
        img: "./images/accessories/connector-200a.webp",
        desc: "High quality welding connector"
      }
    ],

    "HOLDER": [
      {
        id: "HOL-201",
        name: "Electrode Holder 300A",
        img: "./images/accessories/holder-300a.webp",
        desc: "Heavy duty electrode holder"
      }
    ],

    "TORCH LINER": [
      {
        id: "TL-301",
        name: "Torch Liner Steel",
        img: "./images/accessories/torch-liner.webp",
        desc: "Smooth wire feeding liner"
      }
    ],

    "CONTACT TIP": [
      {
        id: "CT-401",
        name: "Contact Tip 1.2mm",
        img: "./images/accessories/contact-tip.webp",
        desc: "High conductivity copper tip"
      }
    ],

    "MIG TORCH": [
      {
        id: "MT-501",
        name: "MIG Torch 15AK",
        img: "./images/accessories/mig-torch.webp",
        desc: "Durable MIG welding torch"
      }
    ],

    "WELDING HELMET": [
      {
        id: "WH-601",
        name: "Auto Darkening Helmet",
        img: "./images/accessories/welding-helmet.webp",
        desc: "Eye protection welding helmet"
      }
    ],

    "DIFFUSER": [
      {
        id: "DF-701",
        name: "Gas Diffuser",
        img: "./images/accessories/diffuser.webp",
        desc: "Uniform gas flow diffuser"
      }
    ],

    "ROLLERS": [
      {
        id: "RL-801",
        name: "Wire Feed Rollers",
        img: "./images/accessories/rollers.webp",
        desc: "Precision wire feeding rollers"
      }
    ],

    "TIP HOLDER": [
      {
        id: "TH-901",
        name: "Tip Holder",
        img: "./images/accessories/tip-holder.webp",
        desc: "Strong and heat resistant"
      }
    ],

    "EARTH CLAMP": [
      {
        id: "EC-1001",
        name: "Earth Clamp 500A",
        img: "./images/accessories/earth-clamp.webp",
        desc: "Strong grounding clamp"
      }
    ],

    "SWAN NECK": [
      {
        id: "SN-1101",
        name: "Swan Neck MIG Torch",
        img: "./images/accessories/swan-neck.webp",
        desc: "Flexible torch neck"
      }
    ],

    "GAS REGULATORS": [
      {
        id: "GR-1201",
        name: "Gas Regulator",
        img: "./images/accessories/gas-regulator.webp",
        desc: "Precise gas pressure control"
      }
    ],

    "GAS NOZZLE": [
      {
        id: "GN-1301",
        name: "Gas Nozzle",
        img: "./images/accessories/gas-nozzle.webp",
        desc: "Heat resistant gas nozzle"
      }
    ],

    "TIG TORCH HEAD": [
      {
        id: "TTH-1401",
        name: "TIG Torch Head",
        img: "./images/accessories/tig-torch-head.webp",
        desc: "Precision TIG torch head"
      }
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

        <a href="product-details.html?id=${item.id}" class="btn-view">
          View Details
        </a>
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


// ----------------- SHOW SERIES PRODUCTS WHEN MEGA MENU CLICK -----------------
function showSeriesProducts(seriesName) {
  if (!productsHierarchy[seriesName]) return;

  let products = [];
  Object.values(productsHierarchy[seriesName]).forEach(arr => {
    products.push(...arr);
  });

  showProducts(products);

  document.querySelectorAll(".has-dropdown").forEach(item => {
    const name = getText(item);
    item.classList.toggle("active", name === seriesName);
    item.classList.toggle("open", name === seriesName);
  });
}

(function loadDefault() {

  if (selectedSeries && productsHierarchy[selectedSeries]) {
    showSeriesProducts(selectedSeries);
  } else {
    showSeriesProducts("ARC SERIES");
  }

})();

