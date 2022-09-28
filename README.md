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
