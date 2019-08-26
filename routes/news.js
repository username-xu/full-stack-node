const express = require('express');
const router = express.Router();

const NewsModel = require('../models/news');

router.get('/', function(req, res, next){
    res.redirect('/news/top');
});

router.get('/top', (req, res, next) => {
    NewsModel.findNews('top', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/shehui', (req, res, next) => {
    
    NewsModel.findNews('shehui', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/guonei', (req, res, next) => {
    
    NewsModel.findNews('guonei', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/guoji', (req, res, next) => {
    
    NewsModel.findNews('guoji', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/yule', (req, res, next) => {
    
    NewsModel.findNews('yule', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/tiyu', (req, res, next) => {
    
    NewsModel.findNews('tiyu', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/junshi', (req, res, next) => {
    
    NewsModel.findNews('junshi', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/keji', (req, res, next) => {
    
    NewsModel.findNews('keji', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/caijing', (req, res, next) => {
    
    NewsModel.findNews('caijing', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

router.get('/shishang', (req, res, next) => {
    
    NewsModel.findNews('shishang', req.query.pagenumber - 1).then(response => {
        res.send(response);
    })
    
});

module.exports = router;