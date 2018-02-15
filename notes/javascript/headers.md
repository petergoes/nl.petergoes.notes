# Headers

[MDN Headers()](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers)

The `Headers` object is kind of like a key/value pair store, but it works with
[Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).  
This can be quite confusing when you try to inspect the object. Say you have an
[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.  
The `response` looks something like this:

```js
{
	body: (...),
	bodyUsed: false,
	headers: Headers {},
	ok: true
}
```

In DevTools, you can open `headers` as if it were an object, but it appears to 
be empty. You have to use the `.entries()`, `.get()`, `.keys()` or `.values()` 
functions of `Header`, in order to get values.  
Note that `.entries()`, `.keys()` and `.values()` return 
[`iterators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)!
