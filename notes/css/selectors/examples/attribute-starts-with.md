The `E[foo^=bar]` selector matches an element whose `foo` attribute value starts exactly with the string `bar`

```css
section[foo^=bar] {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section foo="bar">
	Attribute foo="bar"
</section>
<section foo="barbaz">
	Attribute foo="barbaz"
</section>
<section foo="bazbar">
	Attribute foo="bazbar"
</section>
```
