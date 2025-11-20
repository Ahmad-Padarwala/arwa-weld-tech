// product details json

const productData = {
    product: {
        title: "ARWA 400 IJ MIG Welder",
        sku: "1234567",
        rating: 4.8,
        shortDescription: "MIG and flux cored 120 V welder that welds from 24 gauge – 3/16 in. mild steel.",

        images: {
            main: "./images/product-main.png",
            thumbs: [
                "./images/product-in.png",
                "./images/product-main.png",
                "./images/product-in.png",
                "./images/product-main.png"
            ],

            zoom: {
                enablePopup: true,
                popupWidth: 900,
                popupHeight: 700
            },

            newWindow: {
                enable: true
            }
        },

        compareOptions: [
            {
                title: "Machine Only",
                image: "./images/product-in.png",
                code: "254285"
            },
            {
                title: "Running Gear / Cylinder Rack",
                image: "./images/product-in.png",
                code: "254286"
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {

    const product = productData.product;

    const mainImage = document.getElementById("mainImage");
    const openImageLink = document.getElementById("openImage");
    const thumbsContainer = document.querySelector(".thumbs");

    const zoomHint = document.querySelector(".zoom-hint");
    const openNewWindowLink = document.querySelector(".main-image-box a:last-of-type");

    // Set main image
    mainImage.src = product.images.main;
    openImageLink.href = product.images.main;
    openNewWindowLink.href = product.images.main;

    // Generate thumbnails
    thumbsContainer.innerHTML = "";
    product.images.thumbs.forEach((thumb, index) => {
        const box = document.createElement("div");
        box.classList.add("thumb-box");
        if (index === 0) box.classList.add("active");

        box.innerHTML = `<img src="${thumb}">`;
        thumbsContainer.appendChild(box);

        box.addEventListener("click", function () {
            document.querySelectorAll(".thumb-box").forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            mainImage.src = thumb;
            openImageLink.href = thumb;
            openNewWindowLink.href = thumb;
        });
    });

    /*** ZOOM POPUP FUNCTIONALITY (from JSON) ***/
    if (product.images.zoom.enablePopup) {
        zoomHint.style.cursor = "pointer";
        mainImage.style.cursor = "zoom-in";

        function openZoomPopup() {
            const w = product.images.zoom.popupWidth;
            const h = product.images.zoom.popupHeight;
            window.open(
                mainImage.src,
                "ImageZoom",
                `width=${w},height=${h},top=100,left=100`
            );
        }

        zoomHint.addEventListener("click", openZoomPopup);
        mainImage.addEventListener("click", openZoomPopup);
    }

    if (!product.images.newWindow.enable) {
        openNewWindowLink.style.display = "none"; 
    }

});

// ----------------- Tab Click Events -------------------
document.querySelectorAll('.custom-tabs .tab').forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        document.querySelectorAll('.custom-tabs .tab')
            .forEach(t => t.classList.remove('active'));

        tab.classList.add('active');

        // Hide all tab-content
        document.querySelectorAll('.tab-content')
            .forEach(c => c.classList.remove('active'));

        // Show the matching content box
        const ids = ["features", "specification", "accessories", "consumables", "resources", "qa"];
        document.getElementById(ids[index]).classList.add("active");
    });
});

// ---------------------- Download Brochure Model----------------------
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const closeModal = document.getElementById("closeModal");

// Open modal on button click
document.querySelector(".brochure-btn").addEventListener("click", () => {
    modalOverlay.style.display = "block";
    modalBox.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalBox.style.display = "none";
});


modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalBox.style.display = "none";
});

document.getElementById("brochureForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = "./brochure.pdf"; 
    link.download = "Brochure.pdf";
    link.click();

    modalOverlay.style.display = "none";
    modalBox.style.display = "none";
});
