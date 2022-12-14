# algorithms 01

taken from FrontEndMasters course at: https://frontendmasters.com/courses/practical-algorithms/unique-sort-exercise/

## branch 1

Here we are just adding a plain sort method for a simple array of numbers

## branch 2

here we are creating an actual dataset and sorting by a numerical value on that dataset by using a number property [age]. sorting by numbers is pretty easy.

## branch 3

now we are going to adapt our sorting algorithm to handle sorting by strings

## branch 4

now lets add some date sorting to our algorithm

## branch 5

Now we need to take into consideration seperation of concerns. We should really seperate out the unique functionality and the sort functionality. These should really be two seperate things.

## branch 6

Let's take a look at caching function results / memoization to speed up reaccuring evaluations

## branch 7

This approach uses a closure to capture our cache

## branch 8

Now that we've used a closure, let's look at what currying or partial application looks like.
It's really the same concept, but we could have a generic curry function or we could just curry the function specific to our needs.

## branch 9

Let's take a look at how you can curry functions and use partial application/currying to make deffered functions.

## branch 10

Now, let's add a pipe function for composition

## branch 11

Let use some real data for currying this time before we try to pipe on some real data

## branch 12

now we are going to compose over some real data

## branch 13

Let's modify our memoization utilty to take a generic callback so we can memoize anything

## branch 14

Let's build an iterative factorial function that we can then improve on using recursion just to start getting a good feel of recursion

## branch 15

Now let's convert our factorial function to use recursion instead of regular for loops

## branch 16

Let's convert this logNumber function to run recursively

## branch 17

Turn logNumber into a recursive function

## branch 18

Now can memoize our factorial function

## branch 19

Utilize a Linear search to find a number in an array of numbers and then also transform that Linear search to search through an array of objects. That seems more real-life to me.

## branch 20

Implement a Binary Search function. In order for Binary search to work the list must already be sorted. We can prove this out and then use our sorting function to sort our data and then use the binary search to get what we are after.

## branch 21

Let's develop a bubble sort and an optimized bubble sort for arrays of numbers

## branch 22

we added ascending and descending order to your bubble sort and created two idential bubble sorts that are capable of sorting arrays of objects ascending and descending

## branch 23

Now we will build out a mergeSort algorithm just for numbers

## branch 24

Now let's modify our marge sort to handle arrays of objects bot ascending and descending

## branch 25

This is just an example of a greedy algorithm that can bite you when the input is certain values, but works fine with other values

## branch 26

Let's refacor your greedy function using recursion

## branch 27

Now we will build a stack just like the one that is present in the execution runtime of your javascript code in the browser

## branch 28

optimize our stack to be a little more helpfull with a stacktrace

## branch 29

optimize our stack a little more and see what it looks like to stack function call and then pop them off later to use in our code

## branch 30

Now let's build up our own Queue system like the one that runs in the browser javascript execution context

## branch 31

Now lets use our Queue system with the implementation of some functions

## branch 32

Let's create a linked list and only implement the append method to this class

## branch 33

Now let's expand on our LinkedList and add the remove feature to it.

## branch 34

Let's expand on our LinkedList and add prepend, debug, and insertAt methods

## branch 35

Add the implementation for get to our Linked List as well as a removeAt method

## branch 36

Add a SingleLinkedList and implement insert and remove methods

## branch 37

Implement the remove, contains, isHead, and isTail methods

## branch 38

Let's create a HashTable class

## branch 39

Now we are going to start looking at trees. First we will create a normal tree with insertChild, appendChild, remove, traverse

## branch40

Add contains, size, and find to our Tree

## branch41

refactor Tree methods and add insert and reorder

## branch 42

Now we are going to create a Binary Tree.
Here is a good reference link:
https://codesandbox.io/s/graphtreesbinarytrees-forked-pjucnu?file=/solutions/binarytrees.solutions.js

## branch 43

There are three types of traversal, inOrderTraversal, preOrderTraversal, and postOrderTraversal. In this branch we are only going to implement and test the inOrderTraversal

## branch 44

Now we are going to see how preOrderTraversal outputs the trees inside of our tree

## branch 45

Now we are going to see how postOrderTraversal outputs the trees inside of our tree

## branch 46

Now let's take our BinaryTree and turn it into a BinarySearchTree. One of the properties of a binary search tree is that if the child node is less than the parent node, then the child must go on the left and if it is bigger then is must go to the right.

## branch 47

Let's add contains, min, and max to our BST

## branch 48

add remove functionality to our BST

## branch 49

add traversals and test them out

## branch 50

Here we are going to build an Adjacency Graph, and then we are going to modify it to use real life objects

## branch 51

Now we are going to look at graph traversals

### Breadth First Search

visits the nodes at one level at a time. To prevent visiting the same node more than once, we'll maintain a visited object. Since we need to process the nodes in a First in First out fashion, a queue is a good contender for the data structure to use. The time complexity if O(V+E);
psuedo code:
Initialize an empty queue, empty 'result' array & a 'visited' map
Add the starting vertex to the queue and visited map

```js
While queue is not empty:
  -dequeue and store current vertex
  -push current vertex to a result array
  -iterate through current vertexs adjacency list
    -foreach adjacent vertex, is vertex is unvisited:
      -add vertex to visited map
      -enqueue vertex
return result array
```

### Depth First Search

visits the nodes depth wise. since we need to pricess the nodes in a Last in First out manner, we'll use a stack.
Starting from a verte, we'll push the neighboring vertices to our stack. Whenever a vertex is popped, it is marked as visited in our visited object. Its neighboring vertices are pushed to the stack. Since we are always popping a new adjacent vertex, our algorithm will always explore a new level

psuedo code:

```js
function DFS
   Initialize an empty stack, empty 'result' array & a 'visited' map
   Add the starting vertex to the stack & visited map
   While Stack is not empty:
     - Pop and store current vertex
     - Push current vertex to result array
     - Iterate through current vertexs adjacency list:
       - For each adjacent vertex, if vertex is unvisited:
         - Add vertex to visited map
         - Push vertex to stack
   Return result array
```

## branch 52

We have now modified our DepthFirstSearch to work correctly choosing the left side of the node first always so if we have this graphed tree:

![Alt text](images/myGraph.png?raw=true "myGraph")

Once we build the AdjacentGraphs, our chrome debug tools should look like this:

![Alt text](images/AdjacencyGraphDebugView.png?raw=true "chromedebugger")

Now if we do a DepthFirstSearch the outcome should look like this:

![Alt text](images/dfsOnMyAdjacencyGraph.png?raw=true "dfsOuput")

If we now run a BreadthFirstSearch the outcome should look like this:

![Alt text](images/bfsOnMyAdjacencyGraph.png?raw=true "bfsOutput")

## branch 53

Now let's modify these two search algorithms to handle arrays of object and let's take a looksee and see what this is going to look like for us in the real world. This is the true challenge.

So let's build this tree into an AdjacencyGraph:

![Alt text](images/AdjacencyGraphObjArr.png?raw=true "adjacencyObjArr")

So, here is what that looks like in the chrome developer tools:

![Alt text](images/AdjacencyGraphObjOutput.png?raw=true "adjacencyOutput")

Now, you can see that everything points to where it should point to. So, after we convert our dfs and bfs, we should be able to get the same output that we got when using just numbers.
First we are going to look at DepthFirstSearch and make sure that it evaluates correclty, and it does. Here is our output:

![Alt text](images/dfsOnMyAdjacentObjArrGraph.png?raw=true "dfsOutput")

Now that we have altered our BreadthFirstSearch we should have these results:

![Alt Text](images/bfsObjArrOnMyAdjacencyGraph.png?raw=true "bfsOutput")

There you have it, we have done it!! congrats.
