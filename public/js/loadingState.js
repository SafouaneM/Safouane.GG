document.addEventListener('DOMContentLoaded', function() {
    const loadingBar = document.querySelector('#loadingBar');
    const form = document.querySelector('form');

    form.addEventListener('submit', function() {
        loadingBar.classList.remove('hidden');
    });
});