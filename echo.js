var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
        extended: true
})); // for parsing application/x-www-form-urlencoded
app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        if (req.method == 'OPTIONS') {
                res.sendStatus(200);
                /让options请求快速返回/
        } else {
                next();
        }
});

app.post('*', function(req, res) {
        var content = req.body;
        console.log(content);
        res.json({
                code: 200,
                msg: content
        });
});

app.listen(3000);
