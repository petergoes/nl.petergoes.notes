The `E[foo=bar]` selector matches an element with a `foo` attribute


```css
section[foo] {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section foo>
	Attribute foo
</section>
<section foo="bar">
	Attribute foo="bar"
</section>
<section foo="bar baz">
	Attribute foo="bar baz"
</section>
```
