# <p align="center">On the third day of the block 3 we are going to learn how alter the layout of your HTML page with CSS and also how to use selectors to chose exactly what element you want to change</p>

## <strong>You are going to be able to:</strong> :muscle:
* Learn how the CSS Box model Works and how HTML elements interact visualy between eachother.
* Position elements on your page using different methods.
* Combine and group CSS selector to create well defined rules.

## <strong>Why is this important ?</strong> :thinking:
Beyond sizes and styles, CSS is also responsible for your page layout. Knowing how to create specific rules that select the elements properly and how to position them on your page enables you to organize information as you like.

Selectors and pseudo classes enables you to add conditions to your page style.

## <strong>Introduction to Box Model:</strong> :bulb:
First things first, all HTML elements are rendered as boxes by the browser, that's why we use the term 'Box Model'.

The 'Box Model' is composed by:

### <strong>Width and Height:</strong> :triangular_ruler:
Self explanatory, one thing to note, This does not consider border, margin or padding that we will see next.

### <strong>Padding:</strong>
This is the space between the Box border and its contents.

### <strong>Border:</strong>
Is the Box border, pretty simple. But there's some properties we should take note:
<strong>border-width:</strong> Can control the border thickness. Default value is medium.
<strong>border-style:</strong> This property controls the style of the border, the default value is none and that's why you can't see the box borders.
<strong>border-color:</strong> Default value is currentcolor meaning the same color as the element.

### <strong>Margin:</strong>
The margin functions as the space between the border and the outside content. This is used mostly to spaces boxes between themselfs.

## <strong>Element Positioning:</strong> :keyboard:
Changing the position of elements can open countless possibilities for our page layout. Using the tolls at our disposal.<a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/position">With this values</a> We will be much more control as to where our boxes will be in our page. We can also use <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/float">Float</a> To remove an element from its originl flow in the page. And last but not least <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Positioning/Understanding_z_index">z-index</a> To control display layers.

## <strong>Pseudo classes:</strong>
<a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes">Pseudo classes</a> can enable you to write less code by grouping styles. Doing this we can correct quickly the style of the page. Imagine that you have to toggle dark-mode on your page. Making all backgrounds dark and texts bright. You would have to change 1 by 1. But now, you can just group selectors that will have the same changes !!! A simple <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/:hover">hover</a> can add an entirely different experience to the user !!.

## <strong>CSS Combinator:</strong>
You can also select a <a target="_blank" href="https://www.w3schools.com/css/css_combinators.asp">child element from the father element</a>, Example:
<strong>fatherElement childElement {}</strong>


