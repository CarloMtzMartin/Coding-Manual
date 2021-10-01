class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
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
                if(!visited[neighbor]) return DFS(neighbor);
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
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
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
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return results;
    }

    print() {
        console.log(this);
    }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");

graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//graph.print();
console.log(graph.DFT_Recursive("A"));
console.log(graph.DFT_Iterative("A"));

console.log(graph.BFT_Iterative("A"));