document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-trigger');
    
    // Smooth fade-in for feature cards
    const cards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });
    
    // Button click effect (visual only as it's a direct download)
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            console.log('Descarga iniciada...');
            // Pulsing effect on click
            downloadBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                downloadBtn.style.transform = '';
            }, 150);
        });
    }
});
