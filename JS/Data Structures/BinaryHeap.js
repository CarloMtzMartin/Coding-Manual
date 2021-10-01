class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(newValue) {
        this.values.push(newValue);
        
        var index = this.values.length - 1;
        
        if(index < 1) return index;

        var parentIndex = Math.floor((index - 1) / 2);
        while(parentIndex >= 0) {
            if(newValue < this.values[parentIndex]) break;
            this.swap(this.values, index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((parentIndex - 1) / 2); 
            
        }

        return parentIndex;
    }

    extract() {
        const max = this.values[0];


        return max;
    }

    swap(arr, value1, value2) {
        var temp = arr[value1];
        arr[value1] = arr[value2];
        arr[value2] = temp;
    };

    print() {
        console.log(this.values);
    }
}


var binaryHeap = new BinaryHeap();
binaryHeap.insert(41);
binaryHeap.insert(39);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(12);
binaryHeap.insert(55);
binaryHeap.insert(53);

binaryHeap.print();