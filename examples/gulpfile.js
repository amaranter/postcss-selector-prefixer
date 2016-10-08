var gulp =              require('gulp');
var postcss =           require('gulp-postcss');

gulp.task('stylesheet', function(){
    return gulp.src('./src/style.css')
    .pipe(postcss([require('../index.js')({ prefix: 'myPrefix_' })])) // Should use 'postcss-selector-prefixer' instead index.js
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['stylesheet']);
