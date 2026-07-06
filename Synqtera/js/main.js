// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Get Started button functionality
const getStartedBtn = document.querySelector('.btn-primary');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function() {
        console.log('Get Started clicked');
        // Add your functionality here
    });
}

// Page load animation
window.addEventListener('load', function() {
    console.log('Page loaded - SynQtera Technologies website is ready!');
    // Add animations or other initialization code here
});
