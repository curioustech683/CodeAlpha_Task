// Selecting main filter container and all images in the gallery
const filterContainer = document.querySelector(".items");
const galleryImages = document.querySelectorAll(".gallery .image");

window.onload = () => {
  // When any filter button is clicked
  filterContainer.onclick = (event) => {
    const clickedItem = event.target;

    // Check if a filter button (with class 'item') was clicked
    if (clickedItem.classList.contains("item")) {
      // Remove 'active' class from previously selected button
      filterContainer.querySelector(".active").classList.remove("active");

      // Add 'active' class to the clicked button
      clickedItem.classList.add("active");

      // Get the category name from the clicked button's data-name
      const selectedCategory = clickedItem.getAttribute("data-name");

      // Loop through all images and show/hide based on the selected category
      galleryImages.forEach((image) => {
        const imageCategory = image.getAttribute("data-name");

        // If 'all' is selected or the image matches the selected category
        if (selectedCategory === "all" || selectedCategory === imageCategory) {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };

  // Attach click handler to each image for preview functionality
  galleryImages.forEach((image) => {
    image.setAttribute("onclick", "preview(this)");
  });
};


// Fullscreen Image Preview


// Selecting all elements related to the preview box
const previewBox = document.querySelector(".preview-box");
const categoryLabel = previewBox.querySelector(".title p");
const previewImage = previewBox.querySelector("img");
const closeButton = previewBox.querySelector(".icon");
const shadowOverlay = document.querySelector(".shadow");

// Function to open image in fullscreen preview
function preview(selectedElement) {
  // Disable scrolling while preview is open
  document.body.style.overflow = "hidden";

  // Get clicked image source and category
  const imgSrc = selectedElement.querySelector("img").src;
  const imgCategory = selectedElement.getAttribute("data-name");

  // Set the preview content
  previewImage.src = imgSrc;
  categoryLabel.textContent = imgCategory;

  // Show the preview box and shadow overlay
  previewBox.classList.add("show");
  shadowOverlay.classList.add("show");

  // Close preview on close icon click
  closeButton.onclick = () => {
    previewBox.classList.remove("show");
    shadowOverlay.classList.remove("show");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };
}
