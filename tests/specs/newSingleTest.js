var assert = require("assert");

describe("DESC BStack", function() {
  it("Open BrowserStack", function() {
    browser.url("https://www.browserstack.com");
  });
});
describe("DESC Social Media", function() {
  it("Open Facebook", function() {
    browser.url("https://www.facebook.com");
  });
  it("Open Twitter", function() {
    browser.url("https://www.twitter.com");
  });
});
