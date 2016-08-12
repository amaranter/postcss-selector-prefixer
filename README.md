# postcss-selector-prefixer [![Build Status][ci-img]][ci]

[PostCSS] plugin for selector prefixer.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/amaranter/postcss-selector-prefixer.svg
[ci]:      https://travis-ci.org/amaranter/postcss-selector-prefixer

```css
.foo {
  /* Input example */
  color: red;
}
```

```css
.myPrefix_foo {
  /* Output example */
  color: red;
}
```
## Demo
![Gif Demo](https://cloud.githubusercontent.com/assets/3427885/11800314/abf1ff34-a2c2-11e5-84fa-5be55d189006.gif)

## Usage

```js
postcss([ require('postcss-selector-prefixer')({ prefix: 'myPrefix_' }) ])
```

See [PostCSS] docs for examples for your environment.
