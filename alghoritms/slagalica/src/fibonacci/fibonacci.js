// Time Complexity
// Svaki poziv fibonacci(n) pravi dva nova poziva: fibonacci(n-1) i fibonacci(n-2)
// To znači rekurzivno drvo gde broj čvorova eksponencijalno raste
// Broj poziva približno O(2^n)

// Big_O(2^n)
export const fibonacci = (n) => {
	// Ako ne zaustavim kod doci cu do stack overflow-a
	if (n < 2) return n;

	return fibonacci(n - 1) + fibonacci(n - 2);
};

// [0, 1, 1, 2, 3, 5, 8, 13, 21]...
export const fibonacci_BigO_n = (n) => {
	if (n < 2) return n;

	let first = 0;
	let second = 1;
	let sum = 0;

	for (let i = 2; i <= n; i++) {
		sum = first + second;
		first = second;
		second = sum;
	}

	return sum;

	// Koriscenje reduce
	// return Array.from({ length: n - 2 }).reduce(
	//   (arr) => {
	//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	//     return arr;
	//   },
	//   [0, 1]
	// );
};
