importScripts('vendor/localforage.min.js');

localforage.config({
  name: 'shipcsx',
  version: 1,
});

self.addEventListener('sync', (event) => {
  const tokens = event.tag.split('.');
  let promise = Promise.resolve();
  if (tokens.length === 2 && tokens[0] === 'SYNC') {
    const key = tokens[1];
    promise = localforage.getItem(key).then((items) => {
      return fetch('http://localhost:3000/freight-report/sync', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => localforage.setItem(key, []));
    });
  }
  event.waitUntil(promise);
});
