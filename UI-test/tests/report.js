const HtmlReporter = require('nightwatch-html-reporter');

const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/../tests_output',
  themeName: 'default',
  reportFilename: 'ui-test-report',
  showSummary: true,
}); 

module.exports = reporter.fn;
