module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 10) {
      return units[number];
  }

  if (number < 20) {
      return number === 10 ? tens[0] : teens[number - 11];
  }

  if (number < 100) {
      const remainder = number % 10;
      return remainder === 0 ? tens[Math.floor(number / 10) - 1] : tens[Math.floor(number / 10) - 1] + ' ' + units[remainder];
  }

  if (number < 1000) {
      const remainder = number % 100;
      const hundreds = units[Math.floor(number / 100)] + ' hundred';
      if (remainder === 0) {
          return hundreds;
      }
      return hundreds + ' ' + toReadable(remainder);
  }

  return '';
}
