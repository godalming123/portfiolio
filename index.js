//register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js", { scope: "https://godalming123.github.io/hyprland-website/" })
    .then (reg => {console.info ('Service Worker registration successfull:', reg);})
    .catch(err => {console.error('Service Worker registration failed:',      err);});
  };
