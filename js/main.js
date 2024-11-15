document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroSection.classList.add("animated");
                observer.unobserve(heroSection);
            }
        });
    });
    observer.observe(heroSection);
});
