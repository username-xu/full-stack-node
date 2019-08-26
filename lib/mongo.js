const Mongolass = require('mongolass');
const mongolass = new Mongolass();
const config = require('../config')

mongolass.connect(config.mongodb);

exports.top = mongolass.model('news_tops', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.shehui = mongolass.model('news_shehuis', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.guonei = mongolass.model('news_guoneis', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.guoji = mongolass.model('news_guojis', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.yule = mongolass.model('news_yules', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.tiyu = mongolass.model('news_tiyus', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.junshi = mongolass.model('news_junshis', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.keji = mongolass.model('news_kejis', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.caijing = mongolass.model('news_caijings', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});

exports.shishang = mongolass.model('news_shishangs', {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true},
    author_name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    thumbnail_pic_s: { type: 'string', required: true  },
    thumbnail_pic_s02: { type: 'string', required: false  },
    thumbnail_pic_s03: { type: 'string', required: false  },
});