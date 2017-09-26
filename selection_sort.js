/**
 * Selection Sort
 */

const testArr = [4, 8, 2, 1, 13, 7, 21, 15, 9, 3];

const selectionSort = arr => {
	let temp;

	for (let i = 0; i < arr.length; i++) {
		// find smallest index for each pass
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			// compare our index min to current element
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		// do the swapping
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;

		console.log(arr, 'arr at each step');
	}

	return arr;
};

selectionSort(testArr);
