const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('convert', () =>
  gulp.src('src/**/*.js')
  .pipe(babel({
    presets: ['es2015-loose']
  }))
  .pipe(gulp.dest('dist'))
);

gulp.task('watch', ['convert'], () => {
  gulp.watch('src/**/*.js', ['convert']);
});

gulp.task('default', ['watch']);