var fs = require('fs');
function getFileContent(fileName) {

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        // console.log(data);
        const d = new Date();
        d.setFullYear(2023, 9, 22);
        console.log(data)
       let newData = data.split('\r\n');
        console.log(newData);
        // newData1=newData.split('\n');
        //  console.log(typeof(newData));
        let arr = []
        // // let a=''
        for (let i = 0; i < newData.length; i++) {
            // arr.push(d + newData[i].split('|'));
             arr.push(d+' '+newData[i]);
          
        }
        console.log(arr)
        let str=arr.join('\n')
        fs.writeFile(fileName, str, function (err) {
                    if (err) throw err;
                  });   
    })



}


getFileContent('./debug.log');

