const NewsModel = require('../models/news');
const fetch = require('./fetch');

const typeArr = ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang'];
// api参数配置
let config = {
    prefix: 'http://v.juhe.cn/toutiao/index?type=',
    type: '',
    key: '&key=4f23152121caf18495068ddbe3c096ca'
}

const main = () => {
    typeArr.forEach(item => {
        config.type = item;
        
        // 获取数据
        getData(config).then(res => {
            let response = JSON.parse(res);

            // 保存数据
            saveData(item, Array.from(new Set(response.result.data)));
        });
    })
}

const getData = async ({ prefix, type, key }) => {
    const url = prefix + type + key;

    return new Promise((resolve, reject) => {
        fetch.GET(url)
            .then(res => {
                resolve(res);
            })
    })
}

const saveData = (type, data) => {
    NewsModel.createNews(type, data)
        .then(result => {
            //console.log(result.insertedCount)
        })
        .catch(err => {
            console.log(err)
        });
}

module.exports = main;
