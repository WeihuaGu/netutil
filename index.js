var express = require('express');
var app = express();
app.get('*', function(req, res) {
        res.send('只做特简单工具测试只用');
});
app.listen(3000);
