---
title: Notes on the Basecs Podcast Episode 2 (What is Encoding?)
date: 2018-09-01T23:46:37.121Z
layout: post
draft: false
author: [Madison]
image: img/basecs.png
tags: ["Coding"]
---

The [basecs podcast](https://podcasts.apple.com/us/podcast/base-cs-podcast/id1304168963?mt=2) is about computer science basics and based on Vaidehi Joshi's base.cs blog series. I wrote up some notes on what I learned in episode 2 season 1.

## What is Encoding?

 In the first episode, Saron and Vaidehi go over binary. In this one, they go into what encoding is. One of the ways we can make sense of binary (but not actually have to say it all out--that's a ton of zeros and ones) is through encoding.You can think of it as the Rosetta Stone for computers, Vaidehi says. You have different types of Rosetta Stones that allow you to talk to a computer and say, "Okay, when I say something in binary--01001--I'm not going to actually say that, but that's what I'm really saying with this representation. Encoding schemes allow us to say things and write things and represent things that are computer friendly (because computers know how to translate between them) but are also human-friendly. We can't write in zeros and ones fluently, it would be incredibly easy for us to make mistakes. If we could write in zeros and ones just fine, we wouldn't even need encoding. But we need an easy way to talk to the computer, so we use encoding. Useful for websites in different languages. 
 
 As humans, we have different ways of communicating too--it's not just English. So if you want to represent a language on your website in Chinese, it's still just all zeros and ones to the computer--but you need a way of translating your English to Chinese, which is something else encoding schemes help us with.There are many different types of encoding--Unicode, Base64 to name a few. Base64 is well-known in terms of security, as it allows for many different permutations in one representation. There's also HTML encoding which allows you to represent HTML elements in an encoded fashion.
 
 ## Unicode is familiar to most of us. 
 
 Why? You may have seen it if you've ever copied and pasted a heart into your text editor, and it shows up as a Unicode heart. Take the ampersand, or "&". The Unicode version of an em dash--you're encouraged to use those and not the characters because you want to encode it so that if it's used in a different context, wherever it is read it is usable. You want to make these things encodable so that wherever its being read, it is actually readable. The Unicode version is more usable. 
 
 Think of a heart you see on a screen. How does encoding play into this? When we see this heart, this is the interpretative version of whatever was in the text. So what was in the text when it got to the browser was in Unicode in some way, and it was &ampheart or something like that--in order for the characters that you want to show on your website to be displayed as HTML, you have to  have a way to decode what it is that you're trying to put into the website. With your 'heart' you put on the website, you need to have a translatable version so that when you put it into the HTML it renders as a real thing. This is where Unicode comes in.
 
 The Unicode for a black heart is U+2665. When you give that to the browser, the browser says, "Oh, you want me to display a black heart! Ok, I'll show that to the screen." And then the user sees a picture of a black heart. That's how we're able to see emojis. So when you see wonky things showing up where your emoji should've been--something wasn't encoded correctly. A question mark might appear, as the computer is like, "What is this..."
 
 ## ASCII is another popular type of encoding. 
 
 It's the original Rosetta Stone. ASCII's original version had a way to encode 128 different values. ASCII was a way to encode between things like capital letters, lowercase letters, numbers, question marks, greater than signs, and it also had the ability to encode things like null, spaces and tabs. But it was limited because it really only accounted for English.  It had all the capital letters and lowercase letters of the English language.There's now an updated version of ASCII, after someone realized that with 128 possible values means you're using 7 bits out of 8 possible bits in a byte. Someone very smart in Europe realized, "If we're representing each of these characters with 8 digits, that is to say, 8 bits for 1 byte of information, why don't we just use that 8th digit? Then instead of 128 permutations ( in other words, 128 different things we could represent) we could increase this table and allow ourselves to represent 256 things. 
 
 This is how the ASCII extended table came to be. The table was doubled. So 1 bit has only 2 possible digits to it, but by just making use of one more digital in a byte--the number of things we can put into our encoding table really expanded. 
 
 Back to binary, which we mentioned in the start. Why isn't binary in the ASCII table? In reality, we don't normally need to convert something directly to binary. Our computer can do that. But if we want to represent something in a certain form, (like turning something into hex) we can use encoding, and then we can rely on the computer to convert this down into binary. 

