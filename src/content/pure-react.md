---
title: 3 Things I Learned From David Ceddia's Pure React Course
layout: post
author: [Madison]
date: 2020-07-17T29:40:32.169Z
categories: ["Personal"]
image: img/purereact.png
draft: true
tags: ["Coding"]
---

The "Magic" behind how hooks work.
How hooks actually work under the hood.

Before React calls this component, it creates an array of hooks that lives alongisde this commponent instance. React keeps an index into this array. It starts of at 0. Every time you call a hook, it occupies the first slot with whatever you passed in as the default. In this case it's at 300. So the call to useState occupies the first slot with 300 in it. Then the index moves to the next slot, looking for the next hook. There is no next hook, but we have setPeople.

We add people + 1. That increments the 300 to 301. But then the index resets to zero, and React re-renders that component. 

This time through, the 1st useState call is matched up with the first slot in the array, which has a value of 301! Instead of initializing it to 300, it's going to pull out that 301 and put it in the variable `people`. Then the index moves down.


2. Rules of hooks


Call order must be stable.
No loops, conditionals, nested functions.

2. Only call from function comonents. No classes.

3. Names should start with the word 'use'.