const news = require('../lib/mongo');

module.exports = {
    // 添加数据
    createNews: (type, data) => {
        return news[type]
            .insertMany(data)
            .exec();
    },
    // 查询数据
    findNews: (type, pageNumber) => {
        return news[type]
            .find({})
            .sort({ date: -1 })
            .skip(pageNumber * 10)
            .limit(10)
            .exec();
    }
}