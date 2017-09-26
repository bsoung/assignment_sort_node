/** 
 * Bubble Sort
 */

const testArr = [4, 8, 2, 1, 13, 7, 21, 15, 9, 3];

const bubbleSort = (arrIn, str) => {
	let arr = arrIn.slice();
	let temp;

	if (str === 'DESC') {
		// keep track of the number of passes for sorting
		// begin with the total number of unsorted elements
		for (let i = arr.length; i > 0; i--) {
			// bubble sort here
			for (let j = 0; j < i; j++) {
				if (arr[j] < arr[j + 1]) {
					temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	} else if (str === 'ASC') {
		for (let i = arr.length; i > 0; i--) {
			for (let j = 0; j < i; j++) {
				if (arr[j] > arr[j + 1]) {
					temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	} else {
		console.log('Please enter ASC or DESC as second argment');
		return null;
	}

	return arr;
};

const bubbleSortTwo = arr => {
	let unsortedLength = arr.length;
	let temp;

	while (unsortedLength >= 0) {
		for (let i = 0; i < unsortedLength; i++) {
			if (arr[i] > arr[i + 1]) {
				temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}

		console.log(arr, 'array at each step');
		unsortedLength--;
	}

	return arr;
};

bubbleSortTwo(testArr);
