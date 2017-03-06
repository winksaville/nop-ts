/**
 * Test nop module
 */

//const child_process = require('child_process');

import * as child from 'child_process';

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
  private server: child.ChildProcess;

  @AsyncSetupFixture
  public async setupFixture() {
    // Start the browser we're going to control
    this.driver = new Builder()
        .forBrowser(this.browserName)
        .build();

    // Start the server
    this.server = child.exec('node build/server.js');

    // Get the home page
    await this.driver.get('http:localhost:3000/');
  }

  @AsyncTeardownFixture
  public async teardownFixture() {
    await this.driver.quit();
    await this.server.kill();
  }

  @AsyncTest('wd: nop which is defined in a TS file')
  public async testWdNop() {
    let button = await this.driver.findElement(By.id('invokeNop'));
    button.click();
  }

  @AsyncTest('wd: callNop which is defined in a JS file')
  public async testWdCallNop() {
    let button = await this.driver.findElement(By.id('invokeCallNop'));
    button.click();
  }
}
