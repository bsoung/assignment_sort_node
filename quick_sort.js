/**
 * Quick Sort
 */

// merge sort, divide step does little and most work done in combine step
// quick sort, most work is done in divide step
// select our pivot, rearrage all the el greater than to the right and all el less than or equal to left

// get our pivot point moves to its correct location then partition
// get our pivot location - keep track of where the list is less than on the left and greater than pivot point on our right

/*
	pseudocode partition
	- choose pivot point
	- find pivot location, set at beginning of arr
	- iterate through arr.
	- if pivot location > pivot, move pivot over by 1, move pivot location to where pivot was
	- move next el taken by pivot to old index of pivot location
 */

// [4, 3, 7, 9, 10, 8, 2, 6, 5]

// at 7
// [4, 3, 7, 9, 10, 8, 2, 6, 5]
// [4, 3, 6, 9, 10, 8, 2, 5, 7]

const testArr = [4, 3, 7, 9, 10, 8, 2, 6, 5];

const partition = (arr, low, high) => {
	let pivot = arr[high];
	// set pivot location
	let pivotLocation = low;

	for (let i = low; i < high; i++) {
		if (arr[i] <= pivot) {
			// do our swaps
			let temp = arr[pivotLocation];
			arr[pivotLocation] = arr[i];
			arr[i] = temp;

			pivotLocation++;
		}
	}

	// wait till end then final swap between pivot and pivot location
	let temp = arr[pivotLocation];
	arr[pivotLocation] = arr[high];
	arr[high] = temp;

	return pivotLocation;
};

// partition(testArr, 0, testArr.length - 1);

const quickSort = (arr, low = 0, high = arr.length - 1) => {
	if (low < high) {
		let partitionIndex = partition(arr, low, high);

		quickSort(arr, low, partitionIndex - 1); // partition the left
		quickSort(arr, partitionIndex + 1, high); // partition the right
	}

	if (high - low === arr.length - 1) return arr;
};

module.exports = quickSort;

// console.log(quickSort(testArr));
