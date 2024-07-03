export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('Cannot process');
  } else {
    map.forEach((quantity, item) => {
      if (quantity === 1) {
        map.set(item, 100);
      }
    });
  }
  return map;
}
