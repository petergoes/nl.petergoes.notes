The `.foo > .bar` selector matches an `.bar` element (direct) child of an `.foo`
element

```css
section,
section article {
	border: 1px solid black;
	padding: 0.5rem;
}

.foo > .bar {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section class="foo">
	A <code>section</code> element with a class of <code>foo</code>
	<article>
		A random <code>article</code> element
		<p class="bar">
			A <code>p</code> element with a class of <code>.bar</code>
			I will not be matched
		</p>
	</article>
	<p class="bar">
		A <code>p</code> element with a class of <code>.bar</code>
		I will be matched
	</p>
</section>
```
