const fs = require('fs');
const path = require('path');
const express = require('express');
const config = require('./config');
const routes = require('./routes');
const timer = require('./utils/timer');

const app = express();

routes(app);

// 部署网站
// 访问静态资源目录
app.use(express.static(path.resolve(__dirname, './public')));
// 访问页面
app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './public/index.html'), 'utf-8');
    res.send(html);
});

// 定时器
timer();

app.listen(config.port, function () {
    console.log(`listening on port ${config.port}`);
});