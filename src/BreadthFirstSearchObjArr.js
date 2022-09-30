import AdjacencyGraphObj from './AdjacencyGraphObj';
// breadthFirstSearch uses a queue
function BreadthFirstSearchObjArr(start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start.id] = true;
  let currentVertex;
  while (queue.length) {
    let currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex.id].forEach((neighbor) => {
      if (!visited[neighbor.id]) {
        visited[neighbor.id] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
}

export { BreadthFirstSearchObjArr };
