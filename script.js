// Validate Contact Form
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || subject == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    document.querySelectorAll('.nav-links a').forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
