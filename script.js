document.addEventListener("DOMContentLoaded", function () {
    const text = "I am Aryan Anurag Verma, a Tech Enthusiast!";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
