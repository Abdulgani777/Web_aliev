function toggle() {
    const more = document.getElementById('extra');
    const button = document.querySelector('.button');
    if (more.style.display === 'none' || more.style.display === '') {
        more.style.display = 'block';
        button.textContent = 'Less';
    } else {
        more.style.display = 'none';
        button.textContent = 'More';
    }
}
