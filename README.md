# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- CSS Grid
- Flexbox
- Mobile-first workflow
- Responsive images with `<picture>` element
- JavaScript for mobile navigation toggle

### What I learned

This project was a great opportunity to practice building a responsive landing page using Tailwind CSS. Key takeaways include:

1. **Tailwind CSS utility classes** - Using utility-first CSS to rapidly build out the layout without writing custom CSS for most styling needs. Tailwind's responsive prefixes (`md:`, `lg:`) made it straightforward to handle different screen sizes.

2. **Responsive images** - Using the `<picture>` element with `<source>` tags to serve different image sizes based on viewport width, ensuring optimal loading on both mobile and desktop.

3. **CSS Grid for layout** - Using Tailwind's grid utilities to create the two-column layouts that reflow to single column on mobile.

4. **Mobile navigation** - Implementing a hamburger menu with JavaScript that toggles visibility and closes when clicking outside or on a link.

5. **Custom utility classes** - Extending Tailwind with custom background image utilities that switch between mobile and desktop versions at the `md` breakpoint.

### Continued development

In future projects, I want to focus on:

- Adding more interactive elements with JavaScript
- Improving accessibility with ARIA attributes and keyboard navigation
- Exploring animation and transition effects

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - The official docs are excellent for learning utility classes and configuration.
- [MDN Web Docs - Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - Great reference for responsive images.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)