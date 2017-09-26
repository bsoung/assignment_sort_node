const { mergeSort, mergeSortIterative } = require('./merge_sort');
const insertionSort = require('./insertion_sort');
const quickSort = require('./quick_sort');
const bubbleSort = require('./bubble_sort');
const selectionSort = require('./selection_sort');

// const ITERATIONS = 1;

const testArr = [
	121,
	2,
	3,
	2,
	13,
	4,
	8,
	12,
	2134,
	128312,
	1,
	34,
	31,
	63,
	4734,
	34
];

const testArrTwo = [4, 8, 2, 1, 13, 7, 21, 15, 9, 3];

// console.log(mergeSort(testArr));

const benchmark = (func, arr, desc) => {
	let arrCopy = arr.slice();
	console.log('Test running...');
	let start = +new Date();
	// for (let i = 0; i < 1; i++) {
	func(arrCopy);
	// }
	let end = +new Date();
	console.log(`Test ended. Result: ${end - start}ms for ${desc}`);
};

const generateLargeUniqueArray = size => {
	let a;
	for (a = [], i = 0; i < size; ++i) a[i] = i;

	function shuffle(array) {
		var tmp,
			current,
			top = array.length;
		if (top)
			while (--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
		return array;
	}

	return shuffle(a);
};

const arrBig = generateLargeUniqueArray(100);
const arrHuge = generateLargeUniqueArray(2000);
const arrWtf = generateLargeUniqueArray(100000);

//**** small arrays *****
// benchmark(mergeSort, testArr, 'merge sort');
// benchmark(insertionSort, testArr, 'insertion sort');
// benchmark(quickSort, testArr, 'quick sort');
// benchmark(bubbleSort, testArr, 'bubble sort');
// benchmark(selectionSort, testArr, 'selection sort');

//**** larger arrays ******
// benchmark(mergeSort, arrBig, 'merge sort');
// benchmark(insertionSort, arrBig, 'insertion sort');
// benchmark(quickSort, arrBig, 'quick sort');
// benchmark(bubbleSort, arrBig, 'bubble sort');
// benchmark(selectionSort, arrBig, 'selection sort');

//**** much larger arrays ******
// benchmark(mergeSort, arrHuge, 'merge sort');
// benchmark(mergeSortIterative, arrHuge, 'merge sort interative');
// benchmark(insertionSort, arrHuge, 'insertion sort');
// benchmark(quickSort, arrHuge, 'quick sort');
// benchmark(bubbleSort, arrHuge, 'bubble sort');
// benchmark(selectionSort, arrHuge, 'selection sort');

// *** way too big arrays *** (no bubble sort)
benchmark(mergeSort, arrWtf, 'merge sort');
benchmark(mergeSortIterative, arrWtf, 'merge sort interative');
benchmark(insertionSort, arrWtf, 'insertion sort');
benchmark(quickSort, arrWtf, 'quick sort');
benchmark(bubbleSort, arrWtf, 'bubble sort');
benchmark(selectionSort, arrWtf, 'selection sort');
