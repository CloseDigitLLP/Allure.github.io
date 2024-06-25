// ACTIVE LINK PART 

document.addEventListener("DOMContentLoaded", function () {

    var path = window.location.pathname;
    var page = path.split("/").pop();


    var pageToNavId = {
        "index.html": "welcome-nav",
        "about.html": "about-nav",
        "portfolio.html": "work-nav",
        "contactUs.html": "contact-nav"
    };

    var activeNavId = pageToNavId[page];


    document.querySelectorAll('.nav-link').forEach(function (navLink) {
        navLink.classList.remove('active');
    });


    if (activeNavId) {
        document.getElementById(activeNavId).classList.add('active');
    } else if (path.includes('/portfolioDetails/')) {

        document.getElementById('work-nav').classList.add('active');
    } else {

        document.getElementById('welcome-nav').classList.add('active');
    }
});

// fixed btn

document.getElementById('scrollTopButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
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


    video.addEventListener('ended', () => {
        videoContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});


// navbar

document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var body = document.body;

    navbarToggler.addEventListener('click', function() {
        body.classList.toggle('navbar-open');
    });
});
