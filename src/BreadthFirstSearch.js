import AdjacencyGraph from './AdjacencyGraph';
// breadthFirstSearch uses a queue
function BreadthFirstSearch(start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    let currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
}

export { BreadthFirstSearch };
