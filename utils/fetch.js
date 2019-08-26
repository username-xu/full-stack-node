const request = require('request');

module.exports = {
    // 导出get请求
    GET: function(url){
        return new Promise((resolve, reject) => {
            request({
                url: url,
            }, function (error, response, body) {
                resolve(body);
            });
        })
    },
    // 导出post请求
    POST: function(){}
}