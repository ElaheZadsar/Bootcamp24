const openPopupBtn = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const applyBtn = document.getElementById('applyBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const appliedText = document.getElementById('appliedText');

    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    applyBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        appliedText.style.display = 'inline';
    });

    cancelBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });