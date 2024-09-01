document.addEventListener('DOMContentLoaded', () => {
    const mangaItems = document.querySelectorAll('.manga-item');

    mangaItems.forEach(item => {
        item.addEventListener('click', () => {
            const link = item.querySelector('a');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });
});
