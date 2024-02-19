let exp=require('express')     //impoting the express
let app=exp()                  //storing the exp method in the app
app.use(exp.static('./public'))    //passing the path of the  folder where file stored
app.listen(8080,()=>{console.log("server started")});  //server listening the port 8080