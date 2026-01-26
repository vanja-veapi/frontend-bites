export const fibonacciSequence = (n) => {
	if (!isInteger(n) || n < 0) throw new Error('Moras uneti pozitivan ceo broj');
	if (n === 0) return [];
	if (n === 1) return [0];

	let arr = [0, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}

	return arr;
};

function isInteger(num) {
	return num % 1 === 0;
}
// Fibonačijev niz je matematički niz brojeva gde je svaki sledeći broj zbir prethodna dva
// fibonacci(6) = [0,1,1,2,3,5]
// formula: n[2] = n[1] + n[0]
// odnosno dinamicki n[i] = n[i-1] + n[i-2]
