var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('app/*.html').on('change', browserSync.reload);
});


var shell = require('gulp-shell');

gulp.task('unit',
  shell.task(['karma start'], {
    ignoreErrors: true
  }));

gulp.task('e2e',
  shell.task(['protractor tests/protractor.conf.js'], {
    ignoreErrors: true
  }));