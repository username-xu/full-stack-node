const news = require('./news');

module.exports = function(app){
    app.use('/api/news', news);
}