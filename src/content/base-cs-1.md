---
title: Notes on the Basecs Podcast Episode 1 (Bits, Binary, and Bytes)
date: 2017-01-01T23:46:37.121Z
author: [Madison]
template: "post"
draft: false
image: img/basecs.png
tags:
  - Coding
---

The [basecs podcast](https://podcasts.apple.com/us/podcast/base-cs-podcast/id1304168963?mt=2) is about computer science basics and based on Vaidehi Joshi's base.cs blog series. It's a fun series to listen to if you're interested in computer science and it's friendly to beginners.

When you hear about bits or bytes you hear people say, "It's all just ones and zeros." But what does that even mean?

At the end of the day, everything you interact with on your machine runs on binary. All of the things--a website, a graphical user interface, an app, everything--they're all abstractions built on something that your computer understands as ones and zeros.

If you look into the history of computing though, this makes sense.

Circuits and transistors (what we think of as hardware these days) worked, we see that there were basically two states you could ever have: an on state and an off state. Circuits and transistors let you transmit electrical signals in different ways, usually from an origin to a destination point. You conduct these electrical waves by having parts of this transistor be on or off. You can think of a transistor as like a room where you have a bunch of switches (like the switches you use to turn your lights on). Then if you need to send an electrical signal from one point to another, you can say, ok, if this switch is on, then an electrical signal can pass through here--but if it's off, then it can't. Then you're controlling the flow of data and information.

Circuits and transistors at their core were on and off switches, and a nice way of representing on and off is saying, "Okay, if it's off, it's zero. If it is on, it is 1." If you work with a lot of lower-level languages in programming, you see that zero is used to mean falsey things. (That's not a typo, falsey instead of false is a thing). And "1" is on, or truthy. We use binary to represent these things. It comes down to the hardware that all of this was based on.

## But how on earth can just two states--true or false, one or zero--make all of these incredible things on the internet?

Think of a sentence. You have words, you have a capital letter, you have spaces, you have punctuation... what you're doing is just stringing together a bunch of characters. A period is a character, an exclamation point is a character, etc. Now just break this sentence down into one character. But how do you take a character and tell ac computer "Hey. I need a Capital 'A' here." You have to be able to translate that A into some sort of representation into one or zero. But one or zero are just two choices, right? You can't represent everything with just one or zero. So we don't. We represent things not just as one or zero, but as combinations of one and zero.

So we look at bits and bytes and we're like, "Oh that's binary, right?" but really, bits and bytes are parts of how binary gets built up and how it is used. Binary is the counting system. Bits and bytes are how things that seem as simple as the capital letter 'A' can actually be representing into many different zeros and ones together, in a very specific way, so that the computer knows exactly what this capital letter 'A' is.

There's one rule to keep in mind. The counting system we're dealing with has a base and this tells you how many possible digitals you can have per place value. Binary represents two. Two different things. So we can call binary 'base two'. What that means for every digit in binary, you can only have a 1 there, or a 0 there. That's it. It's a number system where you are limited to only two possible values in any digit.

## So...How do you count?

You have zero and then you have one. Then you do the same thing you do when you count in our decimal counting system.

The rule is reset the first digit, and then you add another digit. Think of how you'd do this with your 9: you reset 9 to zero, and on the left hand side, you add 1. Now apply this in the same way to our 1. We reset 1 to 0, and then we add a 1 on the left. So what is 2 in binary? It's 1 and 0, or 10. Now you have 2 (10), so how do we get to 3? Now you can think, have I used all of the possible digits for the first place value? You haven't because you've only used 0. So you can increment that to 1. So 10 becomes 11. After that, you have 11 as 3. Again, you reset the digits (so we get 00) and then you add a digit, 1. 4 is 11.

This is how we can count in binary.

## So what's a bit? 

A bit is just the digit we were talking about. When you run out of zero and one, you need to increment. Each digit we talk about is called a binary digit--which is a bit. A bit is just one digit. One bit on its own can store 2 possible values, and what makes binary powerful is the fact that a certain number of bits combined together can actually increase how many things you can store. So 8 binary digits (8 bits) makes one byte of information.

We usually think of them as megabytes or gigabytes etc. All of these are just larger versions of bytes of info, which is just 8 bits. What makes a byte so storage and memory efficient is that if you think about how one bit can contain two possible values, then we're going up exponentially with each digit we add. If 8 bits make a byte, that means we have 2 to the power of 8 possible values and permutations we can store in a byte. The reason it's 2 to the power of 8? Every single digit can have two values (zero and one) and there are 8 digits we can fill up. So we have 2 to the power of 8 permutations since there are so many possibilities--how many different ways can you put zeros and ones in the 8 digits we can fill up?

256 permutations. So one byte of information can store 256 different versions of zeros and ones in a certain order together.

When we talk about the number of different representations of a single byte, we have 256 options. 256 types of things a byte could represent. 256 possible different versions of how zeros and ones can be put together to create some sort of piece of data. Think of exponents: 2 to the power of 0 is 1, 2 to the power of 2 is 4, and 2 to the power of 3 is 8. What you're saying is, when I have only 2 to the power of 1, I have just 2 possible things I can represent. You have 1 digit and how many things can you represent? 2, because this could be either a 0 or a 1. When you have 2 digits, you can represent 4 possible permutations, because each place has 2 options.

Does each byte always represent a number, a letter, or what?

You can store anything in a byte, but for the most part, a single byte contains a character. 

Then you start getting into an image or a page of text. If one character is represented by one byte, then you can imagine how much you'd need to represent a sentence.Fun fact: 8 bits are 1 byte, but if you have 4 bits, (half a byte) it's called 1 nimble. Pretty adorable term.