document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-switch');
    // Check if a language is saved, default to 'en'
    let currentLang = localStorage.getItem('preferredLang') || 'en';

    const updateText = (lang) => {
        const elements = document.querySelectorAll('.lang');
        elements.forEach(el => {
            // Get the text from the data attribute (data-en or data-th)
            const newText = el.getAttribute(`data-${lang}`);
            if (newText) {
                el.innerText = newText;
            }
        });

        // Update button text or style
        langBtn.innerText = lang === 'en' ? 'TH' : 'EN';
    };

    // Run on page load
    updateText(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'th' : 'en';
        localStorage.setItem('preferredLang', currentLang);
        updateText(currentLang);
    });
});
