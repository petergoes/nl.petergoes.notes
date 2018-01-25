The `.foo ~ .bar` selector matches an `.bar` element preceded by an `.foo` 
element

```css
.foo ~ .bar {
	border: 3px dotted black;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
```

```html
<ul>
	<li>A <code>li</code>element</li>
	<li class="bar">A <code>li</code>element with a <code>.bar</code> class</li>
	<li class="foo">A <code>li</code>element with a <code>.foo</code> class</li>
	<li class="bar">A <code>li</code>element with a <code>.bar</code> class</li>
	<li class="bar">A <code>li</code>element with a <code>.bar</code> class</li>
</ul>
```
