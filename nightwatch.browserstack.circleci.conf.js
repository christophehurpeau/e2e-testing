module.exports = (function (settings) {
  // "output_folder": "${CIRCLE_TEST_REPORTS}"

  settings.selenium.start_process = false;
  settings.selenium.host = 'hub-cloud.browserstack.com';
  settings.selenium.port = 80;

  settings.browserstack = {
    "desiredCapabilities": {
      "browserstack.user": process.env.BROWSERSTACK_USER,
      "browserstack.key": process.env.BROWSERSTACK_KEY,
      "browser": "ie"
    }
  };

  nightwatch_config.test_settings.default = {
    selenium_host: nightwatch_config.selenium.host,
    selenium_port: nightwatch_config.selenium.port,
  };

  return settings;
})(require('./nightwatch.json'));