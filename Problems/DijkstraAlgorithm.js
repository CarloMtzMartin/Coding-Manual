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

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(edge => {
            this.removeEdge(vertex, edge);
        });
        delete this.adjacencyList[vertex];
    }

    DFT_Recursive(start) {
        var results = [];
        var visited = {};
        var adjacencyList = this.adjacencyList;
        

        (function DFS(vertex) {
            if(vertex == null) return null;
            visited[vertex] = true;
            results.push(vertex);
            
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor.node]) return DFS(neighbor.node);
            });
        })(start)

        return results;
    }

    DFT_Iterative(start) {
        var stack = [start];

        var results = [];
        var visited = {};

        visited[start] = true;

        while(stack.length > 0) {
            var vertex = stack.pop();
            results.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    stack.push(neighbor.node);
                }
            })
        }
        return results;
    }

    BFT_Iterative(start) {
        var queue = [start];

        var results = [];
        var visited = {};

        visited[start] = true;
        while(queue.length) {
            var vertex = queue.shift();
            results.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    queue.push(neighbor.node);
                }
            });
        }

        return results;
    }

    print() {
        console.log(this);
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.Enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.Enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.Dequeue().value;
            //console.log("SAMLL 1", smallest);
            if(smallest === finish){
                //console.log("SAMLL 2", smallest);
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                
                for(let neighbor in this.adjacencyList[smallest]){
                    
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //console.log("SAMLL 3", this.adjacencyList[smallest], nextNode);
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.Enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }

    fillDistancesObject(start) {
        var distances = {};

        Object.keys(this.adjacencyList).forEach(key => {
            distances[key] = Infinity;
        });
        distances[start] = 0;

        return distances;
    }

    createInitialQueue(start) {
        var queue = new PriorityQueue();

        queue.Enqueue(start, 0);
        Object.keys(this.adjacencyList).filter(key => !(key === start)).forEach(key => {
            queue.Enqueue(key, Infinity);
        });

        return queue;
    }

    createPreviousObject() {
        var obj = {};
        Object.keys(this.adjacencyList).forEach(key => {
            obj[key] = null;
        });
        return obj;
    }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.Dijkstra("A", "E"));