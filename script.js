let images = [
    "image1.jpg", "image2.jpg", "image3.jpg" // Replace these with actual image URLs
];

let currentIndex = 0;

function changeImage() {
    let imgElement = document.getElementById("galleryImage");
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

// Change the image every 5 seconds
setInterval(changeImage, 5000);
