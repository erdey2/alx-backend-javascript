export default function updateUniqueItems(map) {
  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
  return map;
}
