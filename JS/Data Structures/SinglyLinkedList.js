

class Node {
    constructor(val) {
        this.value= val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(x) {
        var newNode = new Node(x);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;

        var currentNode = this.head;
        var newTail = currentNode;

        while(currentNode.next !== null) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        return currentNode;
    }
}

var myList = new SinglyLinkedList();
console.log(myList.push("Hey"));
console.log(myList.push("Jude!!"));
console.log(myList.pop());
console.log(myList.push("Quesito"));

