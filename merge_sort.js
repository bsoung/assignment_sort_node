/**
 * Merge 
 */

// go through each sorted list
// compare first element in sorted list with first element in second sorted list
// if number is smaller, push it on to new arr
// O(n) time

// output array = []
// Loop until L and R lengths are 0
// grab the first element from each using shift
// if left[leftPointer] > right[rightPointer]
// push lower number, right[0] to output array
// increment rightPointer by 1, for next element in arr
// else
// push left[leftPointer] into output
// increment leftPointer

const leftTestArr = [1, 22, 34, 50];
const rightTestArr = [14, 23, 27, 54];

const merge = (left, right) => {
	let output = [];

	while (left.length > 0 && right.length > 0) {
		output.push(left[0] < right[0] ? left.shift() : right.shift());
	}

	// if one arr is empty we can concat them assuming lists are ordered
	return output.concat(left, right);
};

// keep track of two pointers for left and right array
// update each accordingly

const mergeWithPointers = (left, right) => {
	const arrslength = left.length + right.length;

	let output = [];
	let leftPointer = 0;
	let rightPointer = 0;

	while (output.length < arrslength) {
		// handle when one side is empty
		// else compare each element from both lists
		if (leftPointer === left.length)
			output = output.concat(right.slice(rightPointer));
		else if (rightPointer === right.length)
			output = output.concat(left.slice(leftPointer));
		else if (left[leftPointer] <= right[rightPointer])
			output.push(left[leftPointer++]);
		else output.push(right[rightPointer++]);
	}

	return output;
};

// console.log(mergeWithPointers(leftTestArr, rightTestArr));

/**
 * Merge Sort
 * divide array up until we get individual elements - hit break case
 * if arr length === 1, return
 * grab the middle index set it to middle
 * grab the left arr by using slice on index 0 to middle
 * grab right arr using same method
 * call merge on our left and right arr
 * O(n * log(n)) where n is the merge and log(n) is the splitting
 */

const mergeSort = arr => {
	if (arr.length < 2) {
		return arr;
	}

	// begin dividing and conquering
	let middle = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle, arr.length));

	return mergeWithPointers(left, right);
};

const mergeSortIterative = arr => {
	// for each element create an array
	let subArrays = arr.map(el => [el]);

	// check if there's more than one sub array
	while (subArrays.length > 1) {
		let output = [];

		// adjacent arrays - each pair of subarrays, so count by twos
		for (let i = 0; i < subArrays.length; i += 2) {
			// merge the pairs
			if (subArrays[i + 1])
				output.push(mergeWithPointers(subArrays[i], subArrays[i + 1]));
			else result.push(subArrays[i]);
		}

		subArrays = output;
	}

	return subArrays[0];
};

testArr = [121, 2, 3, 2, 13, 4, 8, 12, 2134, 128312, 1, 34, 31, 63, 4734, 34];
// console.log(mergeSortIterative(testArr));

module.exports = mergeSort;
