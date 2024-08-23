document.getElementById("menu-icon").addEventListener("click", function() {
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.classList.contains("show")) {
        navbarLinks.classList.remove("show");
    } else {
        navbarLinks.classList.add("show");
    }
});

// Array of possible codes
const passwords = ['12qw34', '56er78', '90ty12', '34ui56', '78op90'];

// Function to generate a code based on UTC time
function generateCode() {
    const now = new Date();
    const utcSeconds = now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
    const index = utcSeconds % passwords.length;
    return passwords[index];
}

// Function to update the code in the HTML
function updateCode() {
    const codeElement = document.querySelector('.code');
    codeElement.textContent = generateCode();
}

// Initially, display the code
updateCode();

// Set an interval to update the code every 60 seconds (60000 milliseconds)
setInterval(updateCode, 60000);
