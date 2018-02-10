(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
	typeof define === "function" && define.amd ? define(factory) :
	(global.extendedMath = factory());
} (this, function() {

	"use strict";

	if(typeof require !== "undefined") {
		if(typeof utilities === "undefined") {
			global.utilities = require("extra-utilities");
		}
	}

	let extendedMath = { };

	extendedMath.HalfPI = 1.57079632679489661923;
	extendedMath.QuarterPI = 0.78539816339744830962;
	extendedMath.TwoPI = 6.28318530717958647693;

	extendedMath.clamp = function(value, min, max) {
		return utilities.isInvalidNumber(value) || utilities.isInvalidNumber(min) || utilities.isInvalidNumber(max) ? NaN : value < min ? min : value > max ? max : value;
	};

	extendedMath.distance = function(a, b) {
		return utilities.isInvalidNumber(a) || utilities.isInvalidNumber(b) ? NaN : Math.abs(b - a);
	};

	extendedMath.radiansToDegrees = function(value) {
		return utilities.isInvalidNumber(value) ? NaN : value * (180 / Math.PI);
	};

	extendedMath.degreesToRadians = function(value) {
		return utilities.isInvalidNumber(value) ? NaN : value * (Math.PI / 180);
	};

	extendedMath.compareAnglesDegrees = function(a, b) {
		if(utilities.isInvalidNumber(a) || utilities.isInvalidNumber(b)) {
			return NaN;
		}

		if(a == b) {
			return 0;
		}

		let c = a % 360;
		let d = b % 360;

		if(c < 0) {
			c += 360;
		}

		if(d < 0) {
			d += 360;
		}

		if(c === d) {
			return 0;
		}

		return Math.cos(extendedMath.degreesToRadians(a - b) + (Math.PI / 2)) < 0 ? -1 : 1;
	};

	extendedMath.compareAnglesRadians = function(a, b) {
		return utilities.isInvalidNumber(a) || utilities.isInvalidNumber(b) ? NaN : extendedMath.compareAnglesDegrees(extendedMath.radiansToDegrees(a), extendedMath.radiansToDegrees(b));
	};

	extendedMath.lerp = function(a, b, amount) {
		if(utilities.isInvalidNumber(a) || utilities.isInvalidNumber(b) || utilities.isInvalidNumber(amount)) {
			return NaN;
		}

		if(amount === 0) {
			return a;
		}
		else if(amount === 1) {
			return b;
		}

		return a + (b - a) * amount;
	};

	extendedMath.normalize = function(value, min, max) {
		return utilities.isInvalidNumber(value) || utilities.isInvalidNumber(min) || utilities.isInvalidNumber(max) ? NaN : (value - min) / (max - min);
	};

	return extendedMath;

}));
