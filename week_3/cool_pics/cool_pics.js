// 1. Mobile Menu Functionality
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

// 2. Image Viewer Modal Functionality
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog.viewer");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

function openModal(e) {
    // Check if the user clicked an image inside the gallery
    const imgClicked = e.target.closest("img");
    if (!imgClicked) return;

    // Get the small image source and alt text
    const src = imgClicked.getAttribute("src");
    const alt = imgClicked.alt;

    // Convert small image path to full-size image path (e.g., "norris-sm.jpg" -> "norris-full.jpg")
    const largeImgSrc = src.replace("-sm", "-full");

    // Set the modal image source and alt, then open the dialog
    modalImage.src = largeImgSrc;
    modalImage.alt = alt;
    modal.showModal();
}

// Close modal via close button
closeButton.addEventListener("click", () => {
    modal.close();
});

// Close modal if clicking outside the image content (on the backdrop)
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});