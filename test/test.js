global.utilities = undefined;

var extendedMath = require("../dist/extended-math.js");
var utilities = require("extra-utilities");
var chai = require("chai");
var expect = chai.expect;

describe("Extended Math", function() {
	describe("clamp", function() {
		it("should be a function", function() {
			expect(extendedMath.clamp instanceof Function).to.equal(true);
		});
	});

	describe("distance", function() {
		it("should be a function", function() {
			expect(extendedMath.distance instanceof Function).to.equal(true);
		});
	});

	describe("radiansToDegrees", function() {
		it("should be a function", function() {
			expect(extendedMath.radiansToDegrees instanceof Function).to.equal(true);
		});
	});

	describe("degreesToRadians", function() {
		it("should be a function", function() {
			expect(extendedMath.degreesToRadians instanceof Function).to.equal(true);
		});
	});

	describe("compareAnglesDegrees", function() {
		it("should be a function", function() {
			expect(extendedMath.compareAnglesDegrees instanceof Function).to.equal(true);
		});
	});

	describe("compareAnglesRadians", function() {
		it("should be a function", function() {
			expect(extendedMath.compareAnglesRadians instanceof Function).to.equal(true);
		});
	});

	describe("lerp", function() {
		it("should be a function", function() {
			expect(extendedMath.lerp instanceof Function).to.equal(true);
		});
	});

	describe("normalize", function() {
		it("should be a function", function() {
			expect(extendedMath.normalize instanceof Function).to.equal(true);
		});
	});
});
