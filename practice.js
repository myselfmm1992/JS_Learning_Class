
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max); // 40

//do we have a different way like any other sort will also work to find maximum
//change this as per bubble sort?   Yes, you can use the bubble sort algorithm to sort the array and then find the maximum value. In bubble sort, the largest element "bubbles" to the end of the array after each pass. Here's how you can implement it:   
let arr = [10, 25, 5, 40, 15];

// Bubble Sort Implementation   
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

// After sorting, the maximum value will be at the last index
let max = arr[arr.length - 1];
console.log(max); // 40

//which method is better?  The first method (iterating through the array to find the maximum value) is generally more efficient than using bubble sort to find the maximum. The first method has a time complexity of O(n), while bubble sort has a time complexity of O(n^2). Therefore, for finding the maximum value, the first method is preferred.
// //do we have other sorting methods to find maximum?  Yes, there are several other sorting algorithms that can be used to find the maximum value in an array. Some of the common sorting algorithms include:
// 1. Quick Sort
// 2. Merge Sort
// 3. Heap Sort
// 4. Insertion Sort
// 5. Selection Sort
//help me same example with each of these sorting methods to find the maximum value in the array.
//Sure! Below are examples of how to find the maximum value in an array using different sorting algorithms:

// 1. Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) { 
        return arr;
        