function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var value = arr[i];
        console.log("Value", value)
        for(var j = i - 1; j >= 0; j--) {
            if(arr[j] < value) {
                console.log("BREAK!", j, arr[j])
                break;
            }
            arr[j + 1] = arr[j];

            console.log(j, arr[j], arr[j + 1])
            
        }
        arr[j + 1] = value;
        console.log(arr);

    }
    return arr;
}

insertionSort([14, 2, 45, 3, 1, 6, 58, 0]);