const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("show");
});

// Highlight active link
const links = document.querySelectorAll(".mobile-menu a, .nav-menu a");
const currentPage = window.location.pathname.split("/").pop();
links.forEach(link => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
});


// Dropdown
document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('.dropdown-sidebar .sidebar-card');
    const contents = document.querySelectorAll('.one-content');

    contents.forEach(dropdown => {
        const items = dropdown.querySelectorAll(".swiper-slide").length;
        const nextBtn = dropdown.querySelector(".swiper-button-next");
        const prevBtn = dropdown.querySelector(".swiper-button-prev");

        if (items > 3) {

            const slidesPerRow = 3;

            const swiper = new Swiper(dropdown, {
                slidesPerView: slidesPerRow,
                spaceBetween: 20,
                loop: false,
                watchOverflow: true,
                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                on: {
                    slideChange: function () {
                        limitButtons(this);
                    },
                    init: function () {
                        limitButtons(this);
                    }
                }
            });

            dropdown.swiper = swiper;

            //  Function to disable at real last index
            function limitButtons(sw) {
                const maxIndex = items - slidesPerRow; //  custom limit

                // Disable/Enable prev
                if (sw.activeIndex <= 0) {
                    prevBtn.classList.add("swiper-button-disabled");
                } else {
                    prevBtn.classList.remove("swiper-button-disabled");
                }

                // Disable/Enable next
                if (sw.activeIndex >= maxIndex) {
                    nextBtn.classList.add("swiper-button-disabled");
                } else {
                    nextBtn.classList.remove("swiper-button-disabled");
                }
            }

        } else {
            dropdown.classList.add("no-swiper");
            if (nextBtn) nextBtn.style.display = "none";
            if (prevBtn) prevBtn.style.display = "none";
        }
    });


    // ====== Sidebar Hover Switch ======
    tabs.forEach(tab => {
        tab.addEventListener('mouseenter', () => {

            // Highlight active tab
            tabs.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');

            // Switch content with smooth animation
            contents.forEach(content => content.classList.remove('active'));
            const target = tab.getAttribute('data-target');
            const activeContent = document.getElementById(target);

            // Wait small delay to sync with animation (optional, makes smoother)
            setTimeout(() => activeContent.classList.add('active'), 50);

            // RESET swiper if exists
            if (activeContent && activeContent.swiper) {

                // Slide to first item without animation
                activeContent.swiper.slideTo(0, 0);

                const nextBtn = activeContent.querySelector(".swiper-button-next");
                const prevBtn = activeContent.querySelector(".swiper-button-prev");

                // Reset navigation buttons safely
                if (prevBtn) prevBtn.classList.add("swiper-button-disabled");
                if (nextBtn) nextBtn.classList.remove("swiper-button-disabled");
            }

        });
    });
});

