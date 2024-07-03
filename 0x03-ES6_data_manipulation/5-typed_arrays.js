export default function createInt8TypedArray(length, position, value) {
  const typedArray = new Uint8Array(length);
  typedArray[position] = value;

  const dataView = new DataView(typedArray.buffer);
  if (position > typedArray.length) {
    throw new Error('Position outside range');
  } else {
    return dataView;
  }
}
