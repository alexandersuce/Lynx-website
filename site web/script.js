// Redirection vers le projet GitHub pour "Open source"
document.querySelector('a#downloadCode-Btn').addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut
    window.location.href = 'https://github.com/alexandersuce/Source-code-Lynx.git';
});

// Redirection vers le téléchargement du navigateur Lynx
document.querySelector('button#downloadBtn').addEventListener('click', function () {
    window.location.href = 'https://github.com/alexandersuce/Lynx-Browser.git';
});

// Ouverture de l'email prérempli
document.querySelector('a[href*="gmail.com"]').addEventListener('click', function (event) {
    event.preventDefault(); // Empêche l'ouverture d'une page par défaut
    window.location.href = 'mailto:luccabondi@gmail.com';
});

document.addEventListener("scroll", () => {
    const strip = document.querySelector(".decorative-strip::before");
    const scrollY = window.scrollY;
    strip.style.animationPlayState = scrollY > 0 ? "running" : "paused";
});

