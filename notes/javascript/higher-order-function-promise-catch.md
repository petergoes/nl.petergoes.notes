# Higer Order Function: Catch any Promise

[The codepen](https://codepen.io/petergoes/pen/QaPPpr?editors=0012)

I did not check to see if the `catchWith` function could handle a function that
does _not_ return a promise, and catches an error.

```javascript
// This function will throw an error.
// You can't use this function directly because 
// JavaScript will stop working after the error is thrown
function myFailingPromise(msg) {
	return new Promise(resolve => {
		throw new Error(msg);
	});
}


// The Higher Order Function which will catch errors
// First it accepts an error handler...
function catchWith(errorHandler) {
	// ...Then it produces an function which accepts the function that will 
	// throw an error...
	return function catcher(fn) {
		// ...Then it produces a function that can run the provided failing 
		// function
		return function catched(...args) {
			// When the runner function is called, it returns the result like 
			// nothing happens...
			return fn(...args)
				// ...or it catches any errors and let the error handler take 
				// care of it.
				// If errorHandler is not defined, log the error to the console
				.catch(errorHandler || console.log)
		}
	}
}

// How to use it:

// First we create two versions of the `catchWith` function.
// The first one uses `console.warn` to handle the error
// The second one uses `console.log` to handle the error
// You could also provide a function which logs the error to a database
const catchWithWarn = catchWith(console.warn);
const catchWithLog = catchWith(console.log);

// With the two catcher functions just created, you can create 
// two safe versions of the unsafe `myFailingPromise` function
const logFailingPromise = catchWithLog(myFailingPromise);
const warnFailingPromise = catchWithWarn(myFailingPromise);

// Now you can safely use the two versions of `myFailingPromise`
logFailingPromise('log this error');
warnFailingPromise('warn this error');

console.log('See? I still run!');
```
