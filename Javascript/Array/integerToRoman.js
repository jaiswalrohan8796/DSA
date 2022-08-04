//https://leetcode.com/problems/integer-to-roman/

var intToRoman = function (num) {
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return (
        M[Math.floor(num / 1000)] +
        C[Math.floor((num % 1000) / 100)] +
        X[Math.floor((num % 100) / 10)] +
        I[Math.floor((num % 10) / 1)]
    );
};

// public static String intToRoman(int num){
// 	if (num < 1 || num > 3999) return "";

// 	StringBuilder result = new StringBuilder();

// 	String[] roman = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
// 	int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };

// 	int i = 0;
//             //iterate until the number becomes zero, NO NEED to go until the last element in roman array
// 	while (num >0) {
// 		while ( num >= values[i]) {
// 			num -= values[i];
// 			result.append(roman[i]);
// 		}
// 		i++;
// 	}
// 	return result.toString();
// }

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
