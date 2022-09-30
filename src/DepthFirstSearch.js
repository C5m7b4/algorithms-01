import AdjacencyGraph from './AdjacencyGraph';
//depthFirstSearch uses a stack
function DepthFirstSearch(start) {
  const result = [];
  const stack = [start];
  const visited = {};
  let currentVertex;
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
}

export { DepthFirstSearch };
