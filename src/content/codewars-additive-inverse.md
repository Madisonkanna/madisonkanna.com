---
title: How to Find the Additive Inverse of Each Number in JavaScript [CodeWars Challenge Solved]
date: 2021-01-13T22:40:32.169Z
layout: post
author: [Madison]
draft: false
image: img/numbers.jpg
tags: ["Coding", "JavaScript", "Tutorials"]
---

In this tutorial, we'll go over how to solve the CodeWars [invert values](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad) problem in JavaScript. You can also see this tutorial in [video]() format.

Instead of just diving into coding, we'll first read through the problem and make sure we understand it. Next we'll write pseudocode that we'll use as our guide to solve the problem. Lastly, we'll write the code itself. 

Let's get started!

## First, Read Through the Problem. 
Here's the problem description:

Given a set of numbers, return the additive inverse of each. Each positive becomes negative, and the negatives become positives.

You can assume that all values are integers. Do not mutate the input array/list.

Next, let's go over some questions we can ask ourselves to help us understand this problem.

## What are the inputs?

What are the possible inputs to this problem? What will this function receive?

The problem description says, 'given a set of numbers.' This tells us that our inputs are a set of numbers.
The problem also tells us to assume that all of these numbers will be integers.

Lastly, from the examples the problem gives, we can see that the set of numbers will be inside of an array:

Gathering all this information, we can say that our input will be an array of integers.

## What are the outputs?

Next we can ask ourselves, what are the outputs?  What will this function return?
We can see from the problem's example that our output is an array with each number changed to its additive inverse.  

Now we know the inputs and output. Next we'll go over a few examples of the problem.
What are some examples of the inputs and outputs?

We already have examples of the inputs and outputs from the problem above, but sometimes it can be helpful to write out a few on your own to get a better grasp of what the problem is asking you to do. Here's one example output and input:
```
//input
[2, 3, -4]
```

```
//output
[-2, -3, 4]
```
Now we know our inputs and outputs, and we have some examples of them.

Now we're ready to move on to writing our pseudocode, the final step before we code out our solution. pseudocode is a plain language description of the steps in an algorithm. Pseudocode will help us create a plan for how we’ll solve this challenge.

To write our pseudocode, let's first break the problem down step by step.

### How to Break the Problem Down
We need to be able to look at and do something to each number in the input array. We also want to return a new array with each number changed.

To do this, we can use the map method in JavaScript, which returns a new array populated with the results of calling a provided function on every element in the calling array.

We'll write this out in pseudocode as our step one:

`//step one: go through each number in the array using map method`

For each number in the array, we want to change it to its additive inverse. We need to understand what this means, so we'll clarify the definition of an additive inverse:

The additive inverse of a number is, simply put, the number wih its opposite sign. The additive inverse of a positive number negative, and the additive inverse of a negative number is positive. Another way of explaining it: the additive inverse of a number `a` is the number that, when added to `a`, yields zero. We can demonstrate this with some examples:

The additive inverse of −10 is +10, because −10 + 10 = 0

The additive inverse of −2 is +2, because −2 + 2 = 0

To get the additive inverse of a number, we can multiply it by -1. We can test this with some examples:

`10 * -1 = -10`

`-2 * -1 = 2`

We now know that if we multiply each number by -1, we'll get that number's additive inverse. We can add this to our pseudocode:

```
/* 
step one: go through each number in the array using the map method
step two: multiply each number by -1
*/
```

Lastly, we need to return our new array.

/* 
step one: go through each number in the array using the map method
step two: multiply each number by -1
step three: return new array
*/
## How to Code the Solution
Now that we've written our pseudocode, we can write the code to our solution using the pseudo code as our guide.

```javascript
function invert(array) {
   return array.map(num =>   {
     return num * -1
   })
}
```
We create our function, invert, that accepts an array of numbers. We map over our array, and for each number in it, we multiply it by -1. We return our new array.

When we test our solution on CodeWars, it works! We can see that it passes all tests. If we'd like to make our solution look more concise, we can write an implicit return:

```javascript
function invert(array) {
   return array.map(num => num * -1)
}
```

That's it! Now we've completed our invert values problem. We made sure we understood the problem first, wrote out our steps for completing the problem in pseudocode, and then coded the solution.

To check out the other solutions to this problem, you can see them [here](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions).