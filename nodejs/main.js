// url을 통해 입력된 값 사용방법

var http = require('http');
var fs = require('fs');
var url = require('url'); // url : node.js 빌트인 모듈

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id); // 객체 형태로 반환
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);
