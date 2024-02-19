
var fs = require('fs');
let data=[
    { Name: 'amit', age: '27', gender: 'male', city: 'gkp' },
    { Name: 'sudip', age: '28', gender: 'male', city: 'kgp' },
    { Name: 'aditya', age: '29', gender: 'male', city: 'bihar' },
    { Name: 'naincy', age: '30', gender: 'female', city: 'goa' },
    { Name: 'anamika', age: '25', gender: 'female', city: 'andhra' }
  ]


  fs.appendFile('jsonToText.txt','Name|age|gender|city'+'\n' , function (err) {
    if (err) throw err;});

for(let i=0;i<data.length;i++){


  fs.appendFile('jsonToText.txt',data[i].Name+'|'+data[i].age+'|'+data[i].gender+'|'+data[i].city+'\n' , function (err) {
    if (err) throw err;});
  
}