'use strict';

var rainbowColors = generateColors();

function Rainbowifier() {

  var colorIndex = 0;

  /**
   * Apply rainbow to the given `str`.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  this.rainbowify =
        exports.rainbowify =
          function rainbowify(str) {
            var color = rainbowColors[colorIndex % rainbowColors.length];
            colorIndex += 1;
            return '\u001b[38;5;' + color + 'm' + str + '\u001b[0m';
          };
}

exports.getInstance = function() { return new Rainbowifier(); };


/**
 * Generate rainbow colors.
 *
 * @return {Array}
 * @api private
 */

function generateColors() {
  return [
      // blue-ish
      25, 26, 27, 31, 33, 37, 38, 39, 44, 45,
      // white/gray
      247, 248, 249, 250, 251, 252, 253, 254, 255
  ];
}
