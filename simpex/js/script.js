let whatsappLink = document.getElementById('whatsappLink');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    whatsappLink.setAttribute('href', 'https://api.whatsapp.com/send/79039003044');
  } else {
    whatsappLink.setAttribute('href', 'https://web.whatsapp.com/send/79039003044');
}