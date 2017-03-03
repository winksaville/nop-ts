/**
 * Test nop module
 */
import { Expect, Test } from 'alsatian';
import nop = require('../dist/nop');
import callNop = require('./callnop');

export class NopTests {
  @Test('test nop type is function')
  public testNopType() {
    let type = typeof(nop);
    Expect(type).toBe('function');
  }

  @Test('test nop return value is not defined')
  public testNopReturnValue() {
    let type = nop();
    Expect(type).not.toBeDefined();
  }

  @Test('test a js file can import and call nop')
  public testCallNop() {
    Expect(callNop()).toBeTruthy();
  }
}
