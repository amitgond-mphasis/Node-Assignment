const express=require('express');    //importing the required madule
const app= express();
const fs=require('fs');


app.use('/',express.static('./public'));
app.use(express.json())

//difining a rout to serve the buddy list
app.get('/buddylist',(req,res)=>{
    // console.log("req",req.body);
    fs.readFile('./data/buddy-list.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});

        }else{
            res.status(200).json(JSON.parse(data));
        }
    });
});
//adding data
app.post('/buddylist',(req,res)=>{
    // console.log("post req",req.body);
    fs.readFile('./data/buddy-list.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});

        }else{
           
            let usersData=JSON.parse(data)
            let newUser=req.body;
            newUser.userId=usersData.length+1;
            usersData.push(newUser)
            fs.writeFile("./data/buddy-list.json",JSON.stringify(usersData,null,2),()=>{res.status(200).json(usersData);})
            
        }
    });
});
//DELETING THE USER
app.delete('/buddylist/:id',(req,res)=>{
    console.log("delete req",req.params.id);
    fs.readFile('./data/buddy-list.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});

        }else{
           
            let usersData=JSON.parse(data)
            let index=usersData.findIndex(x=>(x.userId==req.params.id));
            usersData.splice(index,1)
            fs.writeFile("./data/buddy-list.json",JSON.stringify(usersData,null,2),()=>{res.status(200).json(usersData);})
            
        }
    });
});

//updating the user
app.put('/buddylist',(req,res)=>{
    // console.log("update req",req.body);
    fs.readFile('./data/buddy-list.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});

        }else{
           
            let usersData=JSON.parse(data)
            let newUser=req.body;
            let index;
            for(let i=0;i<usersData.length;i++){
                if(usersData[i].userId==newUser.userId){
                    index=i;
                }
            }
            usersData.splice(index,1,newUser);
    
            
            fs.writeFile("./data/buddy-list.json",JSON.stringify(usersData,null,2),()=>{res.status(200).json(usersData);})
            
        }
    });
});

app.listen(8080,()=>{console.log('server is listening on port 8080');})






















