module.exports = {
  'Demo test GM' : function (browser) {
    browser
      .url('http://infowats-v2-test.mybluemix.net')
      .waitForElementVisible('.page-top', 60000, true,
        function(){}, 'Waiting Page Header to become visible')
      .setValue('.page-top', 'Test 1')
      .waitForElementPresent('#page-top', 60000)
      .pause(5000)
      .end();
  }
};
