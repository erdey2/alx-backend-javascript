export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const result = true;
    if (result) {
      resolve(result);
    } else {
      reject(new Error('false'));
    }
  });
  return myPromise;
}
