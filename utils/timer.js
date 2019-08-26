const schedule = require('node-schedule');
const getData = require('./getNewsData')

const  scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    /*
        每分钟的第30秒触发： '30 * * * * *'
        每小时的1分30秒触发 ：'30 1 * * * *'
        每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
        每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
        2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
        每周1的1点1分30秒触发 ：'30 1 1 * * 1'
     */
    // 上午6:30
    schedule.scheduleJob('0 30 6 * * *', () => {
        console.log(new Date());
        // 获取数据
        getData();
    });
    // 下午5:30
    schedule.scheduleJob('0 30 17 * * *', () => {
        console.log(new Date());
        // 获取数据
        getData();
    });
}
module.exports = scheduleCronstyle;
