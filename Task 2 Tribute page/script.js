document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        '"Our industry does not respect tradition. It only respects innovation."',
        '"Be passionate and bold. Always keep learning. You stop doing useful things if you don\'t learn."',
        '"Longevity in this business is about being able to reinvent yourself or invent the future."',
        '"I discovered Buddha did not set out to found a world religion. He simply shared his personal discovery."',
        '"I fundamentally believe that if you are not learning new things, you stop doing great and useful things."'
    ];

    const quoteContainer = document.getElementById('current-quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    newQuoteBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteContainer.textContent = quotes[randomIndex];
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth'
            });
        });
    }
});
