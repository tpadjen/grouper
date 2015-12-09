var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});