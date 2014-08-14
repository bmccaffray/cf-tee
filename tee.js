var fs = require('fs');

process.stdin.pipe(process.stdout)
	.on('data', function (data) {
		data = data.toString().trim();
		console.log(data + ' was added to ' + process.argv[2]); 
	})
	.pipe(fs.createWriteStream(process.argv[2]));