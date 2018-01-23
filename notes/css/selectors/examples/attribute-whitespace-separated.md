The `E[foo~=bar]` selector matches an element whose `foo` attribute value is a list of whitespace-separated values, one of which is exactly equal to `bar`

Apparently it also matches `foo="bar"` (without a space)

```css
section[foo~=bar] {
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
	(note the spaces)
</section>
```
