/**
 * Test nop module
 */
import {
  //Expect,
  TestFixture,
  AsyncSetupFixture,
  AsyncTeardownFixture,
  AsyncTest
} from 'alsatian';

import {
  WebDriver,
  By,
  Builder
} from 'selenium-webdriver';

@TestFixture('Browser nop tests')
export class NopTests {
  private driver: WebDriver;
  private browserName = 'chrome';

  @AsyncSetupFixture
  public async setupFixture() {
    // Start the browser we're going to control
    this.driver = new Builder()
        .forBrowser(this.browserName)
        .build();

    // Get the home page
    await this.driver.get('http:localhost:3000/');
  }

  @AsyncTeardownFixture
  public async teardownFixture() {
    await this.driver.quit();
  }

  @AsyncTest('wd: nop')
  public async testWdNop() {
    let button = await this.driver.findElement(By.id('invokeNop'));
    button.click();
  }
}
