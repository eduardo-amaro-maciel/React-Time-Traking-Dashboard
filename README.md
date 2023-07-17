# Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

<table>
<tr>
<td>
  <img src="./src/assets/img/screenshot- desktop.png" width="500" />
</td>
<td>
  <img src="./src/assets/img/screenshot mobile.png"  width="200"  />
  </td>
  </tr>
</table>

## My process

### Built with

- React - TS
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- I first created this project in Vanilla JS, then rewrote the code in React. I havn't made a react project for a while so this small project was a good one for brushing of the dust.
- I gained practice with overlaying elements with CSS Grid and making the dashboard responsive was fairly simple due to the nature of the design.
- I also got a chance to play with json data and display the data dynamically which is always fun.
- I encountered a bug with the button components, the buttons where no longer clickable after i had overlapped the grid elements. After some googling I realised that because I had set the z-index to a negative value, so the links were no longer clickable. I corrected the error by simply increasing the the overlaying elements z-index to 2 and the underlying elements z-index to 1.
- I copied and pasted the CSS from my previous implementation of this project in vanilla JS. I tried to split the CSS into their relevant components. Everything works, but I'm not sure if I'm following best practices. I would like to explore this further

### Continued development

- I used this small project as a stepping stone for a more complicated project I wish to tackle next. Some of the challenges faced in this project are smaller versions of the challenges I will face in that project. e.g. displaying dynamic data and responding to click events etc.
  -I tried to implement Framer Motion but had some trouble, so I would like to return to this, but probably implement in my next project instead
