The `E[foo|=bar]` selector matches an element whose `foo` attribute has a hyphen-separated list of values beginning (from the left) with `bar`

Apparently it also matches `foo="bar"` (without a hyphen)

Usefull for example with languages: `data-lang="en-GB en-US"`

```css
section[foo|=bar] {
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
	Attribute foo="bar " (note the space)
</section>
<section foo="bar-baz">
	Attribute foo="bar-baz"
</section>
<section foo="bar baz">
	Attribute foo="bar baz"
</section>
```
