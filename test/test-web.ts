/**
 * Test nop module
 */
import {
  //Expect,
  TestFixture,
  SetupFixture,
  Test
} from 'alsatian';

import {
  WebDriver,
  Builder
} from 'selenium-webdriver';

@TestFixture('Browser nop tests')
export class NopTests {
  private driver: WebDriver;
  private browserName = 'chromium';
  //private let By: object;
  //private let Until: object;

  @SetupFixture
  public setupFixture() {
    this.driver = new Builder()
        .forBrowser(this.browserName)
        .build();
  }

  @Test('wd: nop')
  public testWdNop() {
    console.log('testWdNop: get localhost');
    this.driver.get('http:localhost:3000/')
      .then(() => {
        console.log('Got the / page');
      });
  }
}
