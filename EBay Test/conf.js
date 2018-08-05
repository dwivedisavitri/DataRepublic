
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    allScriptsTimeout: 100000,
    getPageTimeout: 95000,

  
  onPrepare: function () {
       
        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;
        };
        browser.driver.manage().window().maximize();

    },
	
suites: {
        Login: 'e2e-tests_specs/Ebay/Test/test.spec.js',
       
      
    },



 

multiCapabilities: [{
  'browserName': 'chrome'
}, {
  'browserName': 'firefox'
}],
  


    baseUrl: 'https://www.ebay.com.au/',


  jasmineNodeOpts: {
      // If true, display spec names.
      isVerbose: true,
      // If true, print colors to the terminal.
      showColors: true,
      // If true, include stack traces in failures.
      includeStackTrace: true,
      // Default time to wait in ms before a test fails.
      defaultTimeoutInterval: 100000
  }
};
