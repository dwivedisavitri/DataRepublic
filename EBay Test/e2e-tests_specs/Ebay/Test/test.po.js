

var test_page = function(){
    var params = browser.params;

    function test_page(){

        this.searchbox=element(by.name('_nkw'));
        this.searchBtn=element(by.id('gh-btn'));

        this.addToCartBtn=element(by.id('atcRedesignId_btn'));
        this.firstserchItem=element(by.xpath('//*[@id="srp-river-results-listing1"]/div/div[2]/a'))
       
        this.chkoutPopupClose=element(by.css('div.clzBtn.viicon-close'));

        this.cart=element(by.xpath('//*[@id="gh-cart-1"]'));

    }

    test_page.prototype.serchAndAdd = function(un, pass){

        this.searchbox.sendKeys('Samsung s8');
        this.searchBtn.click();
        browser.sleep(2000);
        this.firstserchItem.getAttribute("href").then(function(hrefValue){
          browser.get(hrefValue);
        })
       
        this.addToCartBtn.click();
        browser.sleep(5000);
        this.chkoutPopupClose.click();
        
        this.searchbox.sendKeys('Samsung s7');
        this.searchBtn.click();
        browser.sleep(2000);
        this.firstserchItem.getAttribute("href").then(function(hrefValue){
          browser.get(hrefValue);
        })
      
        this.addToCartBtn.click();
        browser.sleep(5000);
        this.chkoutPopupClose.click();

        this.cart.getAttribute("href").then(function(hrefValue){
          browser.get(hrefValue);
        })
       




    };

    
    return test_page;

}();
module.exports= test_page;
