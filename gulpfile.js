const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp
		.src('./src/**/*.ts')
		.pipe(babel())
		.pipe(gulp.dest('trial'));
});
