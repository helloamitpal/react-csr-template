/* eslint-disable no-console */
const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: (err, data) => {
    console.error(chalk.red(err), data || '');
  },

  info: (info, data) => {
    console.log(chalk.yellow(info), data || '');
  },

  success: (success, data) => {
    console.log(chalk.green(success), data || '');
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`Server started ! ${chalk.green('✓')}`);

    console.log(`
        ${chalk.bold(`Mode: ${process.env.NODE_ENV}`)}${divider}
        ${chalk.bold('Access URLs:')}${divider}
        Localhost: ${chalk.magenta(`http://${host}:${port}`)}
        LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
        SWAGGER: ${chalk.magenta(`http://${ip.address()}:${port}/api-doc`)}${divider}
        ${chalk.red(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  }
};

module.exports = logger;
