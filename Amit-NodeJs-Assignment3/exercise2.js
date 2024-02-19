let fs=require('fs');
let HTTP= require('http')
let server=HTTP.createServer((req,res)=>{  //creating the server
      fs.readFile('./lib/users.txt', 'utf8', (err, data) => {  //reading the file
        if (err) {
            console.error(err);
        }
        newData = data.split('\r\n');  //spiting the data on the basis of new line
        let arr = []
        for (let i = 0; i < newData.length; i++) {
            arr.push(newData[i].split('|'));  //spliting the data on the basis of pipe
        }

        //creating the head of the table
        let head=`<tr style="background-color: #96D4D4;border: 1px solid black;
        border-radius: 10px;">  
        <th border: 1px solid black;
        border-radius: 10px; >Name</th>
        <th >Age</th>
        <th >Gender</th>
        <th >City</th>
        </tr>`;
       
let finalDetails="";  //creating the empty string
        for (let i = 1; i < arr.length; i++) {
        let userRow= ` <tr style="background-color: #96D4D4;border: 1px solid black;
        border-radius: 10px;">
        <td >${arr[i][0]}</td>
        <td>${arr[i][1]}</td>
        <td>${arr[i][2]}</td>
        <td>${arr[i][3]}</td>
        </tr>`
        finalDetails=finalDetails+userRow;  //inserting the user data into the empty string
        }
let finalTableData=`<table style="border: 1px solid black;
border-radius: 10px;">`+head+finalDetails+`</table>`
        // console.log(arrNew)
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write(finalTableData);
        // res.sendDate()
        res.end(finalTableData);
    });
    
    
})
server.listen(8080,()=>console.log('server started'))



