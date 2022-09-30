import AdjacencyGraphObj from './AdjacencyGraphObj';
//depthFirstSearch uses a stack
function DepthFirstSearchObjArr(start) {
  const result = [];
  const stack = [start];
  const visited = {};
  let currentVertex;
  visited[start.id] = true;
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);
    const reversedArray = this.adjacencyList[currentVertex.id].reverse();
    reversedArray.forEach((neighbor) => {
      if (!visited[neighbor.id]) {
        visited[neighbor.id] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
}

export { DepthFirstSearchObjArr };
