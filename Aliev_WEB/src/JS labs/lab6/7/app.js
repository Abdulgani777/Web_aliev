function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const button = profile.querySelector('button');
        const hiddenFields = profile.querySelector('div');
        const lockRadio = profile.querySelector('input[type="radio"][value="lock"]');
        
        button.addEventListener('click', () => {
            if (lockRadio.checked) {
                return; }

            
            if (hiddenFields.style.display === 'block') {
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            } else {
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';
            }
        });
    });
}
