class Queue {
    //Node 
    

    constructor() {
        this.first = null;
        this.last =  null;
        this.size = 0;
    }

    

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    dequeue() {
        if(this.first) {
            var result =  this.first;
            if(this.first === this.last) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }
            this.size--;
            return result.element;
        }
    }
}

class Node {
    constructor(elm) {
        this.element = elm;
        this.next = null;
    }
}

var queue = new Queue();
queue.enqueue(4);
queue.enqueue(6);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);