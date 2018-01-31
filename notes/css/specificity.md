# Specificity

[Specificity calculator](https://specificity.keegan.st/)

Specificity is calculated via the 0-0-0-0 system where:

```
                                     classes
  inline styles  -     id      -    attributes    -     elements
                                  pseudo-classes     pseudo-elements
----------------------------------------------------------------
        0        -      0      -        0         -        0       

```

## Adding styles via JavaScript

When you modify a style property on an element via JavaScript:
 
```js
myElement.style.backgroundColor = 'red';
```

It does so by applying an inline style to `myElement`. By definition, if you
apply styles via JavaScript, you'll get a 1-0-0-0 css specificity!

## Calculating specificity

From the diagram above, a selector is graded a weight. All parts of the selector 
get a weight and the weight of the selector is the sum of its parts. 

The selector `.class div::after`, consist out of three parts, `.class`, `div`
and `::after`. These three parts have the following weights respectively:
`0-0-1-0`, `0-0-0-1`, `0-0-0-1`. So the weight of the selector will be: 
`0-0-1-2`.

Combinators (`>`, `~`, `+`) do not add to the weight.

`:not()` does not have a weight, but the selector inside the `()` does.

```css
* {} /* 0-0-0-0 */

div {} /* 0-0-0-1 */
div span {} /* 0-0-0-2 */
div > span {} /* 0-0-0-2 */
div::after {} /* 0-0-0-2 */
div div::after {} /* 0-0-0-3 */

.class {} /* 0-0-1-0 */
[data-something] {} /* 0-0-1-0 */
.class::after {} /* 0-0-1-1 */
.class:focus {} /* 0-0-2-0 */
.class .other-class {} /* 0-0-2-0 */
div .class .other-class {} /* 0-0-2-1 */

#id {} /* 0-1-0-0 */
#id .class {} /* 0-1-1-0 */
#id .class div {} /* 0-1-1-1 */
#id .class:focus span::after {} /* 0-1-2-2 */

#id .class:not(.other-class) {} /* 0-1-2-0 */
```
