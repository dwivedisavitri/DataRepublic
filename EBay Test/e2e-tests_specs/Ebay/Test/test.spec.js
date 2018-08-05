

var test = require('./test.po.js');


    describe('To test card of ebya', function () {
        var testObject;
        var forgotObject;

        var params = browser.params;
        testObject = new test();
        

        beforeEach(function () {
            console.log("In before each");
            isAngularSite(false);
            browser.get(browser.baseUrl);
            browser.manage().timeouts().pageLoadTimeout(25000);
            browser.manage().timeouts().implicitlyWait(25000);

        });

        afterEach(function () {
            browser.manage().deleteAllCookies();
            console.log('cookies deleted successfully');
            console.log('********************************************************');
            browser.driver.sleep(500);
        });



        it('Verify cart has 2 elements', function(){
            
            testObject.serchAndAdd();
            isAngularSite(false);
            expect(element(by.xpath('//*[@id="282554654046_title"]/a')).getText()).toContain('Samsung Galaxy S8');
            expect(element(by.xpath('//*[@id="302703664868_title"]/a')).getText()).toContain('Samsung Galaxy S7');
        

        });



        
        
    });
//};


