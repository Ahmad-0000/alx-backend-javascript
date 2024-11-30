const Utils = {
  calculateNumber: function (type, a, b) {
    const c = Math.round(a);
    const d = Math.round(b);
  
    if (type === 'sum') {
      return c + d;
    } else if (type === 'subtract') {
      return c - d;
    } else if (type === 'divide') {
      if (d === 0)
        return 'error';
      return c / d;
    }
  }
};

module.exports = Utils;
