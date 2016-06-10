var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' }, //控制台输出
    {
      type: 'file', //文件输出
      filename:'./logs.log',
      maxLogSize: 1024,
      backups:3,
      category: 'normal'
    }
  ]
});
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');
// ...
//app.use(...)
//app.use(...)
// app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));
logger.info("ok")
