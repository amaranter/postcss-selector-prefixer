# postcss-selector-prefixer [![Build Status][ci-img]][ci]

[PostCSS] plugin for selector prefixer.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ronnyamarante/postcss-selector-prefixer.svg
[ci]:      https://travis-ci.org/ronnyamarante/postcss-selector-prefixer

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

## Usage

```js
postcss([ require('postcss-selector-prefixer')({ prefix: 'myPrefix_' }) ])
```

See [PostCSS] docs for examples for your environment.
