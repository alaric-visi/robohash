// ===== helper =====
function getRandomNumber() {
    return Math.floor(Math.random() * 1_000_000);
  }
  
  // ===== main renderer =====
  function generateImages() {
    const imageContainer = document.getElementById('images');
    imageContainer.innerHTML = '';           // clear previous images
    const totalImages = 8;
  
    for (let i = 0; i < totalImages; i++) {
      const placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
  
      // spinner while loading
      const spinner = document.createElement('div');
      spinner.classList.add('spinner');
      placeholder.appendChild(spinner);
      imageContainer.appendChild(placeholder);
  
      // fetch robohash
      const img = new Image();
      img.src = `https://robohash.org/set_set2/bgset_bg1/${getRandomNumber()}?size=300x300`;
      img.alt = `Robohash Image ${i + 1}`;
  
      img.onload = () => {
        placeholder.replaceChildren(img);    // swap in the real image
      };
  
      img.onerror = () => {
        placeholder.textContent = '⚠️ Error loading';
      };
    }
  }
  
  // ===== bootstrap =====
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('refresh-btn');
    btn.addEventListener('click', generateImages);
  
    // initial load
    generateImages();
  });
  