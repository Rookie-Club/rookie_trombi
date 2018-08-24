var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'www'
		},
	});
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('./www/index.html', browserSync.reload);
	gulp.watch('./www/style.css', browserSync.reload);
	gulp.watch('./www/script.js', browserSync.reload);
});
