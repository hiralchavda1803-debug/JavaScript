//   1. sort() Method:

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function sortAscending(arr)
{
    return [...arr].sort((a, b) => a - b);
}

var sortedNumbers = sortAscending(numbers);

console.log("Original Array:", numbers);
console.log("Sorted Array:", sortedNumbers);