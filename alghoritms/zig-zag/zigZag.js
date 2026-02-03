/**
 *
 * Za zadati a = [1,2,3,4,5,6], napraviti novi niz b tako sto ce prvi element u nizu biti a[0], drugi element a[length-1], treci a[1], cetvrti[length - 2] itd..
 */
function zigZag(inputArray) {
	const newArray = [];
	let lastElement = inputArray.length - 1;

	const pushElements = (i) => {
		if (i === lastElement) {
			newArray.push(inputArray[i]);
		} else {
			newArray.push(inputArray[i], inputArray[lastElement]);
		}
	};

	// Dosao sam na ideju da napravim for petlju i da u njoj u prvoj iteraciji pushujem prvi i poslednji element niza
	// U drugoj iteraciji pushujem drugi i pretposlednji element niza itd..
	for (let i = 0; i <= lastElement; i++) {
		pushElements(i);
		lastElement--;
	}

	return newArray;
}
// debug
console.log(zigZag([1, 2, 3, 4, 5, 6]));
console.log(zigZag([3, 8, 9, 1, 52]));
