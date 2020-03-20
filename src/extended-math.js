var extendedMath = { };

function isInvalidNumber(value) {
	return typeof value !== "number" || isNaN(value) || value === -Infinity || value === Infinity;
}

extendedMath.HalfPI = 1.57079632679489661923;
extendedMath.QuarterPI = 0.78539816339744830962;
extendedMath.TwoPI = 6.28318530717958647693;

extendedMath.clamp = function(value, min, max) {
	return isInvalidNumber(value) || isInvalidNumber(min) || isInvalidNumber(max) ? NaN : value < min ? min : value > max ? max : value;
};

extendedMath.distance = function(a, b) {
	return isInvalidNumber(a) || isInvalidNumber(b) ? NaN : Math.abs(b - a);
};

extendedMath.radiansToDegrees = function(value) {
	return isInvalidNumber(value) ? NaN : value * (180 / Math.PI);
};

extendedMath.degreesToRadians = function(value) {
	return isInvalidNumber(value) ? NaN : value * (Math.PI / 180);
};

extendedMath.compareAnglesDegrees = function(a, b) {
	if(isInvalidNumber(a) || isInvalidNumber(b)) {
		return NaN;
	}

	if(a === b) {
		return 0;
	}

	var c = a % 360;
	var d = b % 360;

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
	return isInvalidNumber(a) || isInvalidNumber(b) ? NaN : extendedMath.compareAnglesDegrees(extendedMath.radiansToDegrees(a), extendedMath.radiansToDegrees(b));
};

extendedMath.lerp = function(a, b, amount) {
	if(isInvalidNumber(a) || isInvalidNumber(b) || isInvalidNumber(amount)) {
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
	return isInvalidNumber(value) || isInvalidNumber(min) || isInvalidNumber(max) ? NaN : (value - min) / (max - min);
};

module.exports = extendedMath;
