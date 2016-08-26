//exec cmd from node
var exec = require('child_process').exec;
var parseColumns = require('parse-columns');

exec("adb devices -l", function(error, stdout, stderr){
	console.log(parseColumns(stdout, {
        transform: function (el, header, columnIndex) {
            return el; // [ { 'List of devices attached': '015d21d549082005\tunauthorized' } ]
        }
    }));

});
