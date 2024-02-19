// const { create } = require('domain')
// const server= require('http')
let fs=require('fs');
let HTTP= require('http')
let server=HTTP.createServer((req,res)=>{
  console.log(req)
    fs.readFile('./lib/t.txt', function(err, data) {
      console.log(typeof(data))
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<p>${data}data</p>`);
        res.end();
      });
    
})
server.listen(8080,()=>console.log('server started'))