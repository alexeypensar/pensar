let whatsappLink = document.getElementById('whatsappLink');

let mobileLink = 'https://api.whatsapp.com/send/79130221820';
let desktopLink = 'https://web.whatsapp.com/send/79130221820';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    whatsappLink.setAttribute.src = mobileLink;
  } else {
    whatsappLink.setAttribute.src = desktopLink;
}