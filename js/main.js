$(document).ready(function () {
    // Hamburger menu toggle
    const $navToggle = $(".nav-toggle");
    const $navItems = $(".nav-items");

    $navToggle.on("click", function () {
        $navItems.toggleClass("hidden");
    });

    $('.nav-toggle').click(function () {
        $('.nav-items').toggleClass('show');
    });

    // Intersection Observer for hero section animation
    const $heroSection = $(".hero-section");
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                $heroSection.addClass("animated");
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe($heroSection[0]);
});
