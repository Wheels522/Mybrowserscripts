// Create a new <img> element
var img = document.createElement('img');

// Set the source of the image
img.src = 'your_image_url.jpg';

// Set the position of the image to fixed so it stays in the viewport
img.style.position = 'fixed';

// Set the bottom and right properties to position the image in the bottom right corner
img.style.bottom = '0';
img.style.right = '0';

// Set the width and height of the image
img.style.width = '100px'; // Adjust the width as needed
img.style.height = 'auto'; // Adjust the height as needed

// Append the image to the document body
document.body.appendChild(img);
