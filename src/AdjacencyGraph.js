// reference helper: https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/
import { BreadthFirstSearch } from './BreadthFirstSearch';
import { DepthFirstSearch } from './DepthFirstSearch';
class AdjacencyGraph {
  constructor() {
    this.adjacencyList = {}; // adjacencies, items that are adjacent
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }

  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (v) => v != destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (v) => v !== source
    );
  }

  removeVertex(v) {
    while (this.adjacencyList[v]) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }
    delete this.adjacencyList[v];
  }
}

AdjacencyGraph.prototype.bfs = BreadthFirstSearch;
AdjacencyGraph.prototype.dfs = DepthFirstSearch;

export default AdjacencyGraph;
