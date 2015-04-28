var expect = require("chai").expect;
var greet = require("../lib/greet.js");

describe("Greet", function() {
	describe("#greet()", function () {
		it("should print out 'hello' and the name inputed into it", function () {
			var args = ["Jonathan"];

			var results = greet.greet(args);
			var expected = "hello Jonathan";
			
			expect(results).to.equal(expected);
		})
	})
}); 	// Added a comment to change files