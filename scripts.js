document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const popup = document.getElementById('popup');
    const revealButton = document.getElementById('revealButton');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    const fullscreenGif = document.getElementById('fullscreenGif');
    const mainContent = document.getElementById('mainContent');
    const header = document.querySelector('header');
    const backgroundAudio = document.getElementById('backgroundAudio'); // New audio element

    // Show the pop-up initially
    popup.style.display = 'flex';

    // Show the full-screen overlay with video or GIF after clicking the button
    revealButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the pop-up

        // Hide the header and main content
        header.style.display = 'none';
        mainContent.style.display = 'none';

        // Show the full-screen overlay
        fullscreen.style.display = 'flex';
        fullscreenVideo.style.display = 'block'; // Show the video
        fullscreenGif.style.display = 'none'; // Hide the GIF, if used

        // Play the video
        fullscreenVideo.play();
    });

    // Event listener to handle when the video ends
    fullscreenVideo.addEventListener('ended', () => {
        // Hide the full-screen overlay
        fullscreen.style.display = 'none';

        // Show the header and main content
        header.style.display = 'block';
        mainContent.style.display = 'block';

        // Play the background audio
        if (backgroundAudio) {
            backgroundAudio.play();
        }
    });

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1; }    
        if (n < 1) { slideIndex = slides.length; }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        // Remove 'active' class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Show the current slide and mark the corresponding dot as active
        slides[slideIndex - 1].style.display = "block";  
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
    }

    // Function to handle dot clicks
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Function to handle navigation button clicks
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Set up dots based on the number of slides
    function setupDots() {
        let slideContainer = document.querySelector(".dots-container");
        let slides = document.getElementsByClassName("slide");

        // Remove existing dots
        slideContainer.innerHTML = '';

        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement("span");
            dot.className = "dot";
            dot.onclick = function() {
                currentSlide(i + 1);
            };
            slideContainer.appendChild(dot);
        }
    }

    setupDots();

    // Add event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
});
