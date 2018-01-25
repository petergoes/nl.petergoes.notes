The `E[foo*=bar]` selector matches an element whose `foo` attribute value 
contains the substring `bar`

```css
section[foo*=bar] {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section foo="bar">
	Attribute foo="bar"
</section>
<section foo="barbar">
	Attribute foo="barbar"
</section>
<section foo="baz">
	Attribute foo="baz"
</section>
```
