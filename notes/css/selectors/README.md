# Selectors

[CSS3 spec - selectors](https://www.w3.org/TR/css3-selectors/)

**[Basic selectors:](basic-selectors.md)**
* **`*`**: Matches [any element](examples/any.md)
* **`E`**: Matches a specified [element](examples/element.md)
* **`.class`**: Matches an element with a specified [class](examples/class.md) attribute
* **`#id`**: Matches an element with a specified [id](examples/id.md) attribute
* **`E[attribute]`**: Matches an element with a specified [attribute](examples/attribute.md)
* **`E[attribute=value]`**: Matches an element with a specific [equal](examples/attribute-equal.md) attribute / value pair
* **`E[attribute~=value]`**: Matches an element with an attribute that includes [whitespace-seperated](examples/attribute-whitespace-separated.md) word equal to the value
* **`E[attribute|=value]`**: Matches an element with an attribute that includes [hyphen-seperated](examples/attribute-hyphen-separated.md) list of values starting with the value
* **`E[attribute^=value]`**: Matches an element with an attribute where the value [starts with](examples/attribute-starts-with.md) exactly the value
* **`E[attribute$=value]`**: Matches an element with an attribute where the value [ends with](examples/attribute-ends-with.md) exactly the value
* **`E[attribute*=value]`**: Matches an element with an attribute that [contains](examples/attribute-contains.md) the value somewhere.

**[Combinators:](combinators.md)**
* **`E F`**: Matches the [descendant](examples/descendant.md) `F` of element `E`
* **`E > F`**: Matches the [child](examples/child.md) `F` of element `E`
* **`E + F`**: Matches the [adjacent sibling](examples/adjacent-sibling.md) `F` of element `E`
* **`E ~ F`**: Matches the [general sibling](examples/general-sibling.md) `F` of element `E`

**[Pseudo classes:](pseudo-classes.md)**
* **`:empty`**:  
* **`:root`**: 
* **`:last-child`**: 
* **`:only-child`**: 

**[Pseudo elements:](pseudo-elements.md)**
* **`:after`**: 
* **`:before`**: 
* **`:checked`**: 
* **`:default`**: 
* **`:disabled`**: 
* **`:enabled`**: 
* **`:first-child`**: 
* **`:first-letter`**: 
* **`:first-line`**: 
* **`:first-of-type`**: 
* **`:in-range`**: 
* **`:indeterminate`**: 
* **`:invalid`**: 
* **`:lang()`**: 
* **`:last-of-type`**: 
* **`:not()`**: 
* **`:nth-child()`**: 
* **`:nth-last-child()`**: 
* **`:nth-last-of-type()`**: 
* **`:nth-of-type()`**: 
* **`:only-of-type`**: 
* **`:optional`**: 
* **`:out-of-range`**: 
* **`:read-only`**: 
* **`:read-write`**: 
* **`:required`**: 
* **`:selection`**: 
* **`:target`**: 
* **`:valid`**: 
