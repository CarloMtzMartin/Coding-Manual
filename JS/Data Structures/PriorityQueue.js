class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    Enqueue(value, priority) {
        var newNode = new Node(value, priority);
        this.values.push(newNode);

        this.BubbleUp();
    }

    Dequeue() {
        const min = this.values[0];
        const end  = this.values.pop();

        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 1;
            let leftChild, rightChild;

            let swap = null;
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority < element.priority) swap = leftChildIndex;
            }
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }

                if(swap === null) break;
                this.swap(this.values, index, swap);

            }
        }
    }

    BubbleUp() {
        var index = this.values.length - 1;
        const element = this.values[index];
        
        if(index < 1) return index;

        
        while(index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
            
        }
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

class PriorityQueue2 {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }


var ER = new PriorityQueue();
ER.Enqueue("Common Cold", 5);
ER.Enqueue("Gunshot Wound", 1);
ER.Enqueue("High Fever", 3);


ER.print();

console.log(ER.Dequeue());

ER.print();