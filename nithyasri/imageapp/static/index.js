const gallery = [
    { src: "beach.png", caption: "PINK SUNSET BEACH" },
    { src: "temple.png", caption: "THIRUCHENDUR MURUGAN TEMPLE" },
    { src: "ooty.png", caption: "OOTY" },
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}
