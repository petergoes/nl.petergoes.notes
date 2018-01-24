# Regular Expressions: overview

[General documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[`RegExp.prototype.exec()`](#exec)  
[`RegExp.prototype.test()`](#test)  
[`String.prototype.match()`](#match)  
[`String.prototype.search()`](#search)  
[`String.prototype.replace()`](#replace)  
[`String.prototype.split()`](#split)  

## RegExp literal based functions

### exec
A `RegExp` method that executes a search for a match in a string. It returns an array of information or `null` on a mismatch  
Identical to [`String.prototype.match()`](#match)  
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

```javascript
const matches = /foo(-)/.exec("foo-bar-baz");
const [ fullMatch, ...captureGroups ] = matches;
const { index, input } = matches;
console.log({ fullMatch, capturedGroups, index, input });
// { fullMatch: 'foo-', captureGroups: [ '-' ], index: 0, input: 'foo-bar-baz' }
```

### test
A `RegExp` method that tests for a match in a string. 
It returns `true` or `false`  
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

```javascript
/foo/.test("foo-bar-baz");
// true
```

## String based functions

### match
A `String` method that executes a search for a match in a string. It 
returns an array of information or `null` on a mismatch.  
See the example for the return value.  
Identical to [`RegExp.prototype.exec()`](#exec)  
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

```javascript
const matches = "foo-bar-baz".match(/foo(-)/);
const [ fullMatch, ...captureGroups ] = matches;
const { index, input } = matches;
console.log({ fullMatch, capturedGroups, index, input });
// { fullMatch: 'foo-', captureGroups: [ '-' ], index: 0, input: 'foo-bar-baz' }
```

### search
A `String` method that tests for a match in a string. It returns the 
index of the match, or `-1` if the search fails.  
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

```javascript
"foo-bar-baz".search(/bar/);
// 4
```

### replace
A `String` method that executes a search for a match in a string, and
replaces the matched substring with a replacement substring.
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

```javascript
"foo-bar-baz".replace("foo", "blub");
// 'blub-bar-baz'
"foo-bar-baz".replace(/b/g, "f");
// 'foo-far-faz'
"foo-bar-baz".replace(/(\w+)-(\w+)-(\w+)/g, "$3-$2-$1");
// 'baz-bar-foo'
function replacer(match, s1, s2, s3, offset, string) {
  return [s1, s2, s3].map(s => s.toUpperCase()).join('_');
}
"foo-bar-baz".replace(/(\w+)-(\w+)-(\w+)/, replacer);
// 'FOO_BAR_BAZ'
```

### split
A `String` method that uses a regular expression or a fixed string to
break a string into an array of substrings  
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

```javascript
"foo-bar-baz".split("-")
// [ 'foo', 'bar', 'baz' ]
"foo-bar-baz".split("-", 2)
// [ 'foo', 'bar' ]
```
