const { JSDOM } = require('jsdom');
const localStorage = require('localStorage');

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.requestAnimationFrame = callback => callback = null;
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = localStorage;
global.navigator = { userAgent: 'node.js',javaEnabled: () => true };
