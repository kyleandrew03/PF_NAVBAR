// DOM Elements
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const mobileLinks = document.querySelectorAll(".nav-links-mobile li a");
const desktopLinks = document.querySelectorAll(".nav-links-desktop li a");
const notification = document.getElementById("pageNotification");

// Sidebar toggle
hamburger.addEventListener("click", () => sidebar.classList.add("open"));
closeBtn.addEventListener("click", () => sidebar.classList.remove("open"));

// Function to show inline notification
function showNotification(message) {
    notification.textContent = message;
    setTimeout(() => {
        notification.textContent = "Page Loaded!";
    }, 2000);
}

// Handle link clicks
function handleLinkClick(link, sidebarToClose = null) {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // prevent page reload

        // Active link highlight
        document.querySelectorAll("a.active").forEach(a => a.classList.remove("active"));
        link.classList.add("active");

        // Show inline notification
        showNotification("Loading page...");

        // Close sidebar if mobile
        if (sidebarToClose) sidebarToClose.classList.remove("open");
    });
}

// Attach to all links
mobileLinks.forEach(link => handleLinkClick(link, sidebar));
desktopLinks.forEach(link => handleLinkClick(link));