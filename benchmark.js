const mergeSort = require('./merge_sort');
const insertionSort = require('./insertion_sort');
const quickSort = require('./quick_sort');
const bubbleSort = require('./bubble_sort');
const selectionSort = require('./selection_sort');

const ITERATIONS = 1000;

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

const benchmark = (n, func, arr, desc) => {
	let arrCopy = arr.slice();
	let start = +new Date();
	console.log('Test running...');
	for (let i = 0; i < n; i++) {
		func(arrCopy);
	}
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
const arrWtf = generateLargeUniqueArray(20000);

//**** small arrays *****
// benchmark(ITERATIONS, mergeSort, testArr, 'merge sort');
// benchmark(ITERATIONS, insertionSort, testArr, 'insertion sort');
// benchmark(ITERATIONS, quickSort, testArr, 'quick sort');
// benchmark(ITERATIONS, bubbleSort, testArr, 'bubble sort');
// benchmark(ITERATIONS, selectionSort, testArr, 'selection sort');

//**** larger arrays ******
// benchmark(ITERATIONS, mergeSort, arrBig, 'merge sort');
// benchmark(ITERATIONS, insertionSort, arrBig, 'insertion sort');
// benchmark(ITERATIONS, quickSort, arrBig, 'quick sort');
// benchmark(ITERATIONS, bubbleSort, arrBig, 'bubble sort');
// benchmark(ITERATIONS, selectionSort, arrBig, 'selection sort');

//**** much larger arrays ******
benchmark(ITERATIONS, mergeSort, arrHuge, 'merge sort');
benchmark(ITERATIONS, insertionSort, arrHuge, 'insertion sort');
benchmark(ITERATIONS, quickSort, arrHuge, 'quick sort');
benchmark(ITERATIONS, bubbleSort, arrHuge, 'bubble sort');
benchmark(ITERATIONS, selectionSort, arrHuge, 'selection sort');

//*** way too big arrays *** (no bubble sort)
// benchmark(ITERATIONS, mergeSort, arrWtf, 'merge sort');
// benchmark(ITERATIONS, insertionSort, arrWtf, 'insertion sort');
