const winston = require('winston')
require('winston-daily-rotate-file')

const { logger, transports} = winston
const { Console , DailyRotateFile} = transports;

const logger = new logger({
  transports:[
      new Console(),
      new DailyRotateFile({
        name: 'base_logger',
        filename: './logs/info.log.',
        prepend: false,
        dataPattern: 'yyyy_MM_dd',
        level: 'info'
      }),
    new DailyRotateFile({
      name: 'error_logger',
      filename: './logs/error.log.',
      prepend: false,
      dataPattern: 'yyyy_MM_dd',
      level: 'error'
    })
  ]
})

module.exports = logger
