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