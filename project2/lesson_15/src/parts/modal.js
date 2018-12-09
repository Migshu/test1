function modal() {
    let container = document.querySelector('body'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay');
        
    container.addEventListener('click', (e) => {
        if(
            e.target && e.target.classList.contains('more') || e.target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }

        if(
            e.target && e.target.classList.contains('popup-close')) {
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
        }
    });
}

module.exports = modal;