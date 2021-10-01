function merge(left, right) {
    var i = 0;
    var j = 0;

    var arr = [];
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            arr.push(left[i]);
            i++;
        }
        else {
            arr.push(right[j]);
            j++;
        }
    }

    while(i < left.length) {
        arr.push(left[i]);
        i++;
    }

    while(j < right.length) {
        arr.push(right[j]);
        j++;
    }

    return arr;
}

function mergeSort(arr) {
    //console.log("input: ", arr)
    if(arr.length <= 1) return arr;
    else {
        var middle = Math.floor(arr.length / 2);
        var result = merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
        //console.log("result: ", result)
        return result;
    }
}

console.log(mergeSort([2,5,3,4,9,1, 0]));
