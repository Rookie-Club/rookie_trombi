var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
	console.log('Hello!');
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	});
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('./app/index.html', browserSync.reload);
	gulp.watch('./app/style.css', browserSync.reload);
	gulp.watch('./app/script.js', browserSync.reload);
});
