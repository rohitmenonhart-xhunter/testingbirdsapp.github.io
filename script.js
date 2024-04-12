// script.js
document.addEventListener("DOMContentLoaded", function() {
    const birdsData = [
        { name: "The Indian Roller", description: "The Indian Roller, a dazzling flash of blue, showcases acrobatic feats during breeding season. This brightly colored bird frequents open areas, perching on wires and trees.", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Common Kingfisher", description: "A tiny jewel by the water, the Common Kingfisher stuns with electric blue plumage and a long, sharp bill. This feisty fish-catcher dives for prey with lightning speed.", image: "images/bird2.jpg", sound: "sounds/bird2.mp3", position: { x: 50, y: 70 }, icon: "icons/bird2-icon.png", size: 50 },
        { name: "Eurasian skylark", description: "Soaring singer of open fields, the Eurasian Skylark fills the air with melodious trills. Though brown-streaked for camouflage, its vibrant song betrays its presence.", image: "images/bird3.jpg", sound: "sounds/bird3.mp3", position: { x: 8, y: 65 }, icon: "icons/bird3-icon.png", size: 50 },
        { name: "Green Bee Eater", description: "Emerald acrobat of the skies, the Green Bee-eater flashes vibrant green with a dash of blue. A skilled hunter, it snatches insects mid-air, a flash of color against the open sky.", image: "images/bird4.jpg", sound: "sounds/bird4.mp3", position: { x: 60, y: 85 }, icon: "icons/bird4-icon.png", size: 60 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        { name: "Bird 1", description: "Description of Bird 1", image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 50 },
        // Add more bird data as needed
    ];

    const birdsContainer = document.getElementById("birds-container");
    const landscapeImg = document.getElementById("landscape-img");
    const birdInfoContainer = document.getElementById("bird-info-container");

    function updateBirdsPosition() {
        const landscapeWidth = landscapeImg.offsetWidth;
        const landscapeHeight = landscapeImg.offsetHeight;
        birdsContainer.innerHTML = ""; // Clear previous bird markers
        birdsData.forEach(bird => {
            const birdIcon = document.createElement("img");
            birdIcon.src = bird.icon;
            birdIcon.classList.add("bird-icon");
            birdIcon.style.left = `${landscapeWidth * (bird.position.x / 100) - (bird.size / 2)}px`;
            birdIcon.style.top = `${landscapeHeight * (bird.position.y / 100) - (bird.size / 2)}px`;
            birdIcon.style.width = `${bird.size}px`; // Set the size of the bird icon
            birdIcon.addEventListener("click", () => {
                showBirdInfo(bird);
                playBirdSound(bird);
            });
            birdsContainer.appendChild(birdIcon);
        });
    }

    function showBirdInfo(bird) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
    
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
    
        const birdImg = document.createElement("img");
        birdImg.src = bird.image;
        birdImg.alt = bird.name;
        birdImg.classList.add("bird-image"); // Add class for styling
    
        const birdName = document.createElement("h2");
        birdName.textContent = bird.name;
    
        const birdDescription = document.createElement("p");
        birdDescription.textContent = bird.description;
    
        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close-btn");
        closeBtn.textContent = "×";
        closeBtn.addEventListener("click", () => {
            modal.remove();
        });
    
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(birdImg);
        modalContent.appendChild(birdName);
        modalContent.appendChild(birdDescription);
        modal.appendChild(modalContent);
    
        document.body.appendChild(modal);
    }
    
    function playBirdSound(bird) {
        const birdSound = new Audio(bird.sound);
        birdSound.play();
    }

    // Update bird positions when the window is resized
    window.addEventListener("resize", updateBirdsPosition);

    // Trigger resize event on page load to initially set bird positions
    window.dispatchEvent(new Event("resize"));
});
/// Function to check if the device is in landscape mode
function isLandscape() {
    return window.innerWidth > window.innerHeight;
}

// Function to handle orientation change
function handleOrientationChange() {
    if (!isLandscape()) {
        // If device is not in landscape mode, redirect to a landscape-only page
        window.location.href = "landscape-only.html";
    }
}

// Listen for orientation change
window.addEventListener("orientationchange", handleOrientationChange);

// Check orientation on page load
window.addEventListener("DOMContentLoaded", handleOrientationChange);
