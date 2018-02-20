# Vertically center text

You can use `display: inline-flex` to vertically center text.

```css
div {
	display: flex;
	width: 100%;
	height: 300px;
}

div > * {
	flex: 1;
}

span {
	display: inline-flex;
	align-items: center; /* vertically centers the text node */
	justify-content: center; /* horizontally centers the text node */
}
```

```html
<div>
	<span>foo</span>
	<span>bar</span>
</div>
```
