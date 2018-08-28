module.exports = (function (config) {
  // "output_folder": "${CIRCLE_TEST_REPORTS}"

  config.selenium.start_process = false;
  config.selenium.host = 'hub-cloud.browserstack.com';
  config.selenium.port = 80;

  config.test_settings.default = {
    "desiredCapabilities": {
      "browserstack.user": process.env.BROWSERSTACK_USER,
      "browserstack.key": process.env.BROWSERSTACK_KEY,
      "browser": "ie"
    },

    selenium_host: config.selenium.host,
    selenium_port: config.selenium.port,
  };

  return config;
})(require('./nightwatch.json'));