import { DepthFirstSearchObjArr } from './DepthFirstSearchObjArr';
import { BreadthFirstSearchObjArr } from './BreadthFirstSearchObjArr';
class AdjacencyGraphObj {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(source, destination) {
    if (!this.adjacencyList[source.id]) {
      this.addVertex(source.id);
    }
    if (!this.adjacencyList[destination.id]) {
      this.addVertex(destination.id);
    }

    this.adjacencyList[source.id].push(destination);
    this.adjacencyList[destination.id].push(source);
  }

  // if byId === true, then we use the id of the source and destination
  // if not, then we assume the user is passing us just the id
  removeEdge(source, destination, byId = false) {
    if (byId) {
      this.adjacencyList[source.id] = this.adjacencyList[source.id].filter(
        (v) => v.id != destination.id
      );
      this.adjacencyList[destination.id] = this.adjacencyList[
        destination.id
      ].filter((v) => v.id !== source.id);
    } else {
      this.adjacencyList[source] = this.adjacencyList[source].filter(
        (v) => v.id != destination
      );
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(
        (v) => v.id !== source
      );
    }
  }

  removeVertex(v, byId) {
    if (byId) {
      while (this.adjacencyList[v.id].length > 0) {
        const adjacentVertex = this.adjacencyList[v.id].pop();
        this.removeEdge(v, adjacentVertex, true);
      }
      delete this.adjacencyList[v.id];
    } else {
      while (this.adjacencyList[v].length > 0) {
        const adjacentVertex = this.adjacencyList[v].pop();
        this.removeEdge(v, adjacentVertex.id);
      }
      delete this.adjacencyList[v];
    }
  }
}
AdjacencyGraphObj.prototype.dfs = DepthFirstSearchObjArr;
AdjacencyGraphObj.prototype.bfs = BreadthFirstSearchObjArr;

export default AdjacencyGraphObj;
