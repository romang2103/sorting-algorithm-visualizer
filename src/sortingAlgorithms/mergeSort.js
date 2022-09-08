export function mergeSortFunction(array) {
    if(array.length < 2)
    return array;

    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    // console.log("split: ", left, right);
    return merge(mergeSortFunction(left), mergeSortFunction(right));
}

export function merge(left, right) {
    var sortedArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        }
        else {
            sortedArray.push(right.shift());
        }
    }

    while (left.length)
        sortedArray.push(left.shift());

    while (right.length)
        sortedArray.push(right.shift());
    
    // console.log("result: ", sortedArray);
    return sortedArray;
}

//  console.log(mergeSort([1,5,6,11,9,1]));