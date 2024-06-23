# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop Design
![](./screenshot-desktop.png)

#### Mobile Design
![](./screenshot-mobile.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project, I learned to apply the fill property to SVGs and encountered some challenges. The fill property allows us to change the color of an SVG path or element, but there are numerous ways it can be done incorrectly.

So, if the CSS SVG fill property is not working, one reason could be the use of external SVGs. To address this, follow these steps:

Use inline SVGs instead of external files.

For example, consider an external SVG file named apple.svg. If you include it in your HTML using the <img> tag like this:

```HTML
  <body>
    <img id="mySVG" src="apple.svg" alt="My Happy SVG" />
  </body>

```
```CSS
  /*  Now when we try to apply the fill CSS style, it will NOT work. */

  
#mySVG {
  fill:red;
}
```
it will NOT work.

To ensure the fill property works, include the SVG inline within your HTML:
```HTML

<body>
  <svg id="mySVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M10 10 H 90 V 90 H 10 Z" />
  </svg>
</body>
```
Now, the fill CSS style will work as expected:
```CSS
#mySVG path {
  fill: red;
}
```


## Author

- Website - [Ali Haider](https://www.your-site.com)
- Frontend Mentor - [@alihaider1204](https://www.frontendmentor.io/profile/@alihaider1204)
- Linkedin - [@alihaider1204](https://www.linkedin.com/in/alihaider1204/)
