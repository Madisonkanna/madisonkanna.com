---
layout: post
title: "Notes on a React Tutorial by Kent C. Dodds"
date: 2018-12-01T22:40:32.169Z
author: [Madison]
draft: false
image: img/computer.jpg
tags:
  - "Coding"
---

Kent C. Dodds has a [React beginners tutorial](
https://egghead.io/lessons/react-introduction-to-the-beginner-s-guide-to-reactjs) that starts with the absolute basics of React and it's fantastic. It's a free course so I can put all my notes out here on my blog (his advanced course is a paid course and it looks excellent although I haven't done it yet). My notes from the start of his tutorial concering JSX with a few of my additional thoughts:

We start with seeing exactly what React.createElement is doing. HTML element is an individual component of an HTML document or web page, once this has been parsed into the Document Object Model. HTML is composed of a tree of HTML nodes, for example text nodes.

All HTML elements are HTML nodes. If you don't know, here is a bit more information on elements: HTML documents are made up of HTML elements. An element represents the root of an HTML document. To create an element we can use createElement:

```jsx

const element = React.createElement('div', {className: 'Container', children:'Hello World', 'Goodbye world'})
```

Children is an array. Your props are your children (an array.) Dodds explains it simply: "React Create Element API is as simple as the element that you want to create and then an object that has all of the props that you want to have applied. As a convenience, you can provide the children as any number of arguments after the props argument as well.

"So, we can write our entire app using React.createElement. But we won't. Why? It's not very ergonomic (it's not as productive to write our code this way) so the React team created JSX. JSX looks similar to HTML and behaves in similar ways. 

Lets convert our above const element to JSX:

```jsx
const element = <div className="container">Hello World</div>
```

We get an error. A syntax error. Because this is JSX and not JavaScript syntax, it needs to be transpiled into this React create element call. We use Babel to do this. Dodds uses a Babel script tag to do this. Then it is working.

Next, Dodds asks: what if we wanted to take the hello world and externalize it to a variable?

```jsx
cost content = 'Hello World'
```

Then we replace hello world with an interpolation. What is an interpolation? It is the insertion of something of a different nature into something else.

```jsx
const element = <div className="container">{content}</div>
```

When you do this, you are leaving JSX world and going back into JavaScript world. This interpolation is denoted by curly braces. YOu can do any JS you want as long as it evaluates to an expression. Wait, what's a JS expression again?

An expression is any valid unit of code that resolves to a value.

You can do this for any props you pass to components. First, Dodds writes:

```jsx
const myClassName = 'container'
```

And then he replaces the container div with

```jsx
<div className={className}>
```

As Dodds explains, this gives us a lot of power and flexibily as our view logic is in our markup. Lastly, what's common to do with JSX is create a props object.

```jsx
const props = { className: 'container', children: 'Hello World', }
```

Now we can take our original const element and make it a self-closing React element. Now we can spread our props across a div like this:

```jsx
<div {...props />
```

These are some of the basics of what JSX is.