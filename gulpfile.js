var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
});

gulp.task('sass', function () {
  gulp.src('./src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/dev'));
});
