const popupOpenBtn = document.querySelector('#popup-open-btn');
const popup = document.querySelector('#popup');
const popupCloseBtn = document.querySelector('#popup-close-btn');

function popupOpen() {
  popup.classList.add('show');
}

function popupClose() {
  popup.classList.remove('show');
}
