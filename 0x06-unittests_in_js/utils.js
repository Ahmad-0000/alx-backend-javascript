const utils = {
  calculatenumber: function (type, a, b) {
    const c = math.round(a);
    const d = math.round(b);
  
    if (type === 'SUM') {
      return c + d;
    } else if (type === 'SUBTRACT') {
      return c - d;
    } else if (type === 'DIVIDE') {
      if (d === 0)
        return 'Error';
      return c / d;
    }
  }
};

module.exports = utils;
