import * as m from 'mithril';
import nop = require('../dist/nop');
import callNop = require('./callnop');

// To enable debug in the browser use the browser console to set
// localStorage.debug='my-client'
const debug = require('debug')('my-client');

function invokeNop() {
  debug('invokeNop');
  nop();
}

function invokeCallNop() {
  debug('invokeCallNop');
  callNop();
}

m.render(document.body,
  m('div', 'Hello, click to ', [
    m('a', {href: 'http://localhost:3000'}, 'reload'),
    m('br'),
    m('button', {onclick: invokeNop }, "invoke nop directly"),
    m('br'),
    m('button', {onclick: invokeCallNop}, "invoke nop via callNop js code"),
  ])
);
