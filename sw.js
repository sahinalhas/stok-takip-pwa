if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://sahinalhas.github.io/stok-takip-pwa/sw.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
