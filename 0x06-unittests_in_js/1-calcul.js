const calculateNumber = (type, a, b) => {
  if (type === 'SUM')
  {
    return Math.round(a) + Math.round(b);
  }
  else if (type === 'SUBTRACT')
  {
    return Math.round(a) - Math.round(b);
  }
  else if (type === 'DIVIDE')
  {
    if (Math.round(b) === 0)
    {
      throw new TypeError('Error');
    }
    else
    {
      return Math.round(a) / Math.round(b);
    }
  }
  return 0;
}
module.exports = calculateNumber;
