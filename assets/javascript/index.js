

// fixed btn

 // JavaScript code to scroll to the top
 document.getElementById('scrollTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});


// video
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('intro-video');
    const videoContainer = document.querySelector('.video-container');
    document.body.style.overflow = 'hidden';

    video.addEventListener('ended', () => {
        videoContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});