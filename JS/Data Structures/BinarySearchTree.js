class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    contructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if(!this.root) this.root = newNode;
        else {
            var current = this.root;
            while(current !== null) {
                if(value < current.value) {
                    if(current.left == null) {
                        current.left = newNode;
                        current = null;
                    } 
                    else current = current.left;
                } else {
                    if(current.right == null) {
                        current.right = newNode;
                        current = null;
                    } 
                    else current = current.right;
                }
            }
        }

        return this;
    }

    find(value) {
        if(this.root === null) return false;
        else {
            let current = this.root;
            while(current !== null) {
                if(value === current.value) return true;
                if(value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            return false;
        }
    }

    BFS() {
        var queue = [];
        var data = [];

        queue.push(this.root);
        while(queue.length > 0) {
            var temp = queue.shift();
            data.push(temp.value);
            if(temp.left !== null) queue.push(temp.left);
            if(temp.right !== null) queue.push(temp.right);
        }

        return data;
    }

    DFS_PreOrder() {
        var data = [];

        // Helper function (visit, left, right)
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }

    DFS_PostOrder() {
        var data = [];

        // Helper function (left, right, visit)
        function traverse(node) {
            
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);

        return data;
    }

    DFS_InOrder() {
        var data = [];

        // Helper function (left, right, visit)
        function traverse(node) {
            
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }
}

var tree = new BinarySearchTree();

console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(20));


console.log(tree.find(30));
console.log("BFS - PreOrder", tree.BFS());
console.log("DFS - PreOrder", tree.DFS_PreOrder());
console.log("DFS - PostOrder", tree.DFS_PostOrder());
console.log("DFS - InOrder", tree.DFS_InOrder());

