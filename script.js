// Tab functionality
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Popup functionality
const popups = document.querySelectorAll('.popup');
const closePopupBtns = document.querySelectorAll('.close-btn');
const openPopupBtns = document.querySelectorAll('.openpopup');

// Function to show a specific popup
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Function to hide a specific popup
function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Open the popup when "View Macros" button is clicked
openPopupBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const popupId = e.target.getAttribute('data-popup');
        showPopup(popupId);
    });
});

// Close the popup
closePopupBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const popupId = e.target.getAttribute('data-popup');
        hidePopup(popupId);
    });
});

// Close the popup when clicking outside of it
window.addEventListener('click', (event) => {
    popups.forEach(popup => {
        if (event.target === popup) {
            hidePopup(popup.id);
        }
    });
});
