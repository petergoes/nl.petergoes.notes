The `.foo .bar` selector matches an `.bar` element descendant of an `.foo` 
element

```css
section,
section article {
	border: 1px solid black;
	padding: 0.5rem;
}

.foo .bar {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<section>
	A <code>section</code> without a class attribute
	<p class="bar">
		A <code>p</code> with a class of <code>.bar</code>
	</p>
</section>
<section class="foo">
	A <code>section</code> with a class of <code>.foo</code>
	<article>
		A random <code>article</code> element
		<p class="bar">
			A <code>p</code> with a class of <code>.bar</code>
		</p>
	</article>
</section>
```
