The `E[foo=bar]` selector matches an element whose `foo` attribute value is 
exactly equal to `bar`


```css
section[foo=bar] {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section foo="bar">
	Attribute foo="bar"
</section>
<section foo="bar ">
	Attribute foo="bar "
	(note the space)
</section>
<section foo="bar-baz">
	Attribute foo="bar-baz"
</section>
<section foo="blub bar baz">
	Attribute foo="blub bar baz"
</section>
```
