module.exports = {
  'Demo test GM' : function (browser) {
    browser
      .url('http://infowats-v2-test.mybluemix.net')
      .waitForElementVisible('body', 60000, true,
        function(){}, 'Waiting body to become visible')
      .assert.visible('onboarding-btn')
      .click('onboarding-btn')
      .end();
  }
};
