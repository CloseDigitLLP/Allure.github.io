// ACTIVE LINK PART 

document.addEventListener("DOMContentLoaded", function () {
    // Get the current path
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Map page names to nav link IDs
    var pageToNavId = {
        "index.html": "welcome-nav",
        "about.html": "about-nav",
        "portfolio.html": "work-nav",
        "contactUs.html": "contact-nav"
    };

    // Get the ID of the active nav link
    var activeNavId = pageToNavId[page];

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(function (navLink) {
        navLink.classList.remove('active');
    });

    // Add active class to the current page's nav link
    if (activeNavId) {
        document.getElementById(activeNavId).classList.add('active');
    }

    // Check if the page is a portfolio detail page
    if (path.includes('/portfolioDetails/')) {
        document.getElementById('work-nav').classList.add('active');
    }
});


// fixed btn

// JavaScript code to scroll to the top
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