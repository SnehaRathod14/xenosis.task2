// Aray of image sources
const images =[
"image1.jpg",
"image2.jpg",
"image3.jpg",
"image4.jpg",
"image5.jpg"
];
// fuction togenerate random image
const generateBtn = document.getElementById('generate-btn');
const imageContainer = document.getElementById('image-container');

// Array of sample image URLs
const imageUrls = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300/0000FF/808080',
  'https://via.placeholder.com/300/FF0000/FFFFFF',
  // Add more image URLs here
];

generateBtn.addEventListener('click', function() {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
  // Create a new image element
  const img = document.createElement('img');
  img.src = imageUrls[randomIndex];
  img.alt = 'Random Image';
  
  // Clear previous image if any
  imageContainer.innerHTML = '';
  
  // Append the new image
  imageContainer.appendChild(img);
});
