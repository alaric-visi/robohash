function getRandomNumber() {
  return Math.floor(Math.random() * 1000000);
}

function generateImages() {
  const imageContainer = document.getElementById("images");
  imageContainer.innerHTML = ""; // Clear previous images
  const totalImages = 10;

  for (let i = 0; i < totalImages; i++) {
    const placeholder = document.createElement("div");
    placeholder.classList.add("placeholder");

    // Add spinner
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    placeholder.appendChild(spinner);

    imageContainer.appendChild(placeholder);

    // Load the image
    const img = new Image();
    img.src = `https://robohash.org/set_set2/bgset_bg1/${getRandomNumber()}?size=300x300`;
    img.alt = `Robohash Image ${i + 1}`;

    img.onload = () => {
      placeholder.innerHTML = ""; // Remove spinner
      placeholder.appendChild(img);
    };

    img.onerror = () => {
      placeholder.innerHTML = "⚠️ Error loading";
      placeholder.style.color = "#ff6b6b";
      placeholder.style.fontWeight = "500";
      placeholder.style.display = "flex";
      placeholder.style.alignItems = "center";
      placeholder.style.justifyContent = "center";
    };
  }
}

// Initial load
generateImages();
