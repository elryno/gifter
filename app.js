/**
 * *
 * * Author: Ryan Smith
 * * Version 0.1
 * * Sep 26, 2016
 * */

var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response) {

     var dir = '/home/danisdes/www/chooseoils.com/oil/';
     var r = [];

     try {
          var files = fs.readdirSync(dir);
          files.forEach(function(f) {
               var ff = dir + f;
               var stats = fs.statSync(ff);

               if (!stats.isDirectory()) {
                    r.push({"name":f,"path":ff});
               }
          });
     } catch(e) {
          r.push("Updated Could not load directory");
     }
  
     response.setHeader('Content-Type', 'application/json');
     response.end(JSON.stringify(r));
});

app.listen(1234);
