module.exports = (function (config) {
  console.log(process.env.BROWSERSTACK_USER);
  // "output_folder": "${CIRCLE_TEST_REPORTS}"

  config.selenium.start_process = false;
  config.selenium.host = 'hub-cloud.browserstack.com';
  config.selenium.port = 80;

  config.browserstack = {
    "desiredCapabilities": {
      "browserstack.user": process.env.BROWSERSTACK_USER,
      "browserstack.key": process.env.BROWSERSTACK_KEY,
      "browser": "ie"
    }
  };

  config.test_settings.default = {
    selenium_host: config.selenium.host,
    selenium_port: config.selenium.port,
  };

  return config;
})(require('./nightwatch.json'));