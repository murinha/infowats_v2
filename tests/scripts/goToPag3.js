module.exports = {
  'Demo test GM' : function (browser) {
    browser
      .url('http://infowats-v2-test.mybluemix.net')
      .waitForElementVisible('body', 60000, true,
        function(){}, 'Waiting body to become visible')
      .click('#onboarding-btn')
      .waitForElementVisible('#btn-borala', 60000)
      .click('#btn-borala')
      .waitForElementVisible('#dev', 60000)
	  .click('#dev')
	  .click('#agile')
	  .click('#btn-deixaeuver')
	  .waitForElementVisible('#mainNav', 60000)
      .end();
  }
};
