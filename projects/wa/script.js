let whatsappLink = document.getElementById('whatsappLink');

let mobileLink = '';
let desktopLink = '';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    whatsappLink.setAttribute('href', 'https://api.whatsapp.com/send/79130221820');
    console.log('mobile!');
  } else {
    whatsappLink.setAttribute('href', 'https://web.whatsapp.com/send/79130221820');
    console.log('desktop!');
}