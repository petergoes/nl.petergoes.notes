The `E[foo$=bar]` selector matches an element whose `foo` attribute value ends 
exactly with the string `bar`

```css
section[foo$=bar] {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section foo="bar">
	Attribute foo="bar"
</section>
<section foo="bazbar">
	Attribute foo="bazbar"
</section>
<section foo="barbaz">
	Attribute foo="barbaz"
</section>
```
