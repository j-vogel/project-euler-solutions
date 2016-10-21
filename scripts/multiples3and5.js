
////////////// PROBLEM 1 ////////////////
var multiples_of_3_and_5 = function() {
	var prob1_answer = document.getElementById("prob1_answer");
	var prob1_input = document.getElementById("prob1_input");
	var output_num = 0;

	if (isNaN(prob1_input.value)) {
		prob1_answer.innerHTML = "Please enter a number.";
	} else {
		var input_num = prob1_input.value;
		for (i = 0; i < input_num; i++) {
			if (i % 3 === 0) {
				output_num += i;
			} else if (i % 5 === 0) {
				output_num += i;
			} else {
				output_num += 0;
			}
		}
		prob1_answer.innerHTML = output_num;
	}
};

////////////// PROBLEM 2 ////////////////
var even_fibonacci = function() {
	var prob2_answer = document.getElementById("prob2_answer");
	var prob2_input = document.getElementById("prob2_input");

	if (isNaN(prob2_input.value)) {
		prob2_answer.innerHTML = "Please enter a number.";
	} else {
		var input_num = prob2_input.value;
		var fib1 = 1;
		var fib2 = 2;
		var fibtemp = fib1 + fib2;
		var fibsum = 2;

		while (fibtemp < input_num) {
			if (fibtemp % 2 === 0) {
				fibsum += fibtemp;
			}
			fib1 = fib2;
			fib2 = fibtemp;
			fibtemp = fib1 + fib2;
		}
		prob2_answer.innerHTML = fibsum;
	}
}

////////////// PROBLEM 3 ////////////////
var is_it_prime = function(num) {
	if (num === 2) {
		return true;
	} else if (num < 2 || num % 2 === 0) {
		return false;
	} else {
		var sqrt = Math.sqrt(num);
		for (i = 3; i <= sqrt; i += 2) {
			if (num % i === 0) {
				return false;
			}
		}
	}
	return true;
};

var prime_factors = function (num) {
	var factor_array = [];
	if (num % 2 === 0) {
		factor_array.push(2);
	}
	var sqrt = Math.sqrt(num);
	for (i = 3; i <= sqrt; i += 2) {
		if (is_it_prime(i)) {
			factor_array.push(i);
		}
	}
};
