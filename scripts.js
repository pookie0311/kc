document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const popup = document.getElementById('popup');
    const revealButton = document.getElementById('revealButton');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    const mainContent = document.getElementById('mainContent');
    const header = document.querySelector('header');
    const backgroundAudio = document.getElementById('backgroundAudio');

    // Show the pop-up initially
    popup.style.display = 'flex';

    // Show the full-screen overlay with video after clicking the button
    revealButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the pop-up

        // Hide the header and main content
        header.style.display = 'none';
        mainContent.style.display = 'none';

        // Show the full-screen overlay
        fullscreen.style.display = 'flex';
        
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

        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Show the current slide and add active class to the dot
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    // Create dots for the slideshow
    let dotsContainer = document.querySelector('.dots-container');
    for (let i = 0; i < document.getElementsByClassName('slide').length; i++) {
        let dot = document.createElement('span');
        dot.className = "dot";
        dot.onclick = function() {
            currentSlide(i + 1);
        };
        dotsContainer.appendChild(dot);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
});
