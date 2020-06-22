---
layout: post
title: Functions Are Fundamental
image: img/blocks.jpeg
author: [Madison]
date: 2019-12-01T10:00:00.000Z
tags:
  - Coding
---
*Photo by Esther Jiao on Unsplash.*

These are my notes from *Functions Are Fundamental,* chapter 3 of *[Secrets Of The JavaScript Ninja](https://www.manning.com/books/secrets-of-the-javascript-ninja),* a particularly excellent book on intermediate JavaScript. 

### The functional nature of JavaScript

Understanding functions in JavaScript is the single most important weapon you can wield. Functions in JS have a functional nature, which means we can use functions in JavaScript in powerful ways. 

Functions in JavaScript are first-class objects, which means they enjoy certain capabilities:

1) **They can be created via literals.**
2) **They can be assigned to variables, array entries, and properties of other objects.**
3) **They can be passed as arguments to functions.**
4) **They can be returned as values from functions.**
5) **They can possess properties that can be dynamically created and assigned.**

Functions also have their own special capability in that they can be *invoked.* That invocation is frequently discharged in an asynchronous manner, so let's talk about why.

## The browser event loop.

If you've programmed in GUI desktop applications, you know most are written in a similar fashion:

1) **Set up the user interface.**
2) **Enter a loop waiting for the events to occur.**
3) **Invoke handlers (also called listeners) for those events.**

Programming for the browser is the same, except our code doesn't run the event loop and dispatching events: the browser handles that for us. But we are responsible for setting up the handlers for various events that can occur in the browser. These events get placed in an event queue (a FIFO list) and the browser dispatches these events by invoking any handlers that have been established for them. These events can happen at unpredictable times and in an unpredictable manner, so we say the handling of the events and the invocation of their handling functions is asynchronous. 

The majority of our code as JS developers executes as a result of events such as browser events (when a page finishes loading), network events (such as responses to an Ajax request), user events such as mouse clicks, and timer events such as when a timeout expires or when an interval fires. 

The browser event loop is *single-threaded.* Every event placed in the event queue is handled in the order that it's placed onto the queue. This is a FIFO list (first in, first out.) Imagine a single line at a bank where everyone has to wait their turn to be "processed" by the tellers. But with JavaScript, there is only one teller window open. Customers get processed one at a time, as their turns come. The first customer who came will be the first to get help from the teller. Note: the browser mechanism that puts the events onto the queue is external to this event loop model. 

When you wave your mouse around on a page, the browser will detect the motions and push a bunch of mousemove events onto the event queue. The event loop eventually comes across these events and will trigger any handlers established for that type of event. These event handlers are an example of a concept known as *callback functions.*

## The callback concept

Whenever we set up a function to be called at a later time, whether by the browser or other code, we're setting up a callback. The term stems from the fact that we establish a function that some other code will later "call back" into at an appropriate point of execution. Here's an example of a function:

```javascript
function useless(callback) {
  return callback();
}
```

This function is useless but demonstrates the ability to pass a function as an argument to another function, and to subsequently invoke that function through the passed parameter. 

In JavaScript, we can sort values into ascending order using the `sort()` method.

But what if we want to sort a bunch of values into descending order? We can do this:

```javascript
const values = [213, 57, 10, 9, 195];
values.sort(function(value1, value2) { return value2 - value1; })

```

In many other non-functional languages to sort values into descending order, we might have to create interfaces or objects to sort these values into descending order. But with JavaScript, we just declare an inline anonymous function that we directly pass to the `sort()` method of the array. This code is concise and takes advantage of JS's functional capabilities. One of the reasons why functional concepts and functions are important in JS is that the function is the *primary modular unit of execution.* 

JS allows us to create a function as a standalone entity, as we did here, that we can pass as an argument to a method, just like any other object type, which can accept it as a parameter. JS allows us to create functions *anywhere in the code where an expression can appear.* This can make our code easier to understand (as our function declarations can be placed near where they're actually used) and this can eliminate the need to pollute the global namespace with unnecessary names when a function won't be referenced from multiple places within the code. 

JavaScript's functional nature makes dealing with the browser event loop and event handlers such as callbacks easier. 

#Function declarations

JS functions are declared using a *function literal* that creates a function value in the same way that a numeric literal creates a numeric value. 

Because functions are first-class objects as we've seen, that means they're values that can be used in the language just like other values such as strings and numbers.

Function literals are composed of 4 parts:

1) **The `function` keyword.**
2) **An *optional* name.**
3) **A comma-separated list of parameter names enclosed in parentheses.**
4) **The body of the function, as a series of JS statements enclosed in braces. The body can be empty, but the braces must be present.**
*Note: The above applies to functions in JS and not arrow functions, which have their own set of rules.*

When a function is named, that name is valid throughout the scope within which the function is declared. If a named function is declared at the top level, a property using the function name is created on `window` that references the function. 

**Note:** One of my readers [James](http://www.hycner.com/) pointed out that window is not always the global scope  (global in Node, this in V8's shell, etc). He also told me about [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), that is part of ES2020 and solves this problem by being a pointer to the relative environment's global scope. 

All functions have a property named `name` that stores the function's name as a string. Functions with no name still possess this property, set to the empty string. 

Let's go over some examples demonstrating what we've described.

We can open our console and create a simple function:

```javascript
function isNimble() { return true; }
```

Above we declared a named function and the name is available throughout the current scope, as well as implicitly added as a property of `window`. The way `isNimble` was declared is likely one of the most common declaration styles that most devs have seen, at least, at the time this book was printed.

Next if we add ```window.isNimble``` to our console we can see that a property using the function name has been created on `window` that references the function.

We can also create an anonymous function that's assigned to the variable `canFly`. The variable is a `window` property, and the name property of the function is empty. 

```javascript
var canFly = function() {
  return true;
};
```

Because of JavaScript's functional nature, the function can be invoked through this reference as `canFly`. It is *almost* functionally equivalent to declaring a named function named "canFly", but not quite. A big difference is that the function's name property is "", and not "canFly". 

**Note:**  [James](http://www.hycner.com/) also pointed out that while this was true in the past, most modern browsers now set the function's name to be the name of the variable it was assigned to. Being available on window can also depend on if it was declared using var or let/const, and whether or not it resides in a module. 

We can also define an inner function inside of an outer function:

```javascript
function outer() {
  function inner() {}

}

outer();
```

If we console `outer`, we see that it is available to us in the global scope. Yet if we do the same with `inner` we see that it is undefined, because its scope is within the outer function and not the global scope. We can also note that the `inner` function can be referenced inside of the outer function before and after its declaration.

These concepts lay down the foundations for the naming, flow and structure that functional code provides, and they start to establish a framework through which we employ functional programming to our benefit. 
 