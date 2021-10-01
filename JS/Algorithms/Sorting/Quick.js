function quickSort(arr, l = 0, r = arr.length - 1) {
    console.log("Start: ", arr[l])
    if(l < r) {
        var p = pivot(arr, l, r);

        quickSort(arr, l, p - 1);
        quickSort(arr, p + 1, r);
    }  

    return arr;
}

function pivot(arr, start, end) {
    var pivotIndex = start;
    var pivotValue = arr[start];

    for(var i = start + 1; i <= end; i++) {
        console.log("begin", arr, i)
        if(arr[i] < pivotValue) {
            //console.log("arr[i]", arr[i])
            // Keep track of smaller or equal elements.
            pivotIndex++;
            console.log("i", i, "pivot idx", pivotIndex)
            swap(arr, i, pivotIndex);
            console.log("After", arr)
        }
    }

    swap(arr, start, pivotIndex);
    console.log("Final", arr)


    return pivotIndex;
}

function swap(arr, first, second) {
    //console.log("Swap 1", arr)
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    //console.log("Swap 2", arr)
    return arr;
}

//pivot([4,8,2,1,5,7,6,3]);

quickSort([3,-5, 65,1,2,4]);