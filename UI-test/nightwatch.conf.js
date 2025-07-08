const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['pages'], 
  skip_testcases_on_fail: true,

  webdriver: {
    start_process: true,
    server_path: chromedriver.path, 
    port: 9515,
    cli_args: [
      '--verbose'
    ]
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          
          args: ['--start-maximized']
        }
      }
    }
  }
};
