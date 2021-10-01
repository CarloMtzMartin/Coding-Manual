

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

    shortestPath(start, end) {
        var distances = fillDistancesObject();
    }

    fillDistancesObject(start) {
        var distances = {};

        Object.keys(this.adjacencyList).forEach(key => {
            distances[key] = Infinity;
        });
        distances[start] = 0;

        return distances;
    }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 3);
graph.addEdge("A", "C", 6);
graph.addEdge("B", "D", 8);
graph.addEdge("C", "E", 2);
graph.addEdge("D", "E", 6);
graph.addEdge("D", "F", 9);
graph.addEdge("E", "F", 3);

//graph.print();
console.log(graph.DFT_Recursive("A"));
console.log(graph.DFT_Iterative("A"));

console.log(graph.BFT_Iterative("A"));