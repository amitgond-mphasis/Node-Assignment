let fs=require('fs')
//writing the file
writeSm=fs.createWriteStream("./gradious-assignment.exe")
//reading the file
stream = fs.createReadStream("./sample4.exe");
	stream.on("data", function (data) {
		var chunk = data.toString();
		 console.log(chunk);
	});
stream.pipe(writeSm);