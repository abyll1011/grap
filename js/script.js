const logo = document.getElementById('logo')
const btn = document.getElementById('hero-btn');
const seeBtn = document.getElementById('work-btn')

logo.addEventListener('click', () => {
    window.location.href = 'index.html'
})

btn.addEventListener("click", function scrollToSection() {
    const element = document.getElementById('intro-section');
    element.scrollIntoView({behavior: 'smooth'})
});

seeBtn.addEventListener("click", () => {
    window.location.href = './projects/portofolio.html'
});