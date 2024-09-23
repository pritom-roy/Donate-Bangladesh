const btnDonateNow1 = document.getElementById('btn-donate-now-1');
const btnDonateNow2 = document.getElementById('btn-donate-now-2');
const btnDonateNow3 = document.getElementById('btn-donate-now-3');
const popup = document.getElementById('popup');
const btnCloseNow = document.getElementById('btn-close-now');

function showPopup() {
    popup.classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function hidePopup() {
    popup.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

btnDonateNow1.addEventListener('click', showPopup);
btnDonateNow2.addEventListener('click', showPopup);
btnDonateNow3.addEventListener('click', showPopup);
btnCloseNow.addEventListener('click', hidePopup);