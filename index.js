const text = "Join our E-AI major family";
const speed = 100; // Speed in milliseconds (lower is faster)
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the animation when the page finishes loading
window.onload = typeWriter;