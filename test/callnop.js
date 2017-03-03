const nop = require('../dist/nop');
function callNop() {
  try {
    nop();
    return true;
  } catch(e) {
    return false;
  }
}
module.exports = callNop;
