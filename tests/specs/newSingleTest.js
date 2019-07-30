var assert = require("assert");

describe("DESC BStack", function() {
  it("can find search results", function() {
    browser.url("https://www.browserstack.com");
  });
});
describe("DESC Social Media", function() {
  it("can find search results", function() {
    browser.url("https://www.facebook.com");
  });
  it("can find search results", function() {
    browser.url("https://www.twitter.com");
  });
});
