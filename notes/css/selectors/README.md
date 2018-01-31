# Selectors

[CSS3 spec - selectors](https://www.w3.org/TR/css3-selectors/)  
[MDN - CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

**[Basic selectors:](basic-selectors.md)**
* **[`*`](examples/any.md)**: Matches any element
* **[`E`](examples/element.md)**: Matches a specified element
* **[`.class`](examples/class.md)**: Matches an element with a specified class attribute
* **[`#id`](examples/id.md)**: Matches an element with a specified id attribute
* **[`E[attribute]`](examples/attribute.md)**: Matches an element with a specified attribute
* **[`E[attribute=value]`](examples/attribute-equal.md)**: Matches an element with a specific equal attribute / value pair
* **[`E[attribute~=value]`](examples/attribute-whitespace-separated.md)**: Matches an element with an attribute that includes whitespace-seperated word equal to the value
* **[`E[attribute|=value]`](examples/attribute-hyphen-separated.md)**: Matches an element with an attribute that includes hyphen-seperated list of values starting with the value
* **[`E[attribute^=value]`](examples/attribute-starts-with.md)**: Matches an element with an attribute where the value starts with exactly the value
* **[`E[attribute$=value]`](examples/attribute-ends-with.md)**: Matches an element with an attribute where the value ends with exactly the value
* **[`E[attribute*=value]`](examples/attribute-contains.md)**: Matches an element with an attribute that contains the value somewhere.

**[Combinators:](combinators.md)**
* **[`E F`](examples/descendant.md)**: Matches the descendant `F` of element `E`
* **[`E > F`](examples/child.md)**: Matches the child `F` of element `E`
* **[`E + F`](examples/adjacent-sibling.md)**: Matches the adjacent sibling `F` of element `E`
* **[`E ~ F`](examples/general-sibling.md)**: Matches the general sibling `F` of element `E`

**[Pseudo classes:](pseudo-classes.md)**
* **[`:active`](examples/active.md)**: element that is being activated by the user
* **[`:checked`](examples/checked.md)**: a user interface element E which is checked (for instance a radio-button or checkbox) 
* **[`:disabled`](examples/disabled.md)**: a user interface element E which is disabled
* **[`:empty`](examples/empty.md)**:  an E element that has no children (including text nodes) 
* **[`:enabled`](examples/enabled.md)**: a user interface element E which is enabled
* **[`:first-child`](examples/first-child.md)**: an E element, first-child of its parent 
* **[`:first-of-type`](examples/first-of-type.md)**: an E element, first sibling of its type
* **[`:focus`](examples/focus.md)**: element that has focus
* **[`:hover`](examples/hover.md)**: element that is being hovered over by the user 
* **[`:in-range`](examples/in-range.md)**: element whose current value is within the range limits specified by the min and max attributes 
* **[`:indeterminate`](examples/indeterminate.md)**:  element whose state is indeterminate
* **[`:invalid`](examples/invalid.md)**: element whose contents fail to validate
* **[`:lang(nl)`](examples/lang.md)**: an element of type E in language `nl`
* **[`:last-child`](examples/last-child.md)**: an E element, last child of its parent 
* **[`:last-of-type`](examples/last-of-type.md)**: an E element, last sibling of its type
* **[`:link`](examples/link.md)**: element that has not yet been visited
* **[`:not()`](examples/not.md)**: an E element that does not match a simple selector
* **[`:nth-child(n)`](examples/nth-child.md)**: an E element, the n-th child of its parent 
* **[`:nth-last-child(n)`](examples/nth-last-child.md)**: an E element, the n-th child of its parent, counting from the last one
* **[`:nth-last-of-type()`](examples/nth-last-of-type.md)**: an E element, the n-th sibling of its type
* **[`:nth-of-type(n)`](examples/nth-of-type.md)**: an E element, the n-th sibling of its type, counting from the last one
* **[`:only-child`](examples/only-child.md)**: an E element, only child of its parent 
* **[`:only-of-type`](examples/only-of-type.md)**: an E element, only sibling of its type
* **[`:optional`](examples/optional.md)**: element that does not have the required attribute set on it 
* **[`:out-of-range`](examples/out-of-range.md)**: element whose current value is outside the range limits specified by the min and max attributes 
* **[`:read-only`](examples/read-only.md)**: element (such as a locked text input) that is not editable by the user 
* **[`:read-write`](examples/read-write.md)**: element (such as a text input) that is editable by the user 
* **[`:required`](examples/required.md)**: element that has the required attribute set on it 
* **[`:root`](examples/root.md)**: an E element, root of the document 
* **[`:target`](examples/target.md)**: an E element being the target of the referring URI 
* **[`:valid`](examples/valid.md)**: element whose contents validate successfully 
* **[`:visited`](examples/visited.md)**: element that has been visited

**[Pseudo elements:](pseudo-elements.md)**
* **[`::after`](examples/after.md)**: Generates an pseudo element after the elements content
* **[`::before`](examples/before.md)**: Generates an pseudo element before the elements content
* **[`::first-letter`](examples/first-letter.md)**: Matches the first formatted letter of an element
* **[`::first-line`](examples/first-line.md)**: Matches the first formatted line of an element
* **[`::selection`](examples/selection.md)**: Applies styles to the portion of a document that has been highlighted by the user
