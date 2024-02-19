let fs=require('fs');
let HTTP= require('http')
let server=HTTP.createServer((req,res)=>{
    if(req.url==="/home"){
    fs.readFile('./lib/home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }else if(req.url==='/about'){
        fs.readFile('./lib/about.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });

    }else{
        fs.readFile('./lib/contact.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
    }
    
})
server.listen(8080,()=>console.log('server started'))