module.exports = (function (settings) {
  settings.selenium.start_process = false;
  // "output_folder": "${CIRCLE_TEST_REPORTS}"
  return settings;
})(require('./nightwatch.json'));