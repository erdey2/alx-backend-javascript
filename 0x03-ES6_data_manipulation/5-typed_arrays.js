export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    console.log('Position outside range');
  }
  const typedArray = new Uint8Array(length);
  typedArray[position] = value;

  const dataView = new DataView(typedArray.buffer);

  return dataView;
}
