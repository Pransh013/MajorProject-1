window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 50) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
    const page1 = document.getElementById('page1');

    if (window.scrollY > page1.offsetTop + page1.clientHeight) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");

    }
});


const replacementWords = ["Solutions", "Services", "Ecosystem"];
function updateSecondWord() {
    const h1Element = document.getElementById("changingText");
    const words = h1Element.textContent.split(" ");
    if (words.length >= 2) {
        words[1] = replacementWords.shift();
        h1Element.textContent = words.join(" ");
        replacementWords.push(words[1]);
    }
}
setInterval(updateSecondWord, 2000);