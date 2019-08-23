var assert = require("assert");

describe("describe BStack", function() {
  it("Open BrowserStack", function() {
    browser.url("https://www.browserstack.com");
  });
  
  it("Open Facebook", function() {
    browser.url("https://www.facebook.com");
  });
  
});

describe("describe Facebook", function() {
  it("Open Google", function() {
    browser.url("https://www.google.com");
  });
  
  it("Open Facebook", function() {
    browser.url("https://www.facebook.com");
  });
  
});
