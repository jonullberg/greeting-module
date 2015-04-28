exports = module.exports = {};
exports.greet = function (name) {
	var greeting = "hello " + name;
	console.log(greeting);
	return greeting;
}

exports.greet(process.argv[2]);