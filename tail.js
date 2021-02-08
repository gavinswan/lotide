const tail = function(array) {
  array.shift();
  return array;
};

module.exports = tail;