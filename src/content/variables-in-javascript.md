---
title: JavaScript Variables – A Beginner's Guide to var, const, and let
date: 2020-11-30T22:40:32.169Z
layout: post
author: [Madison]
draft: false
image: img/jsvars.jpg
tags: ["Coding", "JavaScript", "Tutorials"]
---

Variables are a fundamental concept in any programming language. In JavaScript, you can declare variables by using the keywords var, const, or let.

In this article, you’ll learn why we use variables, how to use them, and the differences between const, let and var.

What are variables used for in JavaScript?
In the context of coding, data is information that we use in our computer programs. For example, your Twitter username is a piece of data.

Much of programming is about manipulating or displaying data. In order to do this, programmers need a way of storing and keeping track of data. Let's demonstrate this with an example.

First we’ll open up our JavaScript console. To launch your JavaScript console on Chrome, you can use the shortcut `Ctrl + Shift + J` on Windows and Linux. For Mac, use `Cmd + Option + J`.

Once the console has launched, think of your dog or cat’s current age (or any similar number if you don't have pets) and enter it into the console.

```js
4
```
Now what if we want to refer to that number again? We’ll have to type it out for a second time.

We need a way to refer to this piece of data so we can reuse it throughout our program.

# Introducing variables in JavaScript
A helpful analogy is to think of variables as labels for our values. Think of a container of blueberries with a label on it marked blueberries. In this example, the variable, blueberries, points to a value, which is the blueberries themselves.

Let's declare a variable, age, and use the assignment operator (the equals sign) to assign our value, 4, to this variable. We’ll use the var keyword.

```js
var age = 4
```
Variables are how programmers give a name to a value so that we can reuse it, update it, or simply keep track of it. Variables can be used to store any JavaScript type.

Now that we’ve assigned this value to the variable age, we can refer back to this value later. If you now type in the variable age in your console, you’ll have the value of 4 returned back to you.

# How to use the var keyword in JavaScript
Keywords in JavaScript are reserved words. When you use the var keyword, you’re telling JavaScript you’ll be declaring a variable.

When using the var keyword, variables can be reassigned. We’ll demonstrate this by first declaring a new variable, name, and assigning it to the value of Madison.

```js
var name = 'Madison'
```

Next, we’ll reassign this variable to point to the value of a different name, Ben.

```js
name = 'Ben'
```
Now if you run console.log(name) you’ll get the output of `Ben`.

When using the var keyword, variables can also be declared with no initial value.

```js
var year
```
Here, we’ve declared a variable year but it does not point to any value. Later on if we want it to point to a value, we can use the assignment operator to do so.

```js
Year = 2020
```

Now our variable year will point to the value of `2020`.

When JavaScript was first created, the only way to declare a variable was with the var keyword.

In recent updates to JavaScript (ECMAScript2015), const and let were created as other keywords to declared variables.

To explain why they were needed, we’ll look at problems with the var keyword. In order to look at these problems, we’ll learn about what scope is.

## What is scope?
Scope refers to where in our code variables are available for use. When a variable is globally scoped, that means it is available anywhere in your program. Let’s look at an example.

Take the following code and enter it into your console.

```js
var name = ‘Bob’
function printName() {
    console.log(name)
}
printName()
```
Here we’ve created and called a function, printName, that will print the value of the name var, Madison. You’ll see this printed in your console.

Because our var was created outside of the function, it is globally scoped. This means that it is available anywhere in your code, including inside of any function. This is why our function, printName, has access to the name var.

Let’s now create a variable that is function-scoped. This means that the variable is only accessible inside the function it was created in. This next example will be very similar to the code above, but with a different placement of the variable.

```js
function printYear() {
 var year = 2020
}
console.log(year)
```
Now in our console we’ll get an error: `year is not defined`. This is because the var year is function-scoped. That is, it only exists inside of the function it was created in. We don’t have access to it outside of the function, which is where we’re trying to access it when we run our console.log.

Function-scoped variables are helpful to programmers because we often want to create variables that are only useful or needed inside a certain function. Creating global variables can also lead to errors or mistakes.

Now that we have a basic understanding of scope, we can return to our discussion of problems with the var keyword.

# Problems with the var keyword in JavaScript
Let's look at another example.

We'll create a variable, `age`. Next we’ll write an if statement that checks if `age` has a value, and if it does, returns a `console.log` of the number that is double that age.

This is a simplified example, but we’ll first check if age has a value because we want to make sure we are adding to a valid value.

```js
var age = 27
If (age) {
 var doubleAge = age + age
 console.log(`Double your current age is ${yearPlusTwenty}`)
}
```
Now in our console, you’ll see Double your current age is `47`.

Our variable, doubleAge, is now a global variable. If you enter doubleAge into your console, you’ll see that you have access to it.

```js
doubleAge
47
```
As previously discussed, variables created with the var keyword are function-scoped. Function-scoped variables only exist inside of the function they were created in.

But since the doubleAge variable is not inside a function, that means it has been scoped globally. That is, the doubleAge variable is now available anywhere in our code.

The problem is, doubleAge is just a variable we used once inside of our if statement, and we don’t necessarily need it available everywhere in our code. It has “leaked” outside of the if statement it was created in, even though we didn’t need it to.

```js
var age = 27
if (age) {
 //We need our doubleAge var only in this block of code in between our curley brackets. 
    var doubleAge = age + age
    console.log(`Double your current age is ${yearPlusTwenty}`)
    
}

doubleAge
47
//our doubleAge var is available outside of these curly brackets, on the global sbope.
```
It would be great if we had a way of creating a variable that *only* existed inside the if statement it was created in. In other words, the block of code that exists in between the curly brackets.
```js
var age = 27
If (age) {
 //We want our variable to only exist here, where we will use it
 var doubleAge = age + age
 console.log(`Double your current age is ${yearPlusTwenty}`)
}
```
To help fix this problem, the const and let keywords were introduced in JavaScript.

# How to use the const keyword in JavaScript
const works similarly to var, but with a few big differences.

First, const is *block-scoped*, whereas var is *function-scoped*.

What is a **block**?

A block refers to any space between an opening and closing bracket. This might seem confusing at first. Let's write out our previous example, but this time using const instead of let when declaring our doubleAge variable.
```js
var age = 27
If (age) {
 const doubleAge = age + age
 console.log(`Double your current age is ${yearPlusTwenty}`)
}
```
Now, type `doubleAge` into your console and hit enter. You should get an error, `doubleAge is not defined`. This is because const is block-scoped: it only exists in the block it was defined.

The  `doubleAge` variable is ‘trapped’ inside the two curly brackets it was defined in. Code that is also inside those brackets can access doubleAge, but no code outside of it can.

By using const instead of var, our previous problem is fixed. Our doubleAge var is no longer “leaking” into our global scope unnecessarily. Instead, it only exists inside of the block it was created in.

How do block-scoped variables work within the context of functions? To learn about this, let's create and then call a function, returnX.
```js
function returnX() {
 const x = 1
 return x
}
returnX()
```
By calling this function returnX, we can see that our function returns the value of x, which is 1.

If we next type in x, we’ll get back `referenceError: x is not defined`. This is because functions are also considered blocks, so our const x will exist only within the function.

The next thing to know about const is that it can only ever be declared once. Type this code into your console:
```js
const y = 1
const y = 2
```
You should see an error,  Identifier 'x' has already been declared.

This is a difference between var and const. While const will give you an error, letting you know that you’ve already declared this variable, the var keyword won’t.
```js
var x = 1
var x = 2
```
The variable x will point to the value of `2` without an error. This can cause bugs for you as a programmer, as perhaps you did not mean to reassign your value to a new variable. Thus, using const can help you as you’ll receive an error if you accidentally try to reassign a variable.

This is a strength of the const keyword that was introduced as an updated and better way of creating variables in JavaScript. However, what about the times when you do want to update your variable?

Let's look at an example that shows why we would want to do this.

Let's declare a variable, adult, and set it to false. We’ll also create an age variable and set it to 20.
```js
const adult = false
const age = 20.
```

Say we want to check a user’s age, and set our adult variable to false if age is over 18. We can write an if statement to do this.
```js
if (age > 18) {
 adult = true   
}
```
What happens when we run this code?

Here we’ll see `Error: Assignment to constant variable`.

This is because, in accordance with the rules of const, we cannot redeclare this variable. That is, our variable age is already pointing to the value of true, and we cannot now point it to something else.  

If we print out adult again, we can see that it has stayed the same and still holds the value of false.

We cannot reassign our age variable, and const is working as expected. However, what if we do want to reassign this variable?

Often times programmers will want to be able to redeclare their variables.

This is where our third keyword, let, comes in.

# How to use the let keyword in JavaScript
First let’s go over how let is similar to const.

Let, like const, is *block-scoped*. If you replaced const with let in our above doubleAge example, it would work the same.

However, let differs from const in a fundament way. Variables declared with the let keyword can be redeclared, while variables created with the const keyword cannot. Let’s go over an example.

Using our same example above, replace const with let. We’ll keep our age variable as a const with the value of 20.
```js
let adult = false
const age = 20
if (age > 18) {
    adult = true
}
```
Now if we type out adult, instead of getting an error as we previously did, we’ll see the output of true.

By using the let keyword, we’ve updated our variable to point to the value of true as we wanted to. Sometimes in programming we’ll want to update our variable depending on certain data that we receive. We can use let to do this.

# Wrapping up
In summary, we’ve learned that variables are used to keep track of and reuse data in our computer programs. Scope refers to where in our code variables are available for use.

Variables can be declared using var, const, or let. Var is function-scoped, while const and let are block-scoped. Const variables cannot be reassigned, while let variables can be.  

Var, const, and let can be confusing at first. It can help to read different tutorials on them, as well as test out your own code in different ways to solidify your understanding.

Having a strong foundation of var, const, and let will help you not just at the start of your JavaScript career but throughout its entirety.