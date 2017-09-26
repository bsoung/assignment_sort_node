/** 
 * Insertion Sort
 */

// store current in temp var
// temp = 2
// |4, 8| |2, 1, 13, 7, 21, 15, 9, 3|
// |4, 8| |8, 1, 13, 7, 21, 15, 9, 3| 8 > 2
// |4, 4| |8, 1, 13, 7, 21, 15, 9, 3| 4 > 2
// |2, 4, 8| |1, 13, 7, 21, 15, 9, 3| insert to at beginning

const testArr = [4, 8, 2, 1, 13, 7, 21, 15, 9, 3];

const insertionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i]; //2
		console.log(temp, 'temp');

		// j represents the sorted elements length
		let j = i - 1; // 1
		// console.log(j, 'j - 1 is currently');

		while (j >= 0 && arr[j] > temp) {
			console.log(arr[j], ' is greater than ', temp);
			console.log(arr[j + 1], ' is now equals ', arr[j]);

			arr[j + 1] = arr[j];
			console.log(arr, 'arr inside');

			j--;
		}
		// console.log(arr, 'before at each step');
		console.log(j + 1);
		arr[j + 1] = temp;
		console.log(arr, 'after at each step');
	}

	return arr;
};

insertionSort(testArr);
