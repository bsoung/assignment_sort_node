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

const merge = (left, right) => {
	// 	let leftCopy = left.slice();
	// 	let rightCopy = right.slice();
	let output = [];

	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			output.push(left.shift());
		} else {
			output.push(right.shift());
		}
	}

	// console.log(output);
	// if one arr is empty we can concat them assuming lists are ordered
	return output.concat(left, right);
};

const leftTestArr = [1, 22, 34, 50];
const rightTestArr = [14, 23, 27, 54];

// merge(leftTestArr, rightTestArr);

/**
 * Merge Sort
 * divide array up until we get individual elements - hit break case
 * if arr length === 1, return
 * grab the middle index set it to middle
 * grab the left arr by using slice on index 0 to middle
 * grab right arr using same method
 * call merge on our left and right arr
 */

const mergeSort = arr => {
	if (arr.length < 2) {
		// console.log(arr, 'in base case');
		// once we get here, we've divide the array into multiple sorted lists of length 1
		return arr;
	}

	// begin dividing
	let middle = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle, arr.length));

	console.log(
		arr[middle],
		'middle',
		left,
		'left',
		right,
		'right',
		' ---------- each step'
	);

	return merge(left, right);
};

testArr = [121, 2, 3, 2, 13, 4, 8, 12, 2134, 128312, 1, 34, 31, 63, 4734, 34];
console.log(mergeSort(testArr));
