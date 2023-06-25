var express = require("express");
var app = express();

var mysql  = require("mysql");
var db = mysql.createConnection({host: "localhost", user: "root", password: "mysql", database: "fish_tips"});

var bodyParser = require("body-parser");
var postParser = bodyParser.urlencoded({extended: true});
app.post("/add-lakes", postParser, function(request, response)
{
    response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});

    var sql = "INSERT INTO lakes VALUES (NULL, ?, ?, ?, NOW(), 1);";
    var values = [request.body.name, request.body.location, request.body.comment,request.body.type];

    db.query(sql, values, function()
    {
        response.write(JSON.stringify(request.body));
        response.send();
    });
});
app.get( "get-lakes-in-table/:table",function(request, response)
{
    response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
        
    db.connect(function()
    {
        var sql = "SELECT * FROM lakes";
        var values = [request.params.name];

        db.query(sql, values, function(error, result)
        {
            var json = JSON.stringify(result);
            response.write(json);
            response.send();
        });
    });
});
app.get("/get-lakes", function(request, response)
{
    response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});

    var json = JSON.stringify(topics);
    response.write(json);
    response.send();
});

