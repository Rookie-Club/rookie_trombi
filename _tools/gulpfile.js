var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: '../'
		},
	});
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('../index.html', browserSync.reload);
	gulp.watch('../style.css', browserSync.reload);
	gulp.watch('../script.js', browserSync.reload);
});
