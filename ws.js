self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', (event) => {
  // インストール条件を満たすための空のフェッチイベント
});
